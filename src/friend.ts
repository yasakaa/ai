import autobind from 'autobind-decorator';
import 藍 from '@/ai';
import IModule from '@/module';
import getDate from '@/utils/get-date';
import { User } from '@/misskey/user';
import { genItem } from '@/vocabulary';
import { acct } from '@/utils/acct';
import { checkNgWord } from '@/utils/check-ng-word';
import { createDefaultKazutoriData } from '@/modules/kazutori/rate';

export type FriendDoc = {
  userId: string;
  user: User;
  name?: string | null;
  love?: number;
  kazutoriData?: any;
  lastLoveIncrementedAt?: string;
  todayLoveIncrements?: number;
  lastLoveIncrementedTime?: string;
  lastRPGTime?: string;
  cooldownLoveIncrementKey?: string[];
  todayReactCount?: number;
  lastReactAt?: string;
  perModulesData?: any;
  married?: boolean;
  transferCode?: string;
  isWelcomeMessageSent?: boolean;
  linkedAccounts?: string[];
};

export default class Friend {
  private ai: 藍;

  public get userId() {
    return this.doc.userId;
  }

  public get name() {
    return this.doc.name;
  }

  public get love() {
    return this.doc.love || 0;
  }

  public get married() {
    return this.doc.married;
  }

  public doc: FriendDoc;

  constructor(ai: 藍, opts: { user?: User; doc?: FriendDoc }) {
    this.ai = ai;

    if (opts.user) {
      const exist = this.ai.friends.findOne({
        userId: opts.user.id,
      });

      if (exist == null) {
        let inserted = this.ai.friends.insertOne({
          userId: opts.user.id,
          user: opts.user,
        });

        if (inserted == null) {
          throw new Error('Failed to insert friend doc');
        }

        this.doc = inserted;

        if (opts.user.alsoKnownAs?.length) {
          const moveto = opts.user.alsoKnownAs[0];
          try {
            const moveUserFriends = this.ai.friends.findOne({
              'user.uri': moveto,
            } as any);
            if (moveUserFriends) {
              const doc1 = new Friend(this.ai, { doc: moveUserFriends });
              console.log('move user ' + doc1.userId + ' -> ' + this.userId);
              this.doc.name = this.doc.name || doc1.name;
              let x = 0;
              let y = 0;
              while (y < doc1.love) {
                const amount =
                  y > 100
                    ? Math.ceil((0.5 / (((y || 0) * 2) / 100 - 1)) * 100) / 100
                    : 0.5;
                y = parseFloat((y + amount || 0).toFixed(2));
                x += 1;
              }
              console.log(`${x} : ${y}`);
              for (let i = 0; i < x; i++) {
                this.incLove(0.1, 'merge');
              }
              doc1.doc.love = 0;
              this.doc.married = doc1.married || this.married;
              this.doc.perModulesData = this.mergeAndSum(
                doc1.doc.perModulesData,
                this.doc.perModulesData,
              );
              this.doc.kazutoriData = this.mergeAndSum(
                doc1.doc.kazutoriData,
                this.doc.kazutoriData,
              );
              doc1.doc.kazutoriData = createDefaultKazutoriData();
              this.save();
              doc1.save();
            } else {
              console.log('move user not found ' + opts.user.id);
            }
          } catch {
            console.log('move user error ' + opts.user.id);
          }
        }
      } else {
        this.doc = exist;
        this.doc.user = { ...this.doc.user, ...opts.user };
        if (this.doc.name && !checkNgWord(this.doc.name)) this.doc.name = null;
        this.save();
      }
    } else if (opts.doc) {
      this.doc = opts.doc;
    } else {
      throw new Error('No friend info specified');
    }
  }

  @autobind
  public updateUser(user: Partial<User>) {
    this.doc.user = {
      ...this.doc.user,
      ...user,
    };
    this.save();
  }

  @autobind
  public getPerModulesData(module: IModule) {
    if (this.doc.perModulesData == null) {
      this.doc.perModulesData = {};
      this.doc.perModulesData[module.name] = {};
      this.save();
    } else if (this.doc.perModulesData[module.name] == null) {
      this.doc.perModulesData[module.name] = {};
      this.save();
    }

    return this.doc.perModulesData[module.name];
  }

  @autobind
  public setPerModulesData(module: IModule, data: any) {
    if (this.doc.perModulesData == null) {
      this.doc.perModulesData = {};
    }

    this.doc.perModulesData[module.name] = data;

    this.save();
  }

  @autobind
  public incLove(amount = 1, key?) {
    amount = amount * 5;

    // 親愛度100以上の場合、量に応じて上がる量が軽減
    if ((this.doc.love || 0) > 100)
      amount =
        Math.ceil((amount / (((this.doc.love || 0) * 2) / 100 - 1)) * 100) /
        100;

    const today = getDate();

    if (this.doc.lastLoveIncrementedAt != today) {
      this.doc.todayLoveIncrements = 0;
    }

    if (key?.includes('aichan') || key?.includes('hero')) key = 'hero';

    // RPGに関連する好感度増加は1日に1回
    if (
      key?.includes('hero') &&
      this.doc.lastRPGTime &&
      this.doc.lastRPGTime == today
    )
      return;

    const now = new Date();

    // 同じ種類の好感度増加は10分間に1回
    if (key && key != 'merge') {
      if (
        !this.doc.cooldownLoveIncrementKey ||
        this.doc.lastLoveIncrementedTime !==
          ('' + now.getHours() + now.getMinutes()).slice(0, 3)
      ) {
        this.doc.cooldownLoveIncrementKey = [];
        this.doc.lastLoveIncrementedTime = (
          '' +
          now.getHours() +
          now.getMinutes()
        ).slice(0, 3);
      }

      if (this.doc.cooldownLoveIncrementKey.includes(key)) {
        this.ai.log(
          `💗 ${this.userId} +0 (${this.doc.love || 0}) <${this.doc.lastLoveIncrementedTime} : ${key}>`,
        );
        return;
      } else {
        this.doc.cooldownLoveIncrementKey.push(key);
      }
    }

    // 100を超えるまでは1日に上げられる親愛度は最大15
    if (
      key != 'merge' &&
      this.doc.lastLoveIncrementedAt == today &&
      (this.doc.love || 0) < 100 &&
      (this.doc.todayLoveIncrements || 0) >= 15
    )
      return;

    // 100を超えた後は1日に上げられる親愛度は最大50
    if (
      key != 'merge' &&
      this.doc.lastLoveIncrementedAt == today &&
      (this.doc.love || 0) >= 100 &&
      (this.doc.todayLoveIncrements || 0) >= 50
    )
      return;

    if (this.doc.love == null) this.doc.love = 0;

    amount = parseFloat(amount.toFixed(2));

    // x00を超えた時に感謝のメッセージを送信する
    if (
      key != 'merge' &&
      (this.doc.love || 0) > 0 &&
      ((this.doc.love || 0) % 100) + amount >= 100
    ) {
      this.ai.sendMessage(this.doc.userId, {
        text: `${acct(this.doc.user)}\n${
          this.doc.name ? this.doc.name + '、' : ''
        }わらわと${'とっても'.repeat(
          Math.floor((this.doc.love || 0) / 100),
        )}たくさん遊んでくれてうれしいのじゃ！\nこれからも仲良くしてほしいのじゃ…！${
          this.doc.perModulesData?.rpg
            ? `\n（RPGモードでの行動回数が ${
                Math.floor((this.doc.love || 0) / 100) + 2
              } 回になりました！）`
            : ''
        }`,
      });
    }
    this.doc.love += amount;
    this.doc.love = parseFloat((this.doc.love || 0).toFixed(2));

    /*// 最大 100
		if (this.doc.love > 100) this.doc.love = 100;*/

    if (key != 'merge') {
      this.doc.lastLoveIncrementedAt = today;
      this.doc.todayLoveIncrements =
        (this.doc.todayLoveIncrements || 0) + amount;
      this.doc.todayLoveIncrements = parseFloat(
        (this.doc.todayLoveIncrements || 0).toFixed(2),
      );
    }
    if (key?.includes('hero')) {
      this.doc.lastRPGTime = today;
    }
    this.save();

    // 好感度が上昇した場合、ActiveFactorを増加させる
    if (!key || (key !== 'greet' && key != 'merge')) this.ai.incActiveFactor();

    if (key != 'merge')
      this.ai.log(
        `💗 ${this.userId} +${amount} (${this.doc.love || 0}) <${this.doc.todayLoveIncrements || 0} / ${(this.doc.love || 0) < 100 ? 15 : 50}>`,
      );
  }

  @autobind
  public decLove(amount = 1) {
    amount = amount * 5;

    // 親愛度100以上の場合、量に応じて下がる量が軽減
    if ((this.doc.love || 0) >= 100)
      amount =
        Math.ceil((amount / (((this.doc.love || 0) * 2) / 100 - 1)) * 100) /
        100;

    // 好感度x00以下になる場合、x00で止まる
    if (
      (this.doc.love || 0) >= 100 &&
      ((this.doc.love || 0) % 100) - amount < 0
    )
      this.doc.love = Math.floor((this.doc.love || 0) / 100) * 100 + amount;

    if (this.doc.love == null) this.doc.love = 0;
    this.doc.love -= amount;

    // 最低 -30
    if (this.doc.love < -30) this.doc.love = -30;

    // 親愛度マイナスなら名前を忘れる
    if (this.doc.love < 0) {
      this.doc.name = null;
    }

    this.save();

    this.ai.log(`💢 ${this.userId} -${amount} (${this.doc.love || 0})`);
  }

  @autobind
  public updateName(name: string | null) {
    this.doc.name = name;
    this.save();
  }

  @autobind
  public save() {
    this.ai.friends.update(this.doc);
  }

  @autobind
  public generateTransferCode(): string {
    const code = genItem() + genItem();

    this.doc.transferCode = code;
    this.save();

    return code;
  }

  @autobind
  public transferMemory(code: string): boolean {
    const src = this.ai.friends.findOne({
      transferCode: code,
    });

    if (src == null) return false;

    this.doc.name = src.name;
    this.doc.love = src.love;
    this.doc.married = src.married;
    this.doc.perModulesData = src.perModulesData;
    this.doc.kazutoriData = src.kazutoriData;
    this.save();

    // TODO: 合言葉を忘れる

    return true;
  }

  @autobind
  private mergeAndSum(obj1, obj2) {
    // 結果を格納する新しいオブジェクト
    const result = { ...obj1 };

    // obj2のキーと値を結果に追加、同じキーがあれば値を足し合わせる
    for (const key in obj2) {
      if (result[key] != undefined) {
        if (Array.isArray(result[key]) && Array.isArray(obj2[key])) {
          // 配列の場合は結合する
          result[key] = result[key].concat(obj2[key]);
        } else if (
          typeof result[key] === 'number' &&
          typeof obj2[key] === 'number'
        ) {
          // 数値の場合は足し合わせる
          result[key] += obj2[key];
        } else if (result[key] instanceof Date && obj2[key] instanceof Date) {
          // 日付の場合は未来の日付を採用する
          result[key] = result[key] > obj2[key] ? result[key] : obj2[key];
        } else if (
          typeof result[key] === 'object' &&
          typeof obj2[key] === 'object' &&
          !Array.isArray(result[key])
        ) {
          // オブジェクトの場合は再帰的にマージする
          result[key] = this.mergeAndSum(result[key], obj2[key]);
        } else {
          // 他の型の場合は後の方を採用する（ここでは単純に上書きするようにしています）
          result[key] = obj2[key];
        }
      } else {
        result[key] = obj2[key];
      }
    }

    return result;
  }
}
