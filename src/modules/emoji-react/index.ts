import log from '@/utils/log';
import autobind from 'autobind-decorator';
import { parse } from 'twemoji-parser';
const delay = require('timeout-as-promise');

import { Note } from '@/misskey/note';
import Module from '@/module';
import Stream from '@/stream';
import includes from '@/utils/includes';
import config from '@/config';
import { mecab } from '@/modules/keyword/mecab';
import { hankakuToZenkaku, katakanaToHiragana } from '@/utils/japanese';
export default class extends Module {
  public readonly name = 'emoji-react';

  private htl: ReturnType<Stream['useSharedConnection']>;

  @autobind
  public install() {
    this.htl = this.ai.connection.useSharedConnection('homeTimeline');
    this.htl.on('note', this.onNote);

    return {};
  }

  public async checkMecab(
    text: string,
    word: string | string[],
  ): Promise<boolean> {
    const tokens = await mecab(
      text,
      config.mecab,
      config.mecabDic,
      config.mecabCustom,
    );
    if (typeof word === 'string') word = [word];
    word = word.map((word) => katakanaToHiragana(word).toLowerCase());
    const keywordsInThisNote = tokens.filter(
      (token) =>
        token[0] &&
        token[3] !== '人名' &&
        (word as string[]).some((w) => {
          const token0 = katakanaToHiragana(
            hankakuToZenkaku(token[0]),
          ).toLowerCase();
          return token0.startsWith(w) || token0.endsWith(w);
        }),
    );
    return keywordsInThisNote.length > 0;
  }

  @autobind
  private async onNote(note: any) {
    log('onNote function called : ' + note.text);

    if (note.reply != null) return;
    if (note.text == null) return;
    if (note.text.includes('@')) return; // (自分または他人問わず)メンションっぽかったらreject
    if (note.user.isBot) return;
    if (note.reply != null && note.reply.user?.id !== note.user?.id) return;
    if (note.text == null) return;
    if (note.cw != null) return;
    if (note.text.includes('@')) return;

    // 公開範囲フォロワーでcw付きは深刻な物が多い為開かない
    if (note.visibility === 'followers' && note.cw != null) return;

    // そうじゃない場合、もこチキくんは50%の確率でCWを開いてくれる
    // ただし空白CWは開かない
    if (
      note.cw != null &&
      (!note.cw.trim() ||
        note.cw.trim().toLowerCase() == 'cw' ||
        Math.random() < 0.5)
    )
      return;

    // 公開範囲フォロワーの場合、50%でリアクションしない
    if (note.visibility === 'followers' && Math.random() < 0.5) return;

    const react = async (reaction: string, immediate = false) => {
      log('react function called : ' + note.text);

      if (!immediate) {
        await delay(1500);
      }
      this.ai.api('notes/reactions/create', {
        noteId: note.id,
        reaction: reaction,
      });
    };

    const customEmojis = note.text.match(/:([\w@.-]+):(?!\w)/g);
    if (customEmojis) {
      // カスタム絵文字が複数種類ある場合はキャンセル
      if (!customEmojis.every((val, i, arr) => val === arr[0])) return;

      this.log(`Custom emoji detected - ${customEmojis[0]}`);

      return react(customEmojis[0]);
    }

    const emojis = parse(note.text).map((x) => x.text);
    if (emojis.length > 0) {
      // 絵文字が複数種類ある場合はキャンセル
      if (!emojis.every((val, i, arr) => val === arr[0])) return;

      this.log(`Emoji detected - ${emojis[0]}`);

      let reaction = emojis[0];

      switch (reaction) {
        case '✊':
          reaction = '🤟';
          break;
        case '✌':
          reaction = '🤞';
          break;
        case '🖐':
          reaction = '🖖';
          break;
        case '✋':
          reaction = '🖖';
          break;
      }

      return react(reaction);
    }

    // 藍染リスト
    const aizenreactions = [
      ':itsukarasakkakushiteita:',
      ':watashigatennitatsu:',
      ':tuyoikotobawotukaunayo:',
      ':kurohitsugi:',
      ':kurohitugi_eisyou:',
    ];

    const randomAizen = Math.floor(Math.random() * aizenreactions.length);
    if (includes(note.text, ['藍染', 'あいぜん', '惣右介']))
      return react(aizenreactions[randomAizen]);
    if (
      includes(note.text, [
        'パンジャンドラム',
        ' 銅羅無',
        ' 把安蛇暗',
        'ぱんじゃんどらむ',
      ]) &&
      !includes(note.text, ['焼き', 'やき'])
    )
      return react(':panjandoramusama:');
    if (
      includes(note.text, [
        'エロトラップダンジョン',
        ' えろとらっぷだんじょん',
      ]) &&
      !includes(note.text, ['焼き', 'やき'])
    )
      return react(':etd:');
    if (
      includes(note.text, ['触手']) &&
      !includes(note.text, ['焼き', 'やき', '触手話'])
    )
      return react(':syokusyu:');

    if (includes(note.text, ['taikin', '退勤', 'たいきん', 'しごおわ']))
      return react(':otukaresama:');
    if (includes(note.text, ['ハリーポッター', 'はりーぽったー']))
      return react(':blobharrypotter:');
    if (includes(note.text, ['卍解', 'ばんかい', 'bankai']))
      return react(':bankai:');
    if (
      includes(note.text, [
        '激辛',
        'げきから',
        '🌶',
        '唐辛子',
        'とうがらし',
        'カプサイシン',
        'かぷさいしん',
      ])
    )
      return react(':redfog:');
    if (
      includes(note.text, ['dam', 'ダム', 'だむ']) &&
      !includes(note.text, [
        'キング',
        'ラン',
        'らん',
        'ガン',
        'マ',
        'ア',
        'ウィズ',
        'ポツ',
        'ノートル',
        'スター',
        'フリー',
        'gun',
      ])
    )
      return react(':damuha_arimasen:');
    if (
      includes(note.text, [
        'おはよ',
        'ohayo',
        'pokita',
        'おきた',
        '起きた',
        'おっは',
        'ぽきた',
      ]) &&
      note.text?.length <= 30 &&
      !includes(note.text, ['が起きた', 'がおきた'])
    )
      return react(':ohayo_usagi:');
    if (
      includes(note.text, [
        'おやす',
        'oyasu',
        'poyasimi',
        '寝る',
        'ぽやしみ',
      ]) &&
      note.text?.length <= 30 &&
      !includes(note.text, ['ちゃんねる'])
    )
      return react(':oyasu_mint:');
    if (includes(note.text, ['嘘']) && note.text?.length <= 30)
      return react(':usoda:');

    // キーワード反応
    // 新年
    const now = new Date();
    if (now.getMonth() === 0 && now.getDate() === 1) {
      if (
        includes(note.text, [
          'あけ',
          'おめ',
          'あけまして',
          'おめでとう',
          'happynewyear',
        ])
      )
        return react(':syuku_ohana:');
    }

    // 長い文章には反応しないことがあるようにする
    // 30-50文字 : スルー率5% / 51文字以降は1文字度にスルー率+2%
    if (
      Math.random() <
      (note.text?.replaceAll(/:\w+:/g, '☆').length < 30
        ? 0
        : note.text?.replaceAll(/:\w+:/g, '☆').length < 50
          ? 0.05
          : 0.05 + (note.text?.length - 50) / 50)
    )
      return;
    if (
      includes(note.text, ['帰りたい', 'かえりたい']) ||
      (includes(note.text, ['つら', 'しんど', 'sad', '泣い']) &&
        (await this.checkMecab(note.text, [
          'つら',
          'しんど',
          'sad',
          'sadrain',
          '泣い',
        ])))
    )
      return react(':neofox_pat_sob:');
    if (includes(note.text, ['あいちゃん'])) return react(':neofox_peek:');
    if (includes(note.text, ['阨'])) return react(':neofox_peek:');
    if (includes(note.text, ['皆尽村', 'みなづきむら']))
      return react(':kono_kasi_mura_no_kotoda:');
  }
}
