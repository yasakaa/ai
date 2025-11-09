import autobind from 'autobind-decorator';
import Module from '@/module';
import Message from '@/message';
import serifs from '@/serifs';
import parseDate from '@/utils/parse-date';

export default class extends Module {
  public readonly name = 'follow';

  @autobind
  public install() {
    // ホームタイムラインの共有コネクションを使用
    const tl = this.ai.connection.useSharedConnection('homeTimeline');

    // HTLのノートイベントを監視 (onNoteでミュート/リムーブ処理を行う)
    tl.on('note', this.onNote);
    return {
      // メンションに対するフックとして登録
      mentionHook: this.mentionHook,
    };
  }

  /**
   * メンションに対するフォローバック処理
   * @param msg 受信したメッセージ
   * @returns 処理結果 (リアクションまたは false)
   */
  @autobind
  private async mentionHook(msg: Message) {
    // 1. メッセージテキストがあり、かつ 'フォロー', 'フォロバ', 'follow me' のいずれかを含む場合のみ処理
    if (msg.text && msg.includes(['フォロー', 'フォロバ', 'follow me'])) {
      // --- 拒否・エラー判定（先に処理を中断する条件） ---

      // 2. ユーザーがリノートミュートされている場合
      if (msg.user.isRenoteMuted)
        return {
          // リアクションのみ返して終了（フォロー・返信はしない）
          reaction: msg.friend.love >= 0 ? ':neofox_approve:' : null,
        };

      // 3. 【リモートユーザー】かつ【親愛度 (love) が 10 未満】の場合
      if (msg.user.host && msg.friend.love < 10) {
        // 親愛度不足のエラーを返信
        msg.reply(serifs.core.followLoveErr);
        return {
          reaction: ':neofox_approve:',
        };
      }

      // 4. 【リモートユーザー】かつ【AIをフォローしていない】かつ【親愛度 (love) が 0 以上】の場合
      // ローカルユーザーはこの条件をスキップし、すぐにフォロー実行判定へ進む
      if (msg.user.host && msg.friend.love >= 0) {
        // 先行フォローを促すエラーを返信
        msg.reply(serifs.core.followBackErr);
        return {
          reaction: ':neofox_approve:',
        };
      }

      // --- フォロー実行・完了判定（上記の拒否条件をすべてクリアした場合） ---

      // 5. AIがまだユーザーをフォローしていない場合
      if (!msg.user.isFollowing) {
        // フォロー実行
        this.ai.api('following/create', {
          userId: msg.userId,
        });
        // フォロー完了メッセージを返信
        msg.reply(serifs.core.followBack(msg.friend.name));
        return {
          reaction: msg.friend.love >= 0 ? ':neofox_approve:' : null,
        };
      } else {
        // 6. AIがすでにユーザーをフォローしている場合
        // すでにフォローしている旨のメッセージを返信
        msg.reply(serifs.core.alreadyFollowBack(msg.friend.name));
        return {
          reaction: msg.friend.love >= 0 ? ':neofox_approve:' : null,
        };
      }
    } else {
      // フォロー関連のキーワードが含まれていない場合は処理しない
      return false;
    }
  }

  /**
   * HTLに流れてきたノートに対する処理 (フォローされていない・親愛度が低いユーザーのリムーブ処理)
   * @param note 受信したノート
   */
  @autobind
  private onNote(note: any) {
    // 処理対象の条件:
    // 1. ノートのユーザーがBotではない
    // 2. ノートのユーザーがリモートユーザーである (ローカルユーザーはリムーブ対象外)
    // 3. AIがユーザーをフォローしている (isFollowing)
    if (!note.user?.isBot && note.user.host && note.user.isFollowing) {
      // --- ユーザーからフォローされていない場合のリムーブ ---

      // ユーザーがAIをフォローしていない場合 (isFollowed)
      if (!note.user.isFollowed) {
        this.log('following/delete: ' + note.userId);
        // フォロー解除を実行
        this.ai.api('following/delete', {
          userId: note.userId,
        });
      }

      const friend = this.ai.lookupFriend(note.user.id);

      // --- 親愛度が低い場合のリムーブ ---

      // 親愛度データがない、または親愛度が 10 未満の場合
      if (!friend?.love || friend?.love < 10) {
        this.log('following/delete: ' + note.userId);
        // フォロー解除を実行
        this.ai.api('following/delete', {
          userId: note.userId,
        });
      } else {
        // --- 親愛度が低いが、一定期間やり取りがない場合のリムーブ ---

        const time = parseDate(friend.doc.lastLoveIncrementedAt)?.getTime();

        // 親愛度が100未満 and 最後に親愛度が上がってからの経過時間が一定の閾値を超えている
        if (
          friend?.love < 100 &&
          time &&
          Date.now() - time >
            // 閾値計算のロジック:
            // love * 0.3 * 24 * 60 * 60 * 1000 (loveが多いほど閾値が伸びる)
            // love >= 50 の場合、さらに期間が2倍に延長される
            // (つまり、親愛度50未満だとより早くリムーブ対象になる)
            friend?.love *
              0.3 *
              24 *
              60 *
              60 *
              1000 *
              (friend?.love >= 50 ? 2 : 1)
        ) {
          // モジュール固有のデータを取得 (リムーブカウンター用)
          const data = friend.getPerModulesData(this);

          // カウンターをインクリメント
          data.removeCount = (data.removeCount ?? 0) + 1;
          this.log(note.userId + ' removeCount: ' + data.removeCount);

          // カウンターが20以上になった場合
          if (data.removeCount >= 20) {
            data.removeCount = 0; // カウンターをリセット
            this.log('following/delete: ' + note.userId);
            // フォロー解除を実行
            this.ai.api('following/delete', {
              userId: note.userId,
            });
          }

          // モジュール固有のデータを保存
          friend.setPerModulesData(this, data);
        }
      }
    }
  }
}
