import 藍 from '@/ai';
import autobind from 'autobind-decorator';
import Module from '@/module';
import Message from '@/message';
import serifs from '@/serifs';
import seedrandom from 'seedrandom';
import includes from '@/utils/includes';

export default class extends Module {
  public readonly name = 'dice';

  @autobind
  public install() {
    return {
      mentionHook: this.mentionHook,
    };
  }

  @autobind
  private async mentionHook(msg: Message) {
    const text = msg.extractedText.trim();

    // textが「gr」で始まり、その後に空白文字が続くか、文字列がそこで終わる場合にマッチ
    if (text.match(/^gr(\s|$)/)) {
      const roll1 = Math.floor(Math.random() * 6) + 1;
      const roll2 = Math.floor(Math.random() * 6) + 1;

      const abilityMap = {
        1: '器用度',
        2: '敏捷度',
        3: '筋力',
        4: '生命力',
        5: '知力',
        6: '精神力',
      } as const;

      const ability1 = abilityMap[roll1 as keyof typeof abilityMap];
      const ability2 = abilityMap[roll2 as keyof typeof abilityMap];

      const result =
        roll1 === roll2
          ? `gr [${roll1},${roll2}]->(${ability1})`
          : `gr [${roll1},${roll2}]->(${ability1} or ${ability2})`;

      msg.reply(result, { visibility: 'public' });

      return {
        reaction: 'dice',
      };
    }

    if (msg.extractedText == null) return false;

    if (
      msg.extractedText.endsWith('ですか？') ||
      msg.extractedText.endsWith('ますか？') ||
      msg.extractedText.endsWith('ですよね？')
    ) {
      const rng = seedrandom(msg.extractedText.trim() + ':q');
      const v = rng();
      if (v < 0.5) {
        if (v < 0.25) {
          msg.reply('多分そうじゃ、部分的にそうじゃ', { visibility: 'public' });
        } else {
          msg.reply('そうじゃ', { visibility: 'public' });
        }
      } else {
        if (v > 0.75) {
          msg.reply('多分ちがうのじゃ、部分的にちがうのじゃ', {
            visibility: 'public',
          });
        } else {
          msg.reply('ちがうのじゃ', { visibility: 'public' });
        }
      }
      return {
        reaction: 'love',
      };
    }

    if (
      msg.replyId &&
      includes(msg.extractedText, ['ファクト']) &&
      includes(msg.extractedText, ['チェック'])
    ) {
      if (msg.replyNote.uri) {
        const replyUser = await this.ai.api('users/show', {
          userId: msg.replyNote.userId,
        });
        if (!replyUser.isFollowed && !replyUser.isFollowing) {
          msg.reply(
            'わらわをフォローしていないリモートユーザはファクトチェックできぬのじゃ',
            { visibility: 'specified' },
          );
          return {
            reaction: ':neofox_approve:',
          };
        }
      }

      const opt =
        msg.replyNote.visibility == 'followers' ||
        msg.replyNote.visibility == 'specified'
          ? { visibility: 'public', references: [msg.replyId] }
          : { visibility: 'public', renote: msg.replyId };

      if (msg.replyNote.userId == this.ai.account.id) {
        msg.reply(
          '\nこの投稿はもちろん、正しいのじゃ！…どうして疑うのじゃ？',
          opt,
        );
        return {
          reaction: 'love',
        };
      }

      const rng = seedrandom(msg.replyId + ':f');
      const v = rng();
      if (v < 0.5) {
        if (v < 0.25) {
          msg.reply('\nこの投稿は多分正しいのじゃ、部分的に正しいのじゃ', opt);
        } else {
          msg.reply('\nこの投稿は正しいかもしれぬ', opt);
        }
      } else {
        if (v > 0.75) {
          msg.reply('\nこの投稿は多分嘘じゃ、部分的に嘘じゃ', opt);
        } else {
          msg.reply('\nこの投稿は嘘かもしれぬ', opt);
        }
      }
      return {
        reaction: 'love',
      };
    }

    const query = msg.extractedText.match(/([0-9]+)[dD]([0-9]+)/);

    if (query == null) return false;

    const times = parseInt(query[1], 10);
    const dice = parseInt(query[2], 10);

    if (times < 1) return false;
    if (dice < 2 || dice > Number.MAX_SAFE_INTEGER) return false;

    if ((dice.toString().length + 1) * times > 7000) return false;

    const results: number[] = [];

    for (let i = 0; i < times; i++) {
      results.push(Math.floor(Math.random() * dice) + 1);
    }

    msg.reply(
      serifs.dice.done(
        results.join(' '),
        results.length > 1
          ? results.reduce((a, c) => a + c).toLocaleString()
          : null,
      ),
      { visibility: 'public' },
    );

    return {
      reaction: 'love',
    };
  }
}
