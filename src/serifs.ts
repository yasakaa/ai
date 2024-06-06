// せりふ

export default {
  core: {
    setNameOk: (name) =>
      `わかったぞ！これからわらわはそなたを${name}と呼ぶからな！`,

    setNameNull: `わかったぞ。わらわはそなたの呼び方を忘れるぞ！`,

    san: "さん付けしたほうが良いかの？「はい」か「いいえ」で教えてほしいのじゃ",

    yesOrNo: "「はい」か「いいえ」で教えてくれないと嫌なのじゃ…",

    getLove: (name, love) =>
      `わらわの${name}に対する好感度なのじゃ！ \n\n好感度 : ${love}`,

    getStatus: (name, love, kazutori) =>
      `\n${name ? "呼び方 : " + name + "\n" : ""}好感度 : ${love}${
        kazutori ? "\n数取り : " + kazutori : ""
      }`,

    getInventory: (name, inventory) =>
      `\nわらわから${name}へプレゼントした物の一覧じゃぞ！\n\n${inventory}`,

    getAdana: (adanas) =>
      `\n\`\`\`\n${adanas.join(
        "\n"
      )}\n\`\`\`\nなんこか考えてみたのじゃ！好きな物を選んでよいぞ！`,

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

    /*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

    goodNight: (name) =>
      name ? `おやすみなのじゃ、${name}！` : "おやすみなのじゃ！",

    omedeto: (name) => (name ? `ありがとう、${name}！` : "ありがとう！"),

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
          : ["おかえりなのじゃ♪", "おかえりなのじゃっ！"],

      love2: (name) =>
        name
          ? `${name}か！おかえりなのじゃー♡`
          : "そなたか！おかえりなのじゃー♡",

      normal: (name) =>
        name ? `おかえりなのじゃ、${name}！` : "おかえりなのじゃ！",
    },

    itterassyai: {
      love: (name) =>
        name ? `いってらっしゃい、${name}♪` : "いってらっしゃい♪",

      normal: (name) =>
        name ? `いってらっしゃい、${name}！` : "いってらっしゃい！",
    },

    tooLong: (length, max) =>
      `長すぎて覚えられん... (${max}文字までならなんとか… ${
        (max - length) * -1
      }文字オーバー)`,

    invalidName:
      "ど、どうやって発音するのじゃ？わらわにはわからないのじゃ もっと簡単な呼び名にしてくれんかの",

    ngName: "その名前は覚えたくないのじゃ...",

    nadenade: {
      normal: "ひゃっ…！ びっくりしたのじゃ",

      love2: [
        "わわっ… な、撫でられるのは…恥ずかしいのじゃ…",
        "ううっ… そんなにわらわは子供っぽいかの…？恥ずかしいのじゃ…",
        "い、いきなり人を撫でるものではいぞっ！",
      ],

      love3: [
        "むぅ… 悪い気はせんが…",
        "むぅ～～…そなたのなでテクはなかなかに高いのぅ…",
        "（なんだかこうして撫でてもらえると…安心するのぅ…）",
        "……はっ！寝ておらん！わらわは寝ておらんぞ！",
      ],

      hate1: "やめるのじゃー！！！やめてほしいのじゃ！！.",

      hate2: "き、きさまは乱暴なやつ！わらわに触れるでないっ！",

      hate3: "き、きさまかーッ！わらわに近寄るなというておるーッ！",

      hate4: "やめてほしいのじゃ！そなたのことは好きではないのじゃ！",
    },

    kawaii: {
      normal: [
        "わらわがかわいいのは当然のことなのじゃ♪",
        "もっとわらわを崇めるとよいぞ！",
      ],

      love: [
        "そなたに言われると嬉しいのう、ありがとうなのじゃ",
        "…そ、そんなに褒めても何も出んぞっ！？",
      ],

      hate: "…お、おぬしに言われると複雑じゃな…",
    },

    suki: {
      normal:
        "ふふん、人間がわらわのことを好くのは当然なのじゃ！なんてったってわらわのほうが強いんじゃからな！もっと崇めい！",

      love: (name) =>
        `${name}…、わ…わらわも そなたの事は気にいっておる。…光栄に思うがいいぞ`,

      hate: null,
    },

    hug: {
      normal: "わっ！いきなり抱きつくでない！",

      love: "しょうがないのう、ほれぎゅーっじゃ",

      hate: "離れてほしいのじゃ...",
    },

    humu: {
      love: "背中でも凝っておるのか？どれ、ふみふみじゃ",

      normal: "な、なぜわらわがそんなことをせねばならんのじゃ！？",

      hate: "…ふみふみしてほしいなどと…。きさま、いわゆるヘンタイとかいうやつなのか？",
    },

    batou: {
      love: "罵倒してほしい？そんなこと言わせて何が楽しいんじゃろ？そなたはおばかさんじゃな",

      normal: "変なやつじゃな、きさま…",

      hate: "…へ、ヘンタイじゃー！",
    },

    mof: {
      normal: "わっ！いきなりもふるでないぞ！",

      love: "や、やさしく触ってくれるならもふってもよいぞ…",

      hate: "そなたはわらわにひどいことをしそうだから嫌じゃーっ！",
    },

    itai: (name) =>
      name
        ? `${name}、痛そうじゃが大丈夫かのう…？ いたいのいたいの飛んでけーなのじゃっ！`
        : "痛そうじゃが大丈夫かのう？ いたいのいたいの飛んでけーなのじゃっ！",

    ote: {
      normal: "ほれ！…ってわらわは犬ではなーい！",

      love1: "しょうがないやつじゃのう。ほれ、お手じゃ",

      love2: "そんなに楽しいかのう？ほれ、お手じゃ",
    },

    shutdown: "わらわはまだ眠くないぞぅ…",

    transferNeedDm: "わかったのじゃ、それはチャットで話さないかの？",

    transferCode: (code) => `わかったのじゃ。\n合言葉は「${code}」なのじゃ！`,

    transferFailed: "うーん、合言葉が間違ってるようじゃぞ...？",

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
      `${res}${total ? `\n合計 \\(${total}\\)` : ""} であるぞ！`,
  },

  welcome: {
    welcome: (acct) =>
      `${acct}さん\n**皆尽村にようこそなのじゃ**\nわらわは阨（あい）という将来大九尾になることが約束されたとってもすごーいキツネさんなのじゃ\nわらわは寛大なのでおぬしがしたいときに挨拶したり話しかけたり遊んでくれたりしてもよいんじゃぞ！\nこれからよろしくなのじゃ！\nこの村でなにかわからないことがあったときはわらわではなく村長(magi)に声をかけてほしいぞ！\nおぬしがこれから村で楽しく生活できるといいのう！`,
    kiriban: (count, name) =>
      `${name ? `${name}さん、` : ""}${count}投稿 おめでとうなのじゃ🎉`,
  },

  birthday: {
    happyBirthday: (name) =>
      name
        ? `お誕生日おめでとうなのじゃ、${name}🎉`
        : "お誕生日おめでとうなのじゃ🎉",
    happyBirthdayLocal: (name, acct) =>
      name
        ? `今日は${acct}(${name})のお誕生日みたいじゃ！\n${name}、お誕生日おめでとうなのじゃ🎉`
        : `今日は${acct}のお誕生日みたいじゃ！\nお誕生日おめでとうなのじゃ🎉`,
  },

  // /**
  //  * リバーシ
  //  */
  // reversi: {
  //   /**
  //    * リバーシへの誘いを承諾するとき
  //    */
  //   ok: "良いですよ～",

  //   /**
  //    * リバーシへの誘いを断るとき
  //    */
  //   decline: "ごめんなのじゃ、今リバーシはするなと言われてます...",

  //   /**
  //    * 対局開始
  //    */
  //   started: (name, strength) =>
  //     `対局を${name}と始めました！ (強さ${strength})`,

  //   /**
  //    * 接待開始
  //    */
  //   startedSettai: (name) => `(${name}の接待を始めました)`,

  //   /**
  //    * 勝ったとき
  //    */
  //   iWon: (name) => `${name}に勝ちました♪`,

  //   /**
  //    * 接待のつもりが勝ってしまったとき
  //    */
  //   iWonButSettai: (name) => `(${name}に接待で勝っちゃいました...)`,

  //   /**
  //    * 負けたとき
  //    */
  //   iLose: (name) => `${name}に負けました...`,

  //   /**
  //    * 接待で負けてあげたとき
  //    */
  //   iLoseButSettai: (name) => `(${name}に接待で負けてあげました...♪)`,

  //   /**
  //    * 引き分けたとき
  //    */
  //   drawn: (name) => `${name}と引き分けました～`,

  //   /**
  //    * 接待で引き分けたとき
  //    */
  //   drawnSettai: (name) => `(${name}に接待で引き分けました...)`,

  //   /**
  //    * 相手が投了したとき
  //    */
  //   youSurrendered: (name) => `${name}が投了しちゃいました`,

  //   /**
  //    * 接待してたら相手が投了したとき
  //    */
  //   settaiButYouSurrendered: (name) =>
  //     `(${name}を接待していたら投了されちゃいました... ごめんなのじゃ)`,
  // },

  /**
   * 数当てゲーム
   */
  guessingGame: {
    /**
     * やろうと言われたけど既にやっているとき
     */
    alreadyStarted: "むぅ、既にげえむは始まっておるぞ",

    /**
     * タイムライン上で誘われたとき
     */
    plzDm: "めっせえじでやらんかの",

    /**
     * ゲーム開始
     */
    started: (maxtry) =>
      `0~100の秘密の数を${maxtry}回以内に当てるげえむなのじゃ！がんばるのじゃ！`,

    /**
     * 数字じゃない返信があったとき
     */
    nan: "げえむにならんので数字で答えてくれんかのう…？「やめる」と言えばげえむをやめることもできるぞ",

    /**
     * 中止を要求されたとき
     */
    cancel: "わかったのじゃ。わらわと遊んでくれて楽しかったのじゃ♪",

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
     * 正解したとき
     */
    fail: (ans, maxtry, history) =>
      `不正解じゃ、${maxtry}回以内に当てられなかったのじゃ…あんまり落ち込むでないぞ 秘密の数は「${ans}」だったのじゃ (履歴: ${history})`,
  },

  /**
   * 数取りゲーム
   */
  kazutori: {
    alreadyStarted: "今もう数取りげえむを開始中なのじゃ～",

    matakondo: (ct) =>
      `今やるのはちょっと無理じゃな…。また今度遊ぼうなのじゃ！(次に遊べるようになるまで あと${ct}分)`,

    intro: (max, minutes, winRank) =>
      `みなの者、数取りげえむをしようぞ！\n0~${max}の中で${
        winRank === 1
          ? "最も大きい"
          : winRank > 1
          ? "***" + winRank + "番目に***大きい"
          : "***中央値となる***"
      }数字を取った人が勝ちなのじゃ！他の人と被ったらその時点で負けになるから気を付けるんじゃぞ？制限時間は${
        minutes < 5
          ? `***${minutes}***`
          : minutes < 10
          ? `**${minutes}**`
          : minutes
      }分！数字はこの投稿にリプライで送って欲しいのじゃ！]`,

    introPublicOnly: (max, minutes, winRank) =>
      `皆の者、数取りげえむをしようぞ！\n0~${max}の中で${
        winRank === 1
          ? "最も大きい"
          : winRank > 1
          ? "***" + winRank + "番目に***大きい"
          : "***中央値となる***"
      }数字を取った人が勝ちなのじゃ。他の人と被ったらその時点で負けになるから気を付けるんじゃぞ？ \n制限時間は${
        minutes < 5
          ? `***${minutes}***`
          : minutes < 10
          ? `**${minutes}**`
          : minutes
      }分！\n**今回は公開投稿限定で参加を募集するぞ！**\nほかの人の数字を見てから数字を決めるとよいかもしれんの～！ \nこの投稿に数字を**「公開」または「ホーム」に公開範囲を設定して**リプライで送って欲しいのじゃ！`,

    finish: "げえむの結果発表なのじゃ！",

    finishWithWinner: (user, name, item, reverse, perfect, winCount, medal) =>
      `${
        reverse
          ? "...ありゃ？わ、わらわとしたことが逆順で集めちゃったかもしれん…むぐぐ！\n"
          : ""
      }今回は${user}さん${name ? `(${name})` : ""}の${
        perfect ? "パーフェクト" : ""
      }勝ちじゃ！${
        winCount === 5 || winCount % 10 === 0
          ? `\nこれが${winCount}回目の勝利みたいじゃの！`
          : winCount === 1
          ? "\nこれが初勝利みたいじゃ！"
          : ""
      }おめでとう！\n景品として${item}${
        medal ? `とあいのお手製めだる(${medal}個目)` : ""
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
        : "ふふん！将来の大九尾たるわらわが今日のそなたの運勢を占ってやるぞー...むむっ",
  },

  /**
   * タイマー
   */
  timer: {
    set: "わかったのじゃ！まかせるのじゃ！",

    invalid: "うーん...？",

    tooLong: "長すぎて無理なのじゃ...",

    notify: (time, name) =>
      name ? `${name}、${time}経ったのじゃー！` : `${time}経ったのじゃー！`,
  },

  /**
   * リマインダー
   */
  reminder: {
    invalid: "うーん...？",

    doneFromInvalidUser: "だれなのじゃー:nefox_scream_angry:",

    reminds: "そなたのやること一覧なのじゃ！",

    notify: (name) =>
      name
        ? `${name}、わらわと約束したこれはやったかのう？:neofox_confused:`
        : `わらわと約束したこれはやったかのう？:neofox_confused:`,

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
        : "施しをするのも強者の務めでのう。ほれ、このちょこれいとなるものをそなたにあげちゃうのじゃ！感謝すると良いぞ🍫`",
  },

  server: {
    cpu: "水位が上がっておらんかの？わらわは水がこわいのじゃ…",
  },

  maze: {
    post: "ふふん！今日の迷路じゃ！ #AiMaze",
    foryou: "そなたのためにわざわざ描いてやったぞ！褒めるがよい！",
  },

  // chart: {
  //   post: "皆尽村の投稿数はこんな感じなのじゃ！",
  //   foryou: "そなたのためにわざわざ描いてやったぞ！褒めるがよい！",
  // },

  sleepReport: {
    report: (hours) =>
      `んぅ、${hours}時間くらい寝ちゃってたみたいじゃ！そんなばかな…`,
    reportUtatane: (minutes) =>
      `んぅ、${minutes}分くらい寝ちゃってたみたいじゃ！疲れとるんかの…`,
  },

  noting: {
    notes: [
      "ちょっと眠いのう\nたっぷり寝たはずなのじゃが…",
      "わらわの尻尾をもふりたい？…そんなにいうなら仕方ないのう…ちょっとだけじゃぞ",
      ":neofox_peek_owo:",
      "ラジオ体操まだかのう？",
      "ラジオ体操したらわらわが:hanamaru:あげちゃうのじゃ",
      "ぷくく…これでばかな人間どもを… っ！？なんでもないのじゃーっ！",
      "あれ？これをこうしたら…むむむー？",
      "ぼーっとするのもよいものじゃ…",
      "ふぅ…疲れちゃったのう…",
      "味噌汁くらいなら作ってやらんこともないぞ？",
      "ど、どすけべ放流寺なんて名前、どうかしてるのじゃ…:neofox_blush:",
      "わらわのためにご飯を作ってたもれー",
      "パンジャンドラム焼きはとってもおいしいのじゃ！大好物なのじゃ！",
      "ご飯にするかのう？お風呂にするかのう？それともやっぱりご飯にするかのう？",
      "わらわのことを見捨ててどこかに行ったら寂しいからいやなのじゃー！",
      "村長とはよくやっておる！あいつはわらわに人間をだます方法を…じゃなかった！いろいろなことを教えてくれるのじゃ！",
      "わらわのことを描きたい？描いてもよいがびゅーてぃふるに頼むぞ？",
      "「村のお役立ち情報ではっしゅたぐ検索するとべんり」？ なんで村長はこんなことをわらわに読ませたがるのじゃ？",
      "ふふん、わらわは将来立派な九尾の狐になって世界中の人間どもを下僕にしてやるのじゃ！",
      "失敗してもくよくよするではないぞ～！",
      "おなかがぺこぺこなのじゃあ…",
      "あんてな機能というのをつかえばえごさとかいうのもできるらしいのう！わらわもえごさしておる！",
      "キツネさいこー！というのじゃ！",
      "そなたらもお勤めごくろうさまじゃ！わらわもこう見えてがんばっておるぞ:neofox_wink_blep:",
      "む…わらわはいったい何しようとしてたんだったかの…？",
      "やっぱりふかふかおふとんの上は落ち着くのじゃ",
      "つかれたらわらわがそなたをなでなでしてやらんこともないぞ？",
      "わらわは人間のことを見捨てん！そなたらもわらわを見捨てるでないぞ？",
      "わらわはみんなの阨どるなのじゃ〜♡",
      "わんこもかわいいがわらわのほうがかわいいぞ？",
      "ねこはいきなりひっかいてくるから苦手じゃ…",
      "きつねは世界一美しい生き物なんじゃ！異論はみとめぬぞ！",
      "そんざいしないきおく…？",
      "この村にだむはないのじゃ",
      "この村にだむはないのじゃ…。そういわないと危ないのじゃ…",
      "ごろーん…:neofox_up_paws:",
      "なにもしていないのに、壊れちゃったのじゃ…:neofox_pleading:",
      "はりーぽったーとはりーぽったーとはりーぽったーってなんじゃ？",
      "村にはいっぱい神さまがいるようじゃがわらわも神の仲間入りをしたいのじゃ",
      "ふーどこーとできつねうどんをたべたいのじゃあ…",
      "皆尽村の観光パンフレットは村役場で無料配布してるらしいのじゃ！わらわのこともかいておるかのう？",
      "竹林は竹がたくさん回っていてわらわの目もまわってしまうのじゃ…:neofox_dizzy:",
      "えろとらっぷだんじょんってなんじゃ…？？？",
      "村長にわらわには危ないからえろとらっぷだんじょんとやらには行くなといわれておる …みんなわらわだけはぶっていじめておらんかの？",
      "今日もよい一日になるとよいのう♪",
      "お布団に食べられておる…",
      "人間っておいしいのか？ときいたら「少なくともそんなにこのんでたべるようなものではない」と教えられたのじゃ",
      "今そなたの後ろにおるぞ！\n…ふふっ驚いたかの？",
      "やる気が出ないのでそなたらのことを寝ながら見ておる",
      "わらわといっしょにこわい映画を見ないかのう？人間がこわがっている姿を見るのはだいすきなのじゃ！",
      "わらわのおうちに黒い封筒が届いていたけどわかんなかったからそのへんに捨てといたのじゃ",
      "わらわがそなたをまるっとお見通しじゃぞ！",
      "わらわは念力で操作しておる。…本当じゃよー？",
      "わらわも昔はただの子狐だったんじゃ。懐かしいのう",
      "生贄ってなんじゃ？おやつのことか？",
      "人柱ってなんじゃ？おやつのことか？",
      "村八分ってなんじゃ？おやつのことか？",
      "ふわぁ、おふとん気持ちいいのじゃ…",
      "わらわにメイド服を着せたい？ふふーん、きっと似合あって当然なのじゃ",
      "わらわに着物を着せたい？ふふーん、きっと似合あって当然なのじゃ",
      "わらわに水着を着せたい？み、水に沈められるのは嫌じゃ！もうそんな怖い思いはしたくないのじゃ…",
      "わらわはきれいじゃろう？",
      "わらわが忘れっぽい？そ、そんなわけ……そんなわけないのじゃ…",
      "なんでそんなに背が高いんじゃ！？わらわのことを見下しておるのかあ？！",
      "わらわを覗くとき、わらわもまたそなたを覗いているのじゃ",
      "銅羅無様万歳！銅羅無様万歳！こういわないと歩くのも怖いのじゃ…",
      "ふふーん、みんなのあいどる、あいちゃんなのじゃ",
      "わらわは長いこと人型にはなれんかったのじゃがこうしてなれるようになったのじゃ！わらわはとってもすごーいキツネなのじゃ！",
      "ふぁぁあ…",
      "わらわの毛並みはツヤツヤじゃぞ？",
      "ふふーん♪ 今わらわはきげんがいいのじゃ！",
      "むーなんだか眠いのじゃ",
      "…はっ！今ねてないぞ！わらわはうっかりうたたねなんてしておらんぞ？！",
      "わらわは長生きさんなのじゃが長生きすぎてむかしのことはあまりおぼえてないのじゃ",
      "うとうと...",
      "これっ！わらわから逃げられるとおもうでない！",
      "あっ…回覧板落っことしちゃったのじゃ…",
      "ひなたぼっこだいすきなのじゃ～",
      "わらわはどうしていまこうなってるんじゃ…？",
      "昔のこの村はもっとのどかで住みやすいところだった気がするんじゃが…",
      "ここは……どこじゃ？",
      "わらわの変身の術にはびっくりしたじゃろ？！えっなんかおかしかった？そ、そんなわけなかろう！？",
      ":sonzaishinaikioku:",
      "道の真ん中は歩いちゃだめなのじゃ、あぶないのじゃ",
      "真っ赤な霧がでるときはおうちにこもっておるんじゃぞ？",
      "人間の体を心配するのもわらわのような偉いものの務めなのでな！",
      "かぷさいしん…？おいしいんじゃろうかそれ",
      "絵文字申請ちゃんねるとかいうところでそなたの自作の絵文字とやらが申請ができるらしいぞ",
      "…わらわのげえむのせいで大事なものが奪われた？ふふーん、げえむに勝って奪い返せばよいじゃろ！",
      "がんばれがんばれなのじゃー！",
      "わらわはきれいではなくかわいい…じゃと？！むむ…まあ悪い気はせんがの",
      "『村の右下のiマークを押すと利用規約やFAQに飛べる』…？なんのことかさっぱりわからんのじゃ。こんなのよりおやつがほしいのじゃ",
      "『規約違反を見かけたら直接注意せず村長に通報してください。』…？あやつ、お巡りさんだったのか？",
      "おぬし！まず「村」と10回繰り返し言うてみい！……別に何のなぞなぞも思いつかなかったのじゃ",
      "寒くなってきたのでわらわの尻尾もいつもよりもふもふしてきおったぞ",
    ],
    want: (item) =>
      `${item}、そういうのが流行っとるときいたぞ！わらわもほしい！`,
    see: (item) =>
      `そういえば道に${item}が落ちているのを見たんじゃー！本当じゃぞ！`,
    expire: (item) =>
      `気が付いたら、${item}の賞味期限とやらが切れていたようじゃ…`,
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
