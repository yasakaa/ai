import seedrandom from 'seedrandom';
import getDate from '@/utils/get-date';

export let rng: () => number = seedrandom(getDate());

export const itemPrefixes = [
  '【令和最新版】',
  '1.4ｍの',
  '100年に一度の',
  `${new Date().getFullYear() - 1 - Math.floor(rng() * 10)}年製`,
  `${Math.floor(rng() * 3) + 3}日前の`,
  '13kmの',
  '2.5次元の',
  '3日前の',
  '4次元',
  'Z級の',
  'あつあつ',
  'アニオリの',
  'ありのままの',
  'いい感じ™の',
  'いにしえの',
  'ヴィンテージ',
  'うねうね',
  'うるせー',
  'えぐい',
  'エッチな',
  'えっちな',
  'オーダーメイドの',
  'かじりかけ',
  'カラフルな',
  'かわいい',
  'ギガ',
  'キツネ耳の',
  'ぐにゃぐにゃ',
  'ゲッター線を照射した',
  'シュレディンガーの',
  'すけべな',
  'すごい',
  'ズッキーニに擬態した',
  'セクシーな',
  'そこにいるはずの',
  'そこらへんの',
  'ダブルアックス',
  'ダンジョン最深部で見つかった',
  'チョコレートコーティング',
  'チョコ入り',
  'つやつや',
  'デザイナーズ',
  'デジタル',
  'どろどろ',
  'とろとろの',
  'ナノサイズ',
  'ニンニクマシ',
  'ねばねば',
  'バグった',
  'ハリーポッターと',
  'ブランドものの',
  'ぷるぷる',
  'プレミア付き',
  'プロの',
  'べとべと',
  'ポケットサイズ',
  'マジヤバい',
  'ムキムキ',
  'めり込んだ',
  'もこもこ',
  'もちもち',
  'モブの',
  'やわらかい',
  'レトロな',
  '暗黒の',
  '闇の',
  '異常',
  '異世界の',
  '異星の',
  '遺伝子組み換え',
  '遺伝子組み換えでない',
  '一日分のビタミンが入った',
  '因習村風の',
  '宇宙から来た',
  '羽の生えた',
  '英国式の',
  '英国風の',
  '音速の500倍の',
  '仮説上の',
  '仮想的な',
  '河童の手作り',
  '解き放たれし',
  '回転式の',
  '壊れた',
  '怪しい',
  '怪異化した',
  '確変',
  '角の生えた',
  '寄生された',
  '記憶喪失の',
  '偽',
  '逆',
  '朽ちゆく',
  '究極の',
  '巨大',
  '強欲な',
  '狂おしい程の',
  '業務用の',
  '禁じられた',
  '禁断の',
  '空前絶後の',
  '携帯型',
  '軽量',
  '劇場版',
  '激',
  '激辛',
  '幻の',
  '古代の',
  '胡乱な',
  '五芒星の中心に立つ',
  '光る',
  '拘束された',
  '高級',
  '高度に訓練された',
  'あたたか～い',
  '合法',
  '国宝級',
  '黒歴史の',
  '最新式の',
  '使用済み',
  '市販の',
  '死の',
  '時空を歪める',
  '次世代',
  '自我の',
  '手作り',
  '呪われた',
  '週間連載の',
  '熟成',
  '純金製',
  '小さな',
  '消える',
  '焼き',
  '焦げた',
  '衝撃を与えると低確率で爆発する',
  '賞味期限切れ',
  '食用',
  '新鮮な',
  '新品の',
  '真の',
  '辛そうで辛くない少し辛い',
  '人工',
  '人類の技術を結集して作った',
  '水没した',
  '性別不詳の',
  '生の',
  '生贄の',
  '赤い',
  '折り畳み式',
  '先進的な',
  '前衛的な',
  '粗挽き',
  '増殖する',
  '存在しない',
  '多目的',
  '太古の',
  '対偶',
  '大きな',
  '地獄から来た',
  '恥ずかしい',
  '中華風の',
  '中古の',
  '中性的な',
  '超',
  '沈没した',
  '天然',
  '伝説の',
  '電動',
  '凍った',
  '当たり判定のない',
  '透明な',
  '頭が高い',
  '動く',
  '得体の知れない',
  '毒の',
  '謎の',
  '南米の',
  '猫耳の',
  '年齢不詳の',
  '燃え盛る',
  '半神半人の',
  '半分にカットされた',
  '反重力',
  '反転した',
  '飛行能力を獲得した',
  '品質保証付き',
  '不穏な',
  '封印されし',
  '分散型',
  '暴れ回る',
  '某',
  '魔の',
  '脈動する',
  '夢の',
  '無機質な',
  '滅びの',
  '妖しい',
  '養殖',
  '卵かけ',
  '卵生の',
  '藍謹製',
  '裏',
  '流行りの',
  '令和最新版',
  '冷やし',
  '霊験灼かな',
  '廉価版',
  '祀られた',
  '穢れた',
  '蠢く',
  '蠱惑的な',
  'メカクレの',
];

export const items = [
  '穢根くん',
  ':china:',
  '1円玉',
  '5000兆円',
  'Android',
  'ETD',
  'FF14',
  'Firefish',
  'iPhone',
  'JOY SOUND',
  'SANチェック',
  '激レアカード',
  'UFO',
  'VIPルーム',
  'Youtuber',
  'Z級映画',
  'あすけんの女',
  'イケメン',
  'イマジナリーフレンド',
  'ウイルス',
  'エキノコックス',
  '十三階段',
  'エルフ',
  'エロトラップダンジョン',
  `食パンの耳${Math.floor(rng() * 100) + 1}年分`,
  'おじさん',
  'おひたし',
  'オブジェ',
  'オレンジ',
  'お兄さん',
  'お姉さん',
  'カプサイシン',
  'カプサイ神',
  'かぼちゃ',
  'カモシカ',
  'カラオケ',
  'キーホルダー',
  'ギター',
  'ゴリラ',
  'きつね',
  'きのこ',
  'きゅうり',
  'クマ',
  'こたつ',
  'コントラバス',
  'サメ',
  'サメ映画',
  'シシリアンライス',
  'じゃがいも',
  '植物',
  'すあま',
  'スイカ牛',
  'スターゲイジーパイ',
  'ズッキーニ',
  'ストーカー',
  'スライム',
  'スライム娘',
  'セクシーパラディン',
  'ソシャゲ',
  'タコの足',
  'タヌキ',
  'タピオカ',
  'ダム',
  'ダンボール箱',
  'チーズ',
  'チキン',
  'ちくわ',
  'チャラ男',
  'チョコレート',
  'ティラノサウルス',
  'デイリーショップ',
  'デストイレ',
  'テディベア',
  'テレホンカード',
  'とうもろこし',
  'どすどす言葉',
  'トマト',
  'ニーソ',
  'ニワトリ',
  'ぬいぐるみ',
  'ねぎ',
  'のじゃロリ',
  'バニーガール',
  'ハリーポッター',
  'パンジャンドラム',
  'パンジャンドラム焼き',
  'バンドマン',
  'ビキニ',
  'フードコート',
  'ぷらいべったー',
  'フリーWi-Fi',
  'ふれあい上映会',
  'プロ騎士',
  'ペンギン',
  'ホラー',
  'マスコット',
  'ミジンコ',
  'ムラムラ村',
  'メイド服',
  'メカあいちゃん',
  'メガネ',
  'メタルスライム',
  'もこチキ',
  'モブ',
  'モンゴリアンデスワーム',
  'リップクリーム',
  '悪魔',
  '悪霊',
  '闇ターフィーショップ',
  '因習指定政令都市',
  '宇宙',
  '永久機関',
  '永久機関',
  '液体',
  '怨霊',
  '鉛筆',
  '王',
  '化け猫',
  '河童',
  '河童巻き',
  '火星',
  '回転する竹',
  '回覧板',
  '怪奇現象',
  '怪談',
  '海',
  '皆尽村',
  '皆尽村七不思議',
  '柿の種のピーナッツ部分',
  '学校',
  '学生',
  '楽器屋',
  '巻物',
  '監視カメラ',
  '缶チューハイ',
  '丸いもの',
  '寄生虫',
  '気体',
  '記憶',
  '喫茶店',
  '虚無',
  '供物',
  '教会',
  '教会地下カジノ',
  '鏡花水月',
  '九官鳥',
  '空気',
  '偶像',
  '警察官',
  '孔に響くよ',
  '月',
  '研究者',
  '健康保険証',
  '拳銃',
  '犬',
  '古文書',
  '胡乱',
  '胡乱十三隊',
  '五円玉',
  '五芒星',
  '公民館',
  '国家予算',
  '国民の基本的な権利',
  '黒いもの',
  '作家',
  '殺人鬼',
  '殺人事件',
  '四角いもの',
  '次回予告',
  '自我',
  '自動販売機',
  '車',
  '蛇口',
  '邪教',
  '邪神',
  '手首',
  '呪い',
  '寿司',
  '宿命の十字架',
  '瞬足',
  '女神像',
  '焼き魚',
  '触手',
  '触手焼き',
  '食堂',
  '信者',
  '唇',
  '寝具',
  '新聞',
  '森羅万象',
  '神',
  '神社',
  '神主',
  '人権',
  '人柱',
  '推理小説',
  '水',
  '水銀',
  '生贄',
  '青年',
  '石像',
  '赤いもの',
  '赤い霧',
  '選挙',
  '双子',
  '臓物',
  '足',
  '卒塔婆',
  '村',
  '村営バス',
  '村人',
  '村長',
  '村役場',
  '太陽',
  '太陽',
  '堕天使',
  '大工さん',
  '大陸',
  '只野一族',
  '探偵',
  '炭水化物',
  '箪笥',
  '竹林',
  '鳥',
  '梯子',
  '天使',
  '電子レンジ',
  '電動マッサージ機',
  '都市伝説',
  '土地',
  '唐辛子',
  '特異点',
  '毒乳首',
  '猫',
  '粘土',
  '粘土',
  '農産物',
  '把安蛇暗銅鑼無様',
  '俳句',
  '白いもの',
  '美女',
  '美少女',
  '美少年',
  '美青年',
  '必殺技',
  '布団',
  '副村長',
  '復活の呪文',
  '物体',
  '変態',
  '墓マトリョーシカ',
  '包丁',
  '放流寺',
  '棒状のもの',
  '本',
  '魔物',
  '漫画',
  '民宿',
  '名簿',
  '役場職員',
  '薬乳首',
  '余所者',
  '幼児',
  '霊能者',
  '歴史資料館',
  '卍解',
  '宝箱',
  '巫女',
  '掟',
  '祟り',
  '穢れ',
  '繝九Λ縺ｮ縺ｿ縺晄ｱ',
  '賽銭箱',
  '逧?ｰｽ繝?繝?蜑駅',
  '素数',
  'RPG',
  '修行',
  '人間',
  'ケーキ',
  '少女',
  '少年',
  '赤ちゃん',
  'ママ',
  'パパ',
  'おしり',
  '富岡さん',
  ':kochi_san:',
  'UMA',
  '祠',
];

export const and = [
  'に擬態した',
  '入りの',
  'っぽい',
  'を虐げる',
  'を侍らせた',
  'が上に乗った',
  'メンサの',
];

export function genItem(): string;
export function genItem(seedOrRng: (() => number) | string | number): string;
export function genItem(options: {
  seedOrRng?: (() => number) | string | number;
  allowSimpleItem?: boolean;
}): string;

export function genItem(
  arg?:
    | (() => number)
    | string
    | number
    | {
        seedOrRng?: (() => number) | string | number;
        allowSimpleItem?: boolean;
      },
): string {
  let seedOrRng: (() => number) | string | number | undefined;
  let allowSimpleItem: boolean = true;

  if (
    typeof arg === 'function' ||
    typeof arg === 'string' ||
    typeof arg === 'number'
  ) {
    seedOrRng = arg;
  } else if (typeof arg === 'object' && arg !== null) {
    seedOrRng = arg.seedOrRng;
    if (typeof arg.allowSimpleItem === 'boolean') {
      allowSimpleItem = arg.allowSimpleItem;
    }
  }

  rng = seedOrRng
    ? typeof seedOrRng === 'function'
      ? seedOrRng
      : seedrandom(seedOrRng.toString())
    : Math.random;

  let item = '';
  if (Math.floor(rng() * 20) !== 0 || !allowSimpleItem)
    item += itemPrefixes[Math.floor(rng() * itemPrefixes.length)];
  item += items[Math.floor(rng() * items.length)];
  if (Math.floor(rng() * 10) === 0) {
    let andItem = '';
    if (Math.floor(rng() * 3) === 0)
      andItem += itemPrefixes[Math.floor(rng() * itemPrefixes.length)];
    andItem += items[Math.floor(rng() * items.length)];
    andItem += and[Math.floor(rng() * and.length)];
    item = andItem + item;
  }
  return item;
}
