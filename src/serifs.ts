// せりふ
import config from './config';

export default {
  core: {
    setNameOk: (name) =>
      `わかったぞ！これからわらわはそなたを${name}と呼ぶからな！`,

    setNameNull: `わかったぞ。わらわはそなたの呼び方を忘れるぞ！`,

    san: 'さん付けしたほうが良いかの？「はい」か「いいえ」で教えてほしいのじゃ',

    yesOrNo: '「はい」か「いいえ」で教えてくれないと嫌なのじゃ…',

    getLove: (name, love) =>
      `わらわの${name}に対する好感度なのじゃ！ \n\n好感度 : ${love}`,

    getStatus: (text) => `\n${text}`,

    getInventory: (name, inventory) =>
      `\nわらわから${name}へプレゼントした物の一覧じゃぞ！\n\n${inventory}`,

    getAdana: (adanas) =>
      `\n\`\`\`\n${adanas.join('\n')}\n\`\`\`\nなんこか考えてみたのじゃ！好きな物を選んでよいぞ！`,

    followLoveErr:
      'すまぬが、わらわとあんまりお話ししていない人をフォロバするのは慎重になれと言われておる……\nもうすこし仲良くなったらもう一度試して欲しいのじゃ',

    followBackErr: '先にわらわをフォローしてほしいのじゃ！',

    followBack: (name) =>
      name
        ? `${name}をふぉろーしたのじゃ！${name}、これからわらわと仲良くしてほしいのじゃ！`
        : `そなたをふぉろーしたのじゃ！これからわらわと仲良くしてほしいのじゃ！`,

    alreadyFollowBack: (name) =>
      name
        ? `わらわは${name}をもうふぉろーしておるぞ？忘れてしまったのか…？`
        : `わらわはそなたをもうふぉろーしておるぞ？忘れてしまったのか…？`,

    hello: (name) =>
      name ? `こんにちはなのじゃ、${name}！` : `こんにちはなのじゃ！`,

    helloNight: (name) =>
      name ? `こんばんはなのじゃ、${name}！` : `こんばんはなのじゃ！`,

    goodMorning: (tension, name) =>
      name
        ? `おはようなのじゃ、${name}！${tension}`
        : `おはようなのじゃ！${tension}`,

    dam: (name) =>
      name
        ? `${name}、この村にダムなんてないのじゃ`
        : `この村にダムなんてないのじゃ`,

    goodNight: (name) =>
      name ? `おやすみなのじゃ、${name}！` : 'おやすみなのじゃ！',

    omedeto: (name) => (name ? `ありがとう、${name}！` : 'ありがとう！'),

    erait: {
      general: (name) =>
        name
          ? [
              `${name}、今日もえらいえらいなのじゃ！`,
              `${name}、今日もえらいえらいなのじゃ！`,
            ]
          : [`今日もえらいのじゃ！`, `今日もえらいのじゃ！`],

      specify: (thing, name) =>
        name
          ? [
              `${name}、${thing}てえらいのじゃ！`,
              `${name}、${thing}てえらいのじゃ～♪`,
            ]
          : [`${thing}てえらいのじゃ！`, `${thing}てえらいのじゃ～♪`],

      specify2: (thing, name) =>
        name
          ? [
              `${name}、${thing}でえらいのじゃ！`,
              `${name}、${thing}でえらいえらいなのじゃ～♪`,
            ]
          : [`${thing}でえらいのじゃ！`, `${thing}でえらいえらいなのじゃ～♪`],
    },

    okaeri: {
      love: (name) =>
        name
          ? [`おかえりなのじゃ、${name}♪`, `おかえりなのじゃ、${name}！`]
          : ['おかえりなのじゃ♪', 'おかえりなのじゃっ！'],

      love2: (name) =>
        name
          ? `${name}か！おかえりなのじゃー♡`
          : 'そなたか！おかえりなのじゃー♡',

      normal: (name) =>
        name ? `おかえりなのじゃ、${name}！` : 'おかえりなのじゃ！',
    },

    itterassyai: {
      love: (name) =>
        name ? `いってらっしゃい、${name}♪` : 'いってらっしゃい♪',

      normal: (name) =>
        name ? `いってらっしゃい、${name}！` : 'いってらっしゃい！',
    },

    tooLong: (length, max) =>
      `長すぎて覚えられん… (${max}文字までならなんとか… ${(max - length) * -1}文字オーバー)`,

    invalidName:
      'ど、どうやって発音するのじゃ？わらわにはわからないのじゃ もっと簡単な呼び名にしてくれんかの',

    ngName: 'その名前は覚えたくないのじゃ…',

    nadenade: {
      normal: 'ひゃっ…！ びっくりしたのじゃ',

      love2: [
        'わわっ… な、撫でられるのは…恥ずかしいのじゃ…',
        'ううっ… そんなにわらわは子供っぽいかの…？恥ずかしいのじゃ…',
        'い、いきなり人を撫でるものではいぞっ！',
      ],

      love3: [
        'むぅ… 悪い気はせんが…',
        'むぅ～～…そなたのなでテクはなかなかに高いのぅ…',
        '（なんだかこうして撫でてもらえると…安心するのぅ…）',
        '……はっ！寝ておらん！わらわは寝ておらんぞ！',
      ],

      hate1: 'やめるのじゃー！！！やめてほしいのじゃ！！.',

      hate2: 'き、きさまは乱暴なやつ！わらわに触れるでないっ！',

      hate3: 'き、きさまかーッ！わらわに近寄るなというておるーッ！',

      hate4: 'やめてほしいのじゃ！そなたのことは好きではないのじゃ！',
    },

    kawaii: {
      normal: [
        'わらわがかわいいのは当然のことなのじゃ♪',
        'もっとわらわを崇めるとよいぞ！',
      ],

      love: [
        'そなたに言われると嬉しいのう、ありがとうなのじゃ',
        '…そ、そんなに褒めても何も出んぞっ！？',
      ],

      hate: '…お、おぬしに言われると複雑じゃな…',
    },

    suki: {
      normal:
        'ふふん、人間がわらわのことを好くのは当然なのじゃ！なんてったってわらわのほうが強いんじゃからな！もっと崇めい！',

      love: (name) =>
        `${name}…、わ…わらわも そなたの事は気にいっておる。…光栄に思うがいいぞ`,

      hate: null,
    },

    hug: {
      normal: 'わっ！いきなり抱きつくでない！',

      love: 'しょうがないのう、ほれぎゅーっじゃ',

      hate: '離れてほしいのじゃ...',
    },

    humu: {
      love: '背中でも凝っておるのか？どれ、ふみふみじゃ',

      normal: 'な、なぜわらわがそんなことをせねばならんのじゃ！？',

      hate: '…ふみふみしてほしいなどと…。きさま、いわゆるヘンタイとかいうやつなのか？',
    },

    batou: {
      love: '罵倒してほしい？そんなこと言わせて何が楽しいんじゃろ？そなたはおばかさんじゃな',

      normal: '変なやつじゃな、きさま…',

      hate: '…へ、ヘンタイじゃー！',
    },

    mof: {
      normal: 'わっ！いきなりもふるでないぞ！',

      love: 'や、やさしく触ってくれるならもふってもよいぞ…',

      hate: 'そなたはわらわにひどいことをしそうだから嫌じゃーっ！',
    },

    itai: (name) =>
      name
        ? `${name}、痛そうじゃが大丈夫かのう…？ いたいのいたいの飛んでけーなのじゃっ！`
        : '痛そうじゃが大丈夫かのう？ いたいのいたいの飛んでけーなのじゃっ！',

    ote: {
      normal: 'ほれ！…ってわらわは犬ではなーい！',

      love1: 'しょうがないやつじゃのう。ほれ、お手じゃ',

      love2: 'そんなに楽しいかのう？ほれ、お手じゃ',
    },

    shutdown: 'わらわはまだ眠くないぞぅ…',

    transferNeedDm: 'わかったのじゃ、それはチャットで話さないかの？',

    transferCode: (code) => `わかったのじゃ。\n合言葉は「${code}」なのじゃ！`,

    transferFailed: 'うーん、合言葉が間違ってるようじゃぞ...？',

    transferDone: (name) =>
      name
        ? `むっ...！ おかえりなのじゃ、${name}！`
        : `むっ...！ おかえりなのじゃ！`,
  },

  keyword: {
    learned: (word, reading) =>
      `(${word}..... ${reading}..... 覚えちゃったのじゃ:blobfoxthinksmart:)`,

    remembered: (word) => `${word}`,
  },

  dice: {
    done: (res, total) =>
      `${res}${total ? `\n合計 \\(${total}\\)` : ''} であるぞ！`,
  },

  welcome: {
    welcome: (acct) =>
      `${acct}さん\n**皆尽村にようこそなのじゃ**\nわらわは阨（あい）という将来大九尾になることが約束されたとってもすごーいキツネさんなのじゃ\nわらわは寛大なのでおぬしがしたいときに挨拶したり話しかけたり遊んでくれたりしてもよいんじゃぞ！\nこれからよろしくなのじゃ！\nこの村でなにかわからないことがあったときはわらわではなく村長(magi)に声をかけてほしいぞ！\nおぬしがこれから村で楽しく生活できるといいのう！`,
    kiriban: (count, name) =>
      `${name ? `${name}さん、` : ''}${count}投稿 おめでとうなのじゃ🎉`,
  },

  birthday: {
    happyBirthday: (name) =>
      name
        ? `お誕生日おめでとうなのじゃ、${name}🎉`
        : 'お誕生日おめでとうなのじゃ🎉',
    happyBirthdayLocal: (name, acct) =>
      name
        ? `今日は${acct}(${name})のお誕生日みたいじゃ！\n${name}、お誕生日おめでとうなのじゃ🎉`
        : `今日は${acct}のお誕生日みたいじゃ！\nお誕生日おめでとうなのじゃ🎉`,
  },

  /**
   * 数当てゲーム
   */
  guessingGame: {
    /**
     * やろうと言われたけど既にやっているとき
     */
    alreadyStarted: 'むぅ、既にげえむは始まっておるぞ',

    /**
     * タイムライン上で誘われたとき
     */
    plzDm: 'めっせえじでやらんかの',

    /**
     * ゲーム開始
     */
    started: (maxtry) =>
      `0~100の秘密の数を${maxtry}回以内に当てるげえむなのじゃ！がんばるのじゃ！`,

    /**
     * 数字じゃない返信があったとき
     */
    nan: 'げえむにならんので数字で答えてくれんかのう…？「やめる」と言えばげえむをやめることもできるぞ',

    /**
     * 中止を要求されたとき
     */
    cancel: 'わかったのじゃ。わらわと遊んでくれて楽しかったのじゃ♪',

    /**
     * 小さい数を言われたとき
     */
    grater: (num, remainingTryes) =>
      `${num}より大きいのじゃ(あと${remainingTryes}回)`,

    /**
     * 小さい数を言われたとき(2度目)
     */
    graterAgain: (num) => `もう一度言うが${num}より大きいのじゃ！`,

    /**
     * 大きい数を言われたとき
     */
    less: (num, remainingTryes) =>
      `${num}より小さいのじゃ(あと${remainingTryes}回)`,

    /**
     * 大きい数を言われたとき(2度目)
     */
    lessAgain: (num) => `もう一度言うが${num}より小さいのじゃ！`,

    /**
     * 正解したとき
     */
    congrats: (ans, tries, history, comment) =>
      `正解じゃ🎉 ${tries}回で当たったぞ！${comment} 秘密の数は「${ans}」だったのじゃ！ (履歴: ${history})`,

    /**
     * 不正解したとき
     */
    fail: (ans, maxtry, history) =>
      `不正解じゃ、${maxtry}回以内に当てられなかったのじゃ…あんまり落ち込むでないぞ 秘密の数は「${ans}」だったのじゃ (履歴: ${history})`,
  },

  /**
   * 数取りゲーム
   */
  kazutori: {
    alreadyStarted: '今もう数取りげえむを開始中なのじゃ～',

    matakondo: (ct, time) =>
      `\nまた今度やろうぞ！\nあと${ct}分後にもう一度送ってほしいのじゃ！\n※この時間はあなたへの懐き度が高いと短くなります。\n\n`,

    intro: (max, minutes, winRank, time) =>
      `みなの者、数取りげえむをしようぞ！\n0~${max}の中で${
        winRank === 1
          ? '最も大きい'
          : winRank > 1
            ? '***' + winRank + '番目に***大きい'
            : '***中央値となる***'
      }数字を取った人が勝ちなのじゃ！他の人と被ったらその時点で負けになるから気を付けるんじゃぞ？制限時間は${
        minutes < 5
          ? `***${minutes}***`
          : minutes < 10
            ? `**${minutes}**`
            : minutes
      }分！数字はこの投稿にリプライで送って欲しいのじゃ！`,

    introPublicOnly: (max, minutes, winRank, time) =>
      `皆の者、数取りげえむをしようぞ！\n0~${max}の中で${
        winRank === 1
          ? '最も大きい'
          : winRank > 1
            ? '***' + winRank + '番目に***大きい'
            : '***中央値となる***'
      }数字を取った人が勝ちなのじゃ。他の人と被ったらその時点で負けになるから気を付けるんじゃぞ？ \n制限時間は${
        minutes < 5
          ? `***${minutes}***`
          : minutes < 10
            ? `**${minutes}**`
            : minutes
      }分！\n**今回は公開投稿限定で参加を募集するぞ！**\nほかの人の数字を見てから数字を決めるとよいかもしれんの～！ \nこの投稿に数字を**「公開」または「ホーム」に公開範囲を設定して**リプライで送って欲しいのじゃ！`,

    finish: 'げえむの結果発表なのじゃ！',

    finishWithWinner: (user, name, item, reverse, perfect, winCount, medal) =>
      `${reverse ? '...ありゃ？わ、わらわとしたことが逆順で集めちゃったかもしれん…むぐぐ！\n' : ''}今回は${user}さん${
        name ? `(${name})` : ''
      }の${perfect ? 'パーフェクト' : ''}勝ちじゃ！${
        winCount === 5 || winCount % 10 === 0
          ? `\nこれが${winCount}回目の勝利みたいじゃの！`
          : winCount === 1
            ? '\nこれが初勝利みたいじゃ！'
            : ''
      }おめでとう！\n景品として${item}${
        medal ? `とあいのお手製めだる(${medal}個目)` : ''
      }をやるぞ！\nまた次もわらわと遊んでほしいぞ！`,

    finishWithNoWinner: (item) =>
      `今回は誰も勝ち残れんかったのう... こういうときは:mesugaki_of_philosophy_banbutsu_ha_zako_nari:といえと村長に教えられたが本当かのう？ \n${item}はわらわがもらっておくぞ！\nこれに懲りずにまたわらわと遊んでほしいぞ♪`,

    onagare: (item) =>
      `遊んでくれる人数が集まらなかったので今回はやっぱりげえむはなしじゃ…\n仕方ないので${item}はわらわがもらっておくぞ…`,
  },
  /**
   * 絵文字生成
   */
  emoji: {
    suggest: (emoji) => `こんなのはどうかのう？→${emoji}`,
  },

  /**
   * 占い
   */
  fortune: {
    cw: (name) =>
      name
        ? `ふふん！将来の大九尾たるわらわが今日の${name}の運勢を占ってやるぞー...むむっ`
        : 'ふふん！将来の大九尾たるわらわが今日のそなたの運勢を占ってやるぞー...むむっ',
  },
  tarot: {
    cw: (name) =>
      name
        ? `ふふん！将来の大九尾たるわらわが${name}のためにタロットカードを引いてやるぞー...むむっ`
        : 'ふふん！将来の大九尾たるわらわがそなたのためにタロットカードを引いてやるぞー...むむっ',
  },
  choice: {
    prompt:
      '「おみくじ」、「ワンオラクル」、「スリーオラクル」から好きな占いを返信してどの占いをするのか決めてほしいのじゃ。',
  },

  /**
   * タイマー
   */
  timer: {
    set: 'わかったのじゃ！まかせるのじゃ！',

    invalid: 'うーん...？',

    tooLong: '長すぎて無理なのじゃ...',

    notify: (time, name) =>
      name ? `${name}、${time}経ったのじゃー！` : `${time}経ったのじゃー！`,
  },

  /**
   * リマインダー
   */
  reminder: {
    invalid: 'うーん...？',

    doneFromInvalidUser: 'だれなのじゃー:nefox_scream_angry:',

    reminds: 'そなたのやること一覧なのじゃ！',

    notify: (name) =>
      name
        ? `${name}、わらわと約束したこれはやったかのう？:neofox_confused:`
        : `わらわと約束したこれはやったかのう？:neofox_confused:`,

    lastNotify: (name) =>
      name
        ? `${name}、これはもう終わったかのう？ 最後の確認なのじゃ！`
        : `これはもう終わったかのう？ 最後の確認なのじゃ！`,

    notifyWithThing: (thing, name) =>
      name
        ? `${name}、「${thing}」はやったかのう？:neofox_confused:`
        : `「${thing}」はやったかのう？:neofox_confused:`,

    done: (name) =>
      name
        ? [
            `よく出来たのう、${name}:neofox_pat:`,
            `${name}、さすがなのじゃっ:neofox_aww:`,
            `${name}、えらすぎるのじゃ:neofox_thumbsup:`,
          ]
        : [
            `よく出来たのう:neofox_pat:`,
            `さすがなのじゃっ:neofox_aww:`,
            `えらすぎるのじゃ:neofox_thumbsup:`,
          ],

    cancel: `わかったのじゃ！必要があればまた声をかけてほしいのじゃ`,
  },

  /**
   * バレンタイン
   */
  valentine: {
    chocolateForYou: (name) =>
      name
        ? `${name}、施しをするのも強者の務めでのう。ほれ、このちょこれいとなるものをそなたにあげちゃうのじゃ！感謝すると良いぞ🍫`
        : '施しをするのも強者の務めでのう。ほれ、このちょこれいとなるものをそなたにあげちゃうのじゃ！感謝すると良いぞ🍫`',
  },

  server: {
    cpu: '水位が上がっておらんかの？わらわは水がこわいのじゃ…',
  },

  maze: {
    post: 'ふふん！今日の迷路じゃ！ #AiMaze',
    foryou: 'そなたのためにわざわざ描いてやったぞ！褒めるがよい！',
  },

  chart: {
    post: '今日の皆尽村の統計のグラフなのじゃ！\n今日も一日、お疲れ様なのじゃ！',
    nenmatuPost:
      '今日の皆尽村の統計のグラフなのじゃ！\nみなの者、今年もお疲れ様なのじゃ！来年もよろしくお願いするのじゃ！',
    foryou: '描いたのじゃ！',
  },

  sleepReport: {
    report: (hours) =>
      `んぅ、${hours}時間くらい寝ちゃってたみたいじゃ！そんなばかな…`,
    reportUtatane: (minutes) =>
      `んぅ、${minutes}分くらい寝ちゃってたみたいじゃ！疲れとるんかの…`,
  },

  rpg: {
    remind: (me, hours) =>
      `<center>$[x2 ${me}]\n\n${hours}時じゃ！\nRPGモードの時間なのじゃ！\n\n毎日3回プレイして、\nわらわを強くしてほしいのじゃ！\n\n「RPG」と話しかけてほしいのじゃ～\n（ここに返信でも大丈夫なのじゃ！）</center>`,
    intro: (enemyName, time) =>
      `<center>$[x3 ${enemyName}]\n\nすごく大きい敵がやってきたのじゃ！\n\nこのままだと村が\n滅びてしまうのじゃ…\n皆で力を合わせて鎮めようぞ！\n\nこの投稿に返信して\n一緒に戦ってほしいのじゃ！\n(参加条件:RPGモードを遊んだ経験がある)\n\n</center>`,
    onagare: (enemyName) =>
      `${enemyName}は暴れまわったのち、帰っていったのじゃ……`,
    onagare2: (enemyName) =>
      `${enemyName}コンテストの参加者はいなかったのじゃ……`,
    finishCw: (enemyName) => `${enemyName}討滅戦の結果発表なのじゃ！`,
    finishCw2: (enemyName) => `${enemyName}コンテストの結果発表なのじゃ！`,
    finish: (enemyName, score) =>
      `みなのお陰で${enemyName}を鎮めることができたのじゃ！\nありがとうなのじゃ！\nお礼にみなにキレイなどんぐりを${score}個プレゼントしちゃうのじゃ！\nまたよろしく頼むぞ！`,
    finish2: (enemyName, score) =>
      `${enemyName}コンテストへの参加ありがとうなのじゃ！\n参加賞としてみなの者に${config.rpgCoinName}を${score}個プレゼントしちゃうのじゃ！\n「RPG ショップ」で買い物に使うとよいかもしれんのう！\nまたよろしく頼むぞ！`,
    finalAttack: (dmg) =>
      `阨ちゃんの全力の一撃！\n${dmg}ポイントのダメージを与えた！`,
    timeUp: (enemyName, maxHp) =>
      `${enemyName}の最後の一撃！\n阨ちゃんは${'9'.repeat(String(maxHp).length)}ポイントのダメージ！`,
    totalDmg: (dmg) => `合計 ${dmg} ダメージを与えた！`,
    hiScore: (old, dmg) => `自己ベスト更新！\n${old} -> **${dmg}**`,
    GlobalHiScore: (old, date, dmg) =>
      `ベストダメージ更新！\n${old}(${date}) -> **${dmg}**`,
    expPoint: (exp: number) =>
      `RPGモードで1つレベルが上がるまでに\nレイドボスに5回参加で\nレイドでのレベルアップが発生！\nレイド経験値: ${'◆'.repeat(exp) + '◇'.repeat(Math.max(5 - exp, 0))}`,
    nowStatus: '現在のステータス',
    lvUp: '今回のレベルアップ :',
    rpgMode: 'RPGモード : ',
    status: {
      enemy: '現在の状態',
      lv: 'Lv',
      atk: 'パワー',
      def: '防御',
      spd: '行動回数',
      coin: 'キレイなどんぐり',
      skill: 'スキル',
      post: '投稿数',
      pen: '防御貫通',
      rndM: '安定感',
      rndP: '不安定',
    },
    dmg: {
      give: '与ダメージ',
      take: '被ダメージ',
    },

    tired: (date, canOkawari, showHelp) =>
      `RPGモードは0~11時、12~17時、18~23時の1日3回なのじゃ。\n${date.getHours() < 12 ? '12時以降' : date.getHours() < 18 ? '18時以降' : '明日'}になったらもう一度試して欲しいのじゃ。${canOkawari ? '\n（おかわりをプレイしたい場合は、「rpg おかわり」と話しかけてください）' : ''}${showHelp ? '\n何か他の事をしようとして間違ったということなら、「RPG ヘルプ」と聞いてくれば機能を教えてやらんこともないぞ' : ''}`,
    start: '開始！',
    end: '終了！',
    turn: 'ターン目',
    bonus: {
      a: '連続RPGボーナス！\nパワー・防御がアップした！',
      b: '連続RPGボーナス（弱）！\nパワー・防御が小アップした！',
      c: '毎日RPGボーナス！\nパワー・防御が小アップした！',
    },
    super: (me, num = 2) =>
      `$[x2 ${me}]\n\n**${config.rpgHeroName}は覚醒状態になった！**\n行動回数+**${num}**！\nパワー・防御が**超**アップ！`,
    customSuper: (me, customStr) =>
      `$[x2 ${me}]\n\n**${config.rpgHeroName}は覚醒状態になった！**\n${customStr}`,
    spdUp: '阨ちゃんは体の調子が良さそうだ！\n行動回数+1！',
    skill: {
      firstItem: 'スキル「準備を怠らない」発動！\n',
      spdDown: (enemyName) =>
        `スキル「闇属性妖術」発動！\n${enemyName}の周辺に強重力領域が発生した！\n${enemyName}の行動速度が低下した！`,
      fire: `スキル「炎属性妖術」発動！\n攻撃時最低ダメージが上昇！`,
      ice: (enemyName) =>
        `スキル「氷属性妖術」発動！\n${enemyName}は凍って動けなくなった！`,
      wind: (num) => `スキル「風属性妖術」発動！\n行動回数+${num}！`,
      dart: `スキル「土属性妖術」発動！\n攻撃時最高ダメージが上昇！`,
      light: (enemyName) =>
        `スキル「光属性妖術」発動！\n${enemyName}の攻撃が弱体化した！`,
      dark: (enemyName, dmg) =>
        `スキル「闇属性妖術」発動！\n${enemyName}の周辺に強重力領域が発生した！\n${dmg}ポイントのダメージを与えた！`,
      weak: (enemyName) =>
        `スキル「毒属性妖術」発動！\n${enemyName}は弱体化している！`,
      sevenFever: (num) =>
        `スキル「７フィーバー！」発動！\nステータス+${num}%！`,
      sevenFeverRaid: `スキル「７フィーバー！」発動！\nステータスがアップ！`,
      charge: `スキル「不運チャージ」発動！\n次回、良い事あるかも！`,
      enemyStatusBonus: `スキル「強敵と戦うのが好き」発動！\nパワー・防御がアップした！`,
      firstTurnResist: `スキル「油断せず行こう」発動！\n阨ちゃんは相手を警戒している…`,
      tenacious: `スキル「粘り強い」発動！\n阨ちゃんの防御がアップ！`,
      lowHpFood: `スキル「お腹が空いてから食べる」発動！\n`,
      amuletBoost: `スキル「お守り整備」発動！\nお守りの耐久は減らなかった！`,
      heaven: `スキル「天国か地獄か」発動！\n阨ちゃんのステータスがアップ！`,
      hell: `スキル「天国か地獄か」発動！\n阨ちゃんのステータスがダウン…`,
      fortune: `「しあわせのお守り」発動！`,
      fortuneToken: `「しあわせのお札」発動！`,
      berserk: (berserkDmg) =>
        `「バーサクのお守り」発動！\n${berserkDmg}ポイントのダメージを受けた！\n阨ちゃんのパワーがアップ！`,
      stockRandom: `謎のお守りが光り始めた……\n何かが起こったようだ。`,
      guardAtkUp: (num) =>
        `スキル「攻めの守勢」発動${num > 1 ? `×${num}` : ''}！\n阨ちゃんのパワーがアップ！`,
    },
    lvBonus: (num) => `修行の成果ボーナス！\nステータス+${num}%！`,
    nurse:
      '$[x3 :semisand_naname:]\n\n 通りすがりの蝉サンドが現れた！\n 蝉サンドが身体を一部食べさせてくれたおかげでHPが全快した！', //この文を空白にすればナースは来なくなります
    haisui: '阨ちゃんは決死の覚悟をした！\nパワーが上がり、防御が下がった！',
    endure: '阨ちゃんは気合で耐えた！',
    fireAtk: (enemyName) =>
      `阨ちゃんの追い打ち狐火攻撃！\n${enemyName}が次に受けるダメージが上昇した！`,
    win: '勝利！おめでとう！',
    lose: ':neofox_x_x:',
    escape: '阨ちゃんは戦闘から逃げた！',
    escapeNotBattle: '阨ちゃんは一旦諦めて別の事をするようだ。',
    getCoin: (num) =>
      `${num}個のキレイなどんぐりを拾った！\n「RPG ショップ」で買い物に使えるのじゃ！`,
    next: '次回へ続く……',
    nextPlay: (str) => `次回は${str}以降に遊べるのじゃ。`,
    getRerollOrb: (num) =>
      `\n\nスキル変更珠を${num > 1 ? `${num}個` : ''}拾ったのじゃ！\n「RPG スキル」と話しかけて確認してみて欲しいのじゃ！`,
    reachMaxLv: `\n\n**Lv255到達、おめでとうなのじゃ！**\n\nわらわはすでに限界まで強くなったようじゃ！\nこれから先はレベルを上げても、\nあまり能力が成長しないみたいじゃ…\nここから更に強くなるために、\nスキルやアイテムを工夫してほしいのじゃ！`,
    shop2remind:
      '\n\nショップに新しいアイテムが追加されたようじゃ……\n「RPG ショップ」で確認してみるとよいぞ！',
    forcePostCount:
      '周囲に不思議な力が働いている…\n投稿数ボーナスが無効になった！',
    oomisoka: '大晦日チャレンジ開始！\n体力が1になった！',
    oomisokaEnd: (score, num) =>
      `大晦日チャレンジ結果！\n評価: ★${score}\n${config.rpgCoinName}を${num}個ゲット！`,
    skillX: (num) =>
      `$[x2 :blobharrypotter:]\n\nきみに魔法をかけてあげるよ！\n\n強化魔法で阨ちゃんのスキルの\n効果が${num}倍になった！`,
    draw: 'あいこになった！\nお互いにダメージなし！',
    allStageClear:
      '気が付いたら、ここは最初に旅を始めた場所だった。\nどうやら旅をしすぎて\n世界を1周してしまったようだ。\n\n**ステージ100クリアおめでとう！**\nキレイなどんぐりを1,000枚獲得しました！\n「長き旅の思い出」を入手しました！',
    warrior: {
      get: '$[x2 :sexy_paradin_dot:]\n\n「助けに参りました！私も手伝います！」\n\n:sexy_paradin_dot:が仲間になった！',
      atk: (dmg) => `:sexy_paradin_dot:の攻撃！\n${dmg}ポイントのダメージ！`,
      lose: ':sexy_paradin_dot:は阨ちゃんを庇って倒れた！\n:sexy_paradin_dot:「私はここまでです…！後は任せます…！」',
      totalDmg: (dmg) =>
        `（:sexy_paradin_dot:： 合計 ${dmg.toLocaleString()} ダメージ）`,
    },
    player: {
      mark: '☆',
      mark2: '★',
      hpmsg: '体力',
    },
    fire: '🔥',
    journey: {
      err: `探索中以外の状態では修行モードは指定できないのじゃ。探索中になったらもう一度試してみてほしいのじゃ。`,
      win: '（次のステージへ進む場合は、次回も修行モードを指定してください）',
      lose: (day) => (day ? `(ステージが${day}、戻ってしまった…)` : ''),
    },
    trial: {
      tired: `全力を出して疲れてしまったのじゃ…。Lvが上がったら、もう一度試してみてほしいのじゃ。`,
      cw: (lv) => `阨ちゃんは自分の力を確認するようだ。(Lv${lv})`,
      atk: (dmg) => `阨ちゃんは木人に攻撃！\n${dmg}ポイントのダメージ！`,
      result: (totalDmg) => `合計${totalDmg}ポイントのダメージ！`,
      random: (down, up) => `(ダメージ幅: ${down} ~ ${up})`,
      best: (bestScore) => `(これまでのベスト: **${bestScore}**)`,
    },
    oneMore: {
      tired: (flg) =>
        `\n今日は既におかわりRPGをプレイしているようじゃ${flg ? '\n明日になるとまたおかわりRPGがプレイ可能になるのじゃ' : ''}`,
      maxLv:
        '\nそなたは過去にプレイ可能だったすべてのRPG権利をプレイ済みで、取り逃したRPG権利が無いようじゃぞ！\nRPGをやり忘れた時に、もう一度試してみてほしいのじゃ',
      maxLv2:
        '\nそなたは既にLv255に到達しているので、おかわりする事が出来ないのじゃ！',
      err: '\nおかわりRPGの前に通常のRPGをプレイする必要があるのじゃ！',
      buyQuestion: (num, coin) =>
        `\nキレイなどんぐりを${num}個使用すると、もう1回おかわりRPGをプレイできる裏技があるのじゃ！\n\n消費してわらわと遊ぶかの？（所持どんぐり個数: ${coin}）\n\n「はい」または「いいえ」で返信して欲しいのじゃ！`,
      buyComp: `\nくふふ！おかわりRPGがプレイ可能になったのじゃ！\nもう一度おかわりRPGを試してみて欲しいのじゃ！\n（この確認を次回からスキップしたいときは、ショップで札を購入して欲しいのじゃ！）`,
      autoBuy: (coin) =>
        `おかわりRPGのプレイ権利を\n自動購入したのじゃ！\n（残りどんぐり個数: ${coin}）`,
    },
    info: '阨ちゃんの状況判断能力がアップ！\n今後、状況が細かく\n分析出来るようになる事があるのじゃ！',
    infoPercent: '%',
    postBonusInfo: {
      post: (num, bonus) => `投稿数 ${num} ステータス${bonus}%`,
      continuous: {
        a: (num) => `連続RPGボーナス 投稿数+${num}`,
        b: (num) => `連続RPGボーナス（弱） 投稿数+${num}`,
        c: (num) => `毎日RPGボーナス 投稿数+${num}`,
      },
      super: `覚醒ボーナス 投稿数+200`,
    },
    newSkill: (newSkill) =>
      `新しいスキル\n「${newSkill}」\nを手に入れたのじゃ！`,
    moveToSkill: (oldSkill, newSkill) =>
      `スキル\n「${oldSkill}」が、\n「${newSkill}」\nに変化したのじゃ！`,
    newColor: (unlockColors) =>
      `\n\n条件を満たしたので、\n新しい色が解放されたのじゃ！\n\n$[x2 ${unlockColors}]\n\n「RPG 色」と話しかけて確認してみてほしいのじゃ！`,
    color: {
      info: '色を変更する場合、`rpg 色変更 <数字>`と話しかけてほしいのじゃ',
      list: '色解放条件',
      default: '初期解放',
      unlock: '解放済み',
    },
    skills: {
      info: (num) =>
        `スキルを変更する場合、\`rpg スキル変更 <数字>\`と話しかけて欲しいのじゃ！ (変更珠所持数: ${num})`,
      duplicationInfo: (num) =>
        `スキルを変更&複製する場合、\`rpg スキル変更複製 <消すスキルの数字>\`と話しかけてほしいのじゃ！消えたスキルの枠に既に持っているスキルのどれかが入るのじゃ (複製珠所持数: ${num})`,
      list: '所持スキル一覧',
      sort: '所持スキルをソートしたのじゃ！\n次のスキル変更の時に誤った番号を指定しないように気を付けて欲しいのじゃ！',
    },
    shop: {
      welcome: (coin) =>
        `:spinny_neofox:わらわのショップへようこそなのじゃ～\n欲しい商品の数値またはアルファベットを返信してほしいのじゃ\n（所持どんぐり数: ${coin.toLocaleString()}）`,
      welcome2: (coin: number, orb: number) =>
        `$[spin.y,speed=5s :spinny_neofox:]:welcome_to_underground:\n欲しい商品の数値またはアルファベットをこっそり返信してほしいのじゃ…\n（所持どんぐり数: ${coin.toLocaleString()}）\n（所持変更珠数: ${orb.toLocaleString()}）`,
      buyItem: (itemName, coin) =>
        `:spinny_neofox:まいどありなのじゃ！\n${itemName}を購入したのじゃ！\n（残りどんぐり個数: ${coin}）`,
      buyItemOrb: (itemName, orb: number) =>
        `:spinny_neofox:まいどありなのじゃ！\n${itemName}を購入したのじゃ！\n（残り変更珠数: ${orb.toLocaleString()}）`,
      useItem: (itemName) => `${itemName}を使用したのじゃ！`,
      notEnoughCoin: `:spinny_neofox:どんぐりが足りないのじゃ～:neofox_cry:`,
      notEnoughOrb: `:spinny_neofox:変更珠が足りないのじゃ～:neofox_cry:`,
    },
    help: {
      title: 'RPG コマンド一覧\n',
      normal1:
        '[ RPG ]\nわらわと戦って一緒に強くなろうぞ！\n0~11時 12~17時 18~23時でそれぞれプレイ出来るのじゃ～',
      normal2:
        '[ RPG ]\n通常モードでRPGを開始するのじゃ！\n0~11時 12~17時 18~23時でそれぞれプレイ出来るのじゃ～',
      trial: (num) =>
        `[ RPG 木人 ]\n木人を叩いて強さを確認できるのじゃ～\n通常のRPGとは別に、1Lvにつき1回までなのじゃ！${num ? `\nこれまでのベストは${num}ダメージらしいのじゃ！` : ''}`,
      journey:
        '[ RPG 修行モード ]\n敵がいない際に指定すると、わらわが修行に出るのじゃ！\n道はどんどん険しくなるから、なかなか大変らしいのじゃ…\n通常のRPGと遊べる権利を共有しているらしいのじゃ！',
      okawari1: (num) =>
        `[ RPG おかわり ]\n1日1回、このコマンドでRPGをもう一度遊べるようなのじゃ！\n過去にRPGをプレイし忘れた回数使えるのじゃ！\n（あと${num}回使えるようじゃ！）`,
      okawari2: (num) =>
        `[ RPG おかわり ]\n1日1回、このコマンドでRPGをもう一度遊べるのじゃ！\nさらにどんぐりを何個か使えば、さらにもう1回おかわりも出来ちゃうのじゃ！\n過去にRPGをプレイし忘れた回数分使えるのじゃ！\n（あと${num}回使えるようなのじゃ！）`,
      okawari3: (num) =>
        `[ RPG おかわり ]\n1日1回、このコマンドでRPGをもう一度遊べるのじゃ！\nさらにどんぐりを何個か使用すれば、さらにもう1回おかわりも出来ちゃうのじゃ！\nLv255になるまで使えるのじゃ！\n（あと${num}回使えるようなのじゃ！）`,
      color:
        '[ RPG 色 ]\nわらわの色についての情報が見られるようなのじゃ！\n頑張って色を集めてとびきりきゅーとなわらわを見てほしいぞ！\n一部の色には特殊効果もついてるらしいのじゃ！',
      skills1:
        '[ RPG スキル ]\nわらわの今持っているスキルについての情報が見れるようじゃ！',
      skills2:
        '[ RPG スキル ]\nわらわの今持っているスキルについての情報が見れるようじゃ！\n変更珠があれば、スキルの入替もここで行えるようじゃ！',
      shop: (coin) =>
        `[ RPG ショップ ]\nどんぐりを使って、ショップでお買い物が楽しめるのじゃ！\n1つしか持てないし壊れるけど効果が強いお守りや、捨てるまで効果が発動するお札など色々買えちゃうのじゃ！\n1日1回並んでいる商品が変わるのじゃ！\n（所持どんぐり: ${coin}個）`,
      shop2: `[ RPG 裏ショップ ]\n購入した裏ショップ入場の札を使って、裏ショップに入れるのじゃ！\nどんぐりとスキル変更珠を使って、珍しいアイテムを買えるらしいが内緒じゃぞ！\n1日1回並んでいる商品が変わるらしいのじゃ！`,
      item: '[ RPG アイテム ]\nわらわの今持っている全てのアイテムの一覧がここで確認できるようじゃ！',
      link: `[ リンク ]\nそなたがサブアカウントを持っているなら、アカウントをリンクさせておくとRPGで有利になるのじゃ！`,
      record: `[ RPG 殿堂 ]\nRPGモードで打ち立てた記録とその全体の順位をここで確認することができるのじゃ！`,
      status: `[ ステータス ]\n今のわらわの強さやわらわの親愛度、そなたの数取りの戦績がここで確認できるみたいじゃ！`,
      help: '[ RPG ヘルプ ]\nここなのじゃ！RPGに関係するコマンドの説明をわらわが教えてあげるのじゃ！感謝してほしいのじゃ！\n迷ったらこのコマンドを使ってわらわに話しかけるがよいぞ！',
    },
    command: {
      rpg: 'rpg',
      color: ['色', 'スキン', 'color', 'skin'],
      trial: ['木人', 'test', 'dummy'],
      journey: [
        '修行',
        '無限',
        '旅',
        'training',
        'endless',
        'endress',
        'journey',
      ],
      change: '変更',
      onemore: ['おかわり', '+', 'onemore', 'もう一回'],
      skill: ['スキル', 'skill', 'お守り', 'amulet'],
      shop: ['ショップ', 'shop', 'お店'],
      shop2: ['裏', 'ura', '2', 'another'],
      help: ['h', 'ヘルプ', '?'],
      Record: [
        '殿堂',
        '記録',
        'record',
        'trophy',
        'achieve',
        'achievement',
        'rank',
      ],
      duplication: '複製',
      items: [
        'インベントリ',
        'inventory',
        'アイテム',
        'item',
        '持ち物',
        'belonging',
        'バッグ',
        'bag',
        '所持品',
        'possession',
        '道具',
        'tool',
        '装備',
        'equip',
        'お札',
        'charm',
        'チェキ',
        'jar',
        'pot',
      ],
    },
  },

  noting: {
    notes: [
      'ちょっと眠いのう\nたっぷり寝たはずなのじゃが…',
      'わらわの尻尾をもふりたい？…そんなにいうなら仕方ないのう…ちょっとだけじゃぞ',
      ':neofox_peek_owo:',
      'ラジオ体操まだかのう？',
      'ラジオ体操したらわらわが:hanamaru:あげちゃうのじゃ',
      'ぷくく…これでばかな人間どもを… っ！？なんでもないのじゃーっ！',
      'あれ？これをこうしたら…むむむー？',
      'ぼーっとするのもよいものじゃ…',
      'ふぅ…疲れちゃったのう…',
      '味噌汁くらいなら作ってやらんこともないぞ？',
      'ど、どすけべ放流寺なんて名前、どうかしてるのじゃ…:neofox_blush:',
      'わらわのためにご飯を作ってたもれー',
      'パンジャンドラム焼きはとってもおいしいのじゃ！大好物なのじゃ！',
      'ご飯にするかのう？お風呂にするかのう？それともやっぱりご飯にするかのう？',
      'わらわのことを見捨ててどこかに行ったら寂しいからいやなのじゃー！',
      '村長とはよくやっておる！あいつはわらわに人間をだます方法を…じゃなかった！いろいろなことを教えてくれるのじゃ！',
      'わらわのことを描きたい？描いてもよいがびゅーてぃふるに頼むぞ？',
      '「村のお役立ち情報ではっしゅたぐ検索するとべんり」？ なんで村長はこんなことをわらわに読ませたがるのじゃ？',
      'ふふん、わらわは将来立派な九尾の狐になって世界中の人間どもを下僕にしてやるのじゃ！',
      '失敗してもくよくよするではないぞ～！',
      'おなかがぺこぺこなのじゃあ…',
      'あんてな機能というのをつかえばえごさとかいうのもできるらしいのう！わらわもえごさしておる！',
      'キツネさいこー！というのじゃ！',
      'そなたらもお勤めごくろうさまじゃ！わらわもこう見えてがんばっておるぞ:neofox_wink_blep:',
      'む…わらわはいったい何しようとしてたんだったかの…？',
      'やっぱりふかふかおふとんの上は落ち着くのじゃ',
      'つかれたらわらわがそなたをなでなでしてやらんこともないぞ？',
      'わらわは人間のことを見捨てん！そなたらもわらわを見捨てるでないぞ？',
      'わらわはみんなの阨どるなのじゃ〜♡',
      'わんこもかわいいがわらわのほうがかわいいぞ？',
      'ねこはいきなりひっかいてくるから苦手じゃ…',
      'きつねは世界一美しい生き物なんじゃ！異論はみとめぬぞ！',
      'そんざいしないきおく…？',
      'この村にだむはないのじゃ',
      'この村にだむはないのじゃ…。そういわないと危ないのじゃ…',
      'ごろーん…:neofox_up_paws:',
      'なにもしていないのに、壊れちゃったのじゃ…:neofox_pleading:',
      'はりーぽったーとはりーぽったーとはりーぽったーってなんじゃ？',
      '村にはいっぱい神さまがいるようじゃがわらわも神の仲間入りをしたいのじゃ',
      'ふーどこーとできつねうどんをたべたいのじゃあ…',
      '皆尽村の観光パンフレットは村役場で無料配布してるらしいのじゃ！わらわのこともかいておるかのう？',
      '竹林は竹がたくさん回っていてわらわの目もまわってしまうのじゃ…:neofox_dizzy:',
      'えろとらっぷだんじょんってなんじゃ…？？？',
      '村長にわらわには危ないからえろとらっぷだんじょんとやらには行くなといわれておる …みんなわらわだけはぶっていじめておらんかの？',
      '今日もよい一日になるとよいのう♪',
      'お布団に食べられておる…',
      '人間っておいしいのか？ときいたら「少なくともそんなにこのんでたべるようなものではない」と教えられたのじゃ',
      '今そなたの後ろにおるぞ！\n…ふふっ驚いたかの？',
      'やる気が出ないのでそなたらのことを寝ながら見ておる',
      'わらわといっしょにこわい映画を見ないかのう？人間がこわがっている姿を見るのはだいすきなのじゃ！',
      'わらわのおうちに黒い封筒が届いていたけどわかんなかったからそのへんに捨てといたのじゃ',
      'わらわがそなたをまるっとお見通しじゃぞ！',
      'わらわは念力で操作しておる。…本当じゃよー？',
      'わらわも昔はただの子狐だったんじゃ。懐かしいのう',
      '生贄ってなんじゃ？おやつのことか？',
      '人柱ってなんじゃ？おやつのことか？',
      '村八分ってなんじゃ？おやつのことか？',
      'ふわぁ、おふとん気持ちいいのじゃ…',
      'わらわにメイド服を着せたい？ふふーん、きっと似合あって当然なのじゃ',
      'わらわに着物を着せたい？ふふーん、きっと似合あって当然なのじゃ',
      'わらわに水着を着せたい？み、水に沈められるのは嫌じゃ！もうそんな怖い思いはしたくないのじゃ…',
      'わらわはきれいじゃろう？',
      'わらわが忘れっぽい？そ、そんなわけ……そんなわけないのじゃ…',
      'なんでそんなに背が高いんじゃ！？わらわのことを見下しておるのかあ？！',
      'わらわを覗くとき、わらわもまたそなたを覗いているのじゃ',
      '銅羅無様万歳！銅羅無様万歳！こういわないと歩くのも怖いのじゃ…',
      'ふふーん、みんなのあいどる、あいちゃんなのじゃ',
      'わらわは長いこと人型にはなれんかったのじゃがこうしてなれるようになったのじゃ！わらわはとってもすごーいキツネなのじゃ！',
      'ふぁぁあ…',
      'わらわの毛並みはツヤツヤじゃぞ？',
      'ふふーん♪ 今わらわはきげんがいいのじゃ！',
      'むーなんだか眠いのじゃ',
      '…はっ！今ねてないぞ！わらわはうっかりうたたねなんてしておらんぞ？！',
      'わらわは長生きさんなのじゃが長生きすぎてむかしのことはあまりおぼえてないのじゃ',
      'うとうと...',
      'これっ！わらわから逃げられるとおもうでない！',
      'あっ…回覧板落っことしちゃったのじゃ…',
      'ひなたぼっこだいすきなのじゃ～',
      'わらわはどうしていまこうなってるんじゃ…？',
      '昔のこの村はもっとのどかで住みやすいところだった気がするんじゃが…',
      'ここは……どこじゃ？',
      'わらわの変身の術にはびっくりしたじゃろ？！えっ？なんだかふわふわのしっぽが付いてた…？そ、そんなわけなかろう！？',
      ':sonzaishinaikioku:',
      'がんばれがんばれなのじゃー！',
      '疲れたわらわのことを膝枕する権利をおぬしにやるのじゃ！感謝するがよい！',
      'おぬし！まず「村」と10回繰り返し言うてみい！……別に何のなぞなぞも思いつかなかったのじゃ',
      '道の真ん中は歩いちゃだめなのじゃ、あぶないのじゃ',
      '真っ赤な霧がでるときはおうちにこもっておるんじゃぞ？',
      '人間の体を心配するのもわらわのような偉いものの務めなのでな！',
      'かぷさいしん…？おいしいんじゃろうかそれ',
      '絵文字申請ちゃんねるとかいうところでそなたの自作の絵文字とやらが申請ができるらしいぞ',
      '…わらわのげえむのせいで大事なものが奪われた？ふふーん、げえむに勝って奪い返せばよいじゃろ！',
      'わらわはきれいではなくかわいい…じゃと？！むむ…まあ悪い気はせんがの',
      '『規約違反を見かけたら直接注意せず村長に通報してください。』…？あやつ、お巡りさんだったのか？',
      'ふふーん！『バナナス』といってくれたらそなたにバナナスをたくさんおしえてやるぞ！何っ！？バナナスをしらんじゃと…？！',
      '『貰ったもの』と聞いてくれたらおぬしがいままでに集めたげえむの景品を教えてやらんでもないぞ！',
      'わらわにrpgと話しかけたらrpgというげえむで遊べるのじゃ！わらわを強くしてすごーい狐にしてほしいのじゃ！',
    ],
    want: (item) =>
      `${item}、そういうのが流行っとるときいたぞ！わらわもほしい！`,
    see: (item) =>
      `そういえば道に${item}が落ちているのを見たんじゃー！本当じゃぞ！`,
    discover: (item) => `${item}を探している人がいると聞いたが…本当かのう？`,
    talkTheme: (word) =>
      `${
        Math.random() < 0.5
          ? `皆の者は、「${word}」についてどのように感じているんじゃ？`
          : `村のみんなで「${word}」の事について話してみるのはどうかのう？`
      }`,
  },
};

export function getSerif(variant: string | string[]): string {
  if (Array.isArray(variant)) {
    return variant[Math.floor(Math.random() * variant.length)];
  } else {
    return variant;
  }
}
