addEventListener("error", (e) => {
  const d = document.createElement("div");
  d.style.cssText =
    "position:fixed;left:0;right:0;bottom:0;z-index:99;background:#a00;color:#fff;font:11px monospace;padding:4px;max-height:30%;overflow:auto";
  d.textContent = "Error: " + e.message + " @" + e.lineno;
  document.body.appendChild(d);
});
const $ = (q) => document.querySelector(q),
  rnd = Math.random,
  TAU = Math.PI * 2,
  cos = Math.cos,
  sin = Math.sin;
const IC = {
  pick: '<path d="M5 19L15 9M7 7Q17 4 17 15"/>',
  picks: '<path d="M4 20L12 12M6 8Q14 5 14 14"/><path d="M18 3v6M15 6h6"/>',
  flame:
    '<path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4 0-7 1-10z"/>',
  hammer: '<path d="M14 3l7 7-3 3-7-7zM12 11L4 19"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  star: '<path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z"/>',
  target:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/>',
  clover:
    '<circle cx="9" cy="9" r="3.5"/><circle cx="15" cy="9" r="3.5"/><circle cx="9" cy="15" r="3.5"/><circle cx="15" cy="15" r="3.5"/>',
  bag: '<path d="M6 8h12l1 12H5zM9 8V6a3 3 0 0 1 6 0v2"/>',
  gear: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  heart:
    '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  gem: '<path d="M6 4h12l4 6-10 11L2 10zM2 10h20M9 4l3 6 3-6"/>',
  rock: '<path d="M4 18l2-9 6-5 7 4 1 10z"/><path d="M9 11l3 3 4-4"/>',
  rewind: '<path d="M4 12a8 8 0 1 0 3-6.2M4 4v4h4"/>',
  hour: '<path d="M6 3h12M6 21h12M7 3c0 6 5 6 5 9s-5 3-5 9M17 3c0 6-5 6-5 9s5 3 5 9"/>',
  plusbox:
    '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 8v8M8 12h8"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"/>',
  worker:
    '<circle cx="12" cy="8" r="3.5"/><path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/>',
  box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
  crown: '<path d="M3 18l2-10 5 5 2-8 2 8 5-5 2 10z"/>',
  rebirth:
    '<path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4"/>',
  mine: '<path d="M2 20l7-12 4 6 3-4 6 10z"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  coin: '<circle cx="12" cy="12" r="9" fill="#ffc83a" stroke="#b8860b"/><text x="12" y="16.3" text-anchor="middle" font-size="12" font-weight="800" fill="#7a5200" stroke="none">$</text>',
};
const ic = (n) => `<svg class="ic" viewBox="0 0 24 24">${IC[n]}</svg>`;
const TX = {
  en: {
    title: "DEPTH",
    sub: "hold the field · picks mine · go deeper",
    start: "START",
    settings: "SETTINGS",
    menu: "Menu",
    tree: "Tree",
    back: "Back",
    exp: "EXPEDITION",
    tMine: "Mining",
    tExp: "Expedition",
    tAuto: "Auto Income",
    tReb: "Rebirth",
    lvl: "Level",
    now: "Now",
    next: "Next",
    maxL: "Max",
    buy: "Buy",
    have: "You have",
    vault: "Worker storage",
    collect: "Collect",
    noWork: "Income 0. Hire workers in Auto Income.",
    rebNo: "Rebirth #",
    pts: "Points",
    rebInfo:
      "Resets money and skills. Mines 2+: rock +20% HP but +25% money per rebirth. Next threshold ×1.5.",
    allMines: "All mines open",
    nextMine: "Next mine at",
    rebirths: "rebirths",
    resT: "Expedition over",
    nothing: "Nothing mined. Hold the field!",
    total: "Total",
    again: "Again",
    toTree: "To tree",
    rebT: "Rebirth!",
    gotPts: "Points",
    rebCount: "Rebirths",
    newMine: "New mine",
    cont: "Continue",
    setT: "Settings",
    sound: "Sound",
    shake: "Screen shake",
    fxT: "Effects",
    fxF: "full",
    fxL: "light",
    side: "Rotation side",
    reset: "Reset progress",
    sure: "Really reset all?",
    lang: "Language",
    on: "on",
    off: "off",
    hint: "HOLD THE FIELD WITH A FINGER",
    mineSel: "Mine select",
    sec: "s",
    confirm: "Sure? Everything resets",
    stone: "Stone",
    copper: "Copper",
    iron: "Iron",
    gold: "Gold",
    diamond: "Diamond",
    mineName: [
      "Old Quarry",
      "Dark Cave",
      "Black Rift",
      "Chalk Cliff",
      "White Abyss",
    ],
    open: "Open",
    locked: "Locked",
    workers: "workers",
    auto: "auto",
    none: "None",
    mineTxt: "Mine",
    hardness: "Hardness",
    income: "Income",
    nodeNames: {},
  },
  ru: {
    title: "ГЛУБИНА",
    sub: "зажми поле · кирки добывают · углубляйся",
    start: "НАЧАТЬ",
    settings: "НАСТРОЙКИ",
    menu: "Меню",
    tree: "Дерево",
    back: "Назад",
    exp: "ЭКСПЕДИЦИЯ",
    tMine: "Добыча",
    tExp: "Экспедиция",
    tAuto: "Авто заработок",
    tReb: "Перерождение",
    lvl: "Уровень",
    now: "Сейчас",
    next: "Дальше",
    maxL: "Максимум",
    buy: "Купить",
    have: "У тебя",
    vault: "Хранилище рабочих",
    collect: "Забрать",
    noWork: "Доход 0. Найми рабочих в «Авто заработке».",
    rebNo: "Перерождение №",
    pts: "Очки",
    rebInfo:
      "Сбросит деньги и навыки. В шахтах 2+: порода +20% HP, но +25% денег за перерождение. Следующий порог ×1.5.",
    allMines: "Все шахты открыты",
    nextMine: "Новая шахта за",
    rebirths: "перерождений",
    resT: "Экспедиция завершена",
    nothing: "Ничего не добыто. Зажми поле и держи палец!",
    total: "Итого",
    again: "Ещё раз",
    toTree: "В дерево",
    rebT: "Перерождение!",
    gotPts: "Очки",
    rebCount: "Перерождений",
    newMine: "Новая шахта",
    cont: "Продолжить",
    setT: "Настройки",
    sound: "Звук",
    shake: "Тряска экрана",
    fxT: "Эффекты",
    fxF: "полные",
    fxL: "лёгкие",
    side: "Сторона поворота",
    reset: "Сбросить прогресс",
    sure: "Точно сбросить всё?",
    lang: "Язык",
    on: "вкл",
    off: "выкл",
    hint: "ЗАЖМИ ПОЛЕ ПАЛЬЦЕМ",
    mineSel: "Выбор шахты",
    sec: "с",
    confirm: "Точно? Всё сбросится",
    stone: "Камень",
    copper: "Медь",
    iron: "Железо",
    gold: "Золото",
    diamond: "Алмаз",
    mineName: [
      "Старый карьер",
      "Тёмная пещера",
      "Чёрный разлом",
      "Меловой утёс",
      "Белая бездна",
    ],
    open: "Открыто",
    locked: "Закрыто",
    workers: "рабочих",
    auto: "авто",
    none: "Нет",
    mineTxt: "Шахта",
    hardness: "Крепость",
    income: "Доход",
    nodeNames: {},
  },
};
const tx = (k2) => (TX[S.lang] || TX.en)[k2] ?? TX.en[k2] ?? k2;
const RU = () => (S.lang === "ru" ? 1 : 0);
const ORE = [
  { n: ["Stone", "Камень"], v: 5, hp: 3, w: 0 },
  {
    n: ["Copper", "Медь"],
    v: 40,
    hp: 12,
    w: 10,
    o: ["#a8522a", "#e0813a", "#ffb067"],
    g: "#46c8a0",
  },
  {
    n: ["Coal", "Уголь"],
    v: 110,
    hp: 25,
    w: 8,
    o: ["#15161b", "#2e3038", "#6c7282"],
  },
  {
    n: ["Iron", "Железо"],
    v: 300,
    hp: 50,
    w: 6,
    o: ["#9a735a", "#d8b7a0", "#f2dccb"],
  },
  {
    n: ["Gold", "Золото"],
    v: 5e3,
    hp: 200,
    w: 3,
    o: ["#c28a10", "#ffd23a", "#fff2a0"],
  },
  {
    n: ["Diamond", "Алмаз"],
    v: 3e4,
    hp: 800,
    w: 1,
    o: ["#1fa7c8", "#5ee8ff", "#e8ffff"],
  },
];
const VN = ["vs", "vc", "vk", "vi", "vg", "vd"],
  UN = [0, "ucu", "uco", "uir", "ugo", "udi"];
const LOC = [
  {
    n: ["Old Quarry", "Старый карьер"],
    h: 1,
    l: 1,
    r: 0,
    p: ["#8d92a0", "#7b7f8c", "#6a6e7b"],
    a: "#a9aebb",
    b: "#3f424d",
  },
  {
    n: ["Dark Cave", "Тёмная пещера"],
    h: 5,
    l: 3,
    r: 3,
    p: ["#6c707c", "#5d616d", "#4f525d"],
    a: "#868a99",
    b: "#2f323b",
  },
  {
    n: ["Black Rift", "Чёрный разлом"],
    h: 30,
    l: 10,
    r: 5,
    p: ["#4a4d59", "#3e414c", "#33363f"],
    a: "#5f6372",
    b: "#1f2128",
  },
  {
    n: ["Chalk Cliff", "Меловой утёс"],
    h: 200,
    l: 40,
    r: 10,
    p: ["#bbc0cb", "#a9aeba", "#989da9"],
    a: "#d9dde6",
    b: "#6b6f7b",
  },
  {
    n: ["White Abyss", "Белая бездна"],
    h: 1500,
    l: 150,
    r: 15,
    p: ["#e4e8f0", "#d2d6e0", "#c1c6d2"],
    a: "#f8fafd",
    b: "#8c91a0",
  },
  {
    n: ["Frost Vault", "Ледяное хранилище"],
    h: 11e3,
    l: 560,
    r: 20,
    p: ["#c9dcec", "#b6cde0", "#a3bdd3"],
    a: "#e8f3fb",
    b: "#6f8aa3",
  },
  {
    n: ["Ember Pit", "Угольная яма"],
    h: 8e4,
    l: 2100,
    r: 25,
    p: ["#4a3a38", "#3d2f2d", "#312524"],
    a: "#6a5350",
    b: "#1a1110",
  },
  {
    n: ["Bone Hollow", "Костяная полость"],
    h: 6e5,
    l: 7900,
    r: 32,
    p: ["#e8dfc9", "#d8cdb2", "#c7bb9c"],
    a: "#fbf4e1",
    b: "#8e8468",
  },
  {
    n: ["Void Depths", "Бездна пустоты"],
    h: 45e5,
    l: 3e4,
    r: 40,
    p: ["#2c2638", "#241f2f", "#1c1825"],
    a: "#443b58",
    b: "#0e0b14",
  },
  {
    n: ["Starlight Core", "Звёздное ядро"],
    h: 34e6,
    l: 11e4,
    r: 50,
    p: ["#f2efff", "#e0dbf5", "#cfc8ea"],
    a: "#ffffff",
    b: "#9a93b8",
  },
];
const SUF = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc"],
  START = [0, 300, 2500, 2e4, 16e4, 13e5],
  REB = [15e3, 25e3, 1e5];
function fm(x) {
  x = Math.floor(x);
  if (x < 1e3) return "" + x;
  const i = Math.min(SUF.length - 1, Math.floor(Math.log10(x) / 3)),
    v = x / 1e3 ** i;
  return (
    (v < 10 ? v.toFixed(2) : v < 100 ? v.toFixed(1) : v.toFixed(0)) + SUF[i]
  );
}
const N = [];
const D = (id, t, x, y, mx, b, g, p, icn, nm, ds, f) =>
  N.push({ id, t, x, y, mx, b, g, p, ic: icn, nm, ds, f });
D(
  "dmg1",
  0,
  0,
  0,
  10,
  10,
  1.75,
  [],
  "pick",
  ["Damage I", "Урон I"],
  ["Each strike hits harder.", "Каждый удар сильнее."],
  (l) => [`Damage +${l}`, `Урон +${l}`],
);
D(
  "dmg2",
  0,
  -1,
  -1,
  10,
  800,
  1.9,
  ["dmg1"],
  "pick",
  ["Damage II", "Урон II"],
  ["Second damage tier.", "Второй уровень урона."],
  (l) => [`Damage +${5 * l}`, `Урон +${5 * l}`],
);
D(
  "dmg3",
  0,
  -2,
  -2,
  10,
  1e5,
  2,
  ["dmg2"],
  "pick",
  ["Damage III", "Урон III"],
  ["Heavy strikes.", "Тяжёлые удары."],
  (l) => [`Damage +${25 * l}`, `Урон +${25 * l}`],
);
D(
  "dmg4",
  0,
  -3,
  -3,
  10,
  1e7,
  2.1,
  ["dmg3"],
  "pick",
  ["Damage IV", "Урон IV"],
  ["Breaks mountains.", "Ломает горы."],
  (l) => [`Damage +${125 * l}`, `Урон +${125 * l}`],
);
D(
  "mul1",
  0,
  -1,
  0,
  4,
  300,
  3.2,
  ["dmg1"],
  "flame",
  ["Bronze Pick", "Бронзовая кирка"],
  ["Multiplies all damage.", "Умножает весь урон."],
  (l) => [`Damage ×${2 ** l}`, `Урон ×${2 ** l}`],
);
D(
  "mul2",
  0,
  -2,
  0,
  3,
  9e3,
  5,
  ["mul1"],
  "hammer",
  ["Steel Pick", "Стальная кирка"],
  ["Multiplies all damage ×4.", "Умножает весь урон ×4."],
  (l) => [`Damage ×${4 ** l}`, `Урон ×${4 ** l}`],
);
D(
  "mul3",
  0,
  -3,
  0,
  3,
  32e4,
  8,
  ["mul2"],
  "bolt",
  ["Titan Pick", "Титановая кирка"],
  ["Multiplies all damage ×8.", "Умножает весь урон ×8."],
  (l) => [`Damage ×${8 ** l}`, `Урон ×${8 ** l}`],
);
D(
  "mul4",
  0,
  -4,
  0,
  2,
  5e6,
  14,
  ["mul3"],
  "star",
  ["Mythic Pick", "Мифическая кирка"],
  ["Multiplies all damage ×16.", "Умножает весь урон ×16."],
  (l) => [`Damage ×${16 ** l}`, `Урон ×${16 ** l}`],
);
D(
  "pk1",
  0,
  1,
  1,
  10,
  120,
  1.8,
  ["dmg1"],
  "picks",
  ["Extra Pick", "Доп. кирка"],
  ["More pickaxes mine at once.", "Больше кирок работают сразу."],
  (l) => [`Picks +${l}`, `Кирок +${l}`],
);
D(
  "pk2",
  0,
  2,
  2,
  10,
  15e3,
  2.1,
  ["pk1"],
  "picks",
  ["Pick Crew", "Бригада кирок"],
  ["+3 pickaxes per level.", "+3 кирки за уровень."],
  (l) => [`Picks +${3 * l}`, `Кирок +${3 * l}`],
);
D(
  "pk3",
  0,
  3,
  3,
  10,
  4e5,
  2.3,
  ["pk2"],
  "picks",
  ["Pick Army", "Армия кирок"],
  ["+10 pickaxes per level.", "+10 кирок за уровень."],
  (l) => [`Picks +${10 * l}`, `Кирок +${10 * l}`],
);
D(
  "crit",
  0,
  1,
  -1,
  6,
  60,
  1.8,
  ["dmg1"],
  "star",
  ["Precision", "Меткость"],
  ["Chance of a critical strike.", "Шанс критического удара."],
  (l) => [`Crit ${8 * l}%`, `Крит ${8 * l}%`],
);
D(
  "cdmg",
  0,
  2,
  -2,
  5,
  900,
  1.9,
  ["crit"],
  "target",
  ["Crit Power", "Сила крита"],
  ["Crit damage multiplier.", "Множитель крита."],
  (l) => [
    `Crit ×${(3 + 0.5 * l).toFixed(1)}`,
    `Крит ×${(3 + 0.5 * l).toFixed(1)}`,
  ],
);
D(
  "luck",
  0,
  1,
  -2,
  6,
  3e3,
  1.9,
  ["crit"],
  "clover",
  ["Lucky Miner", "Удача"],
  ["Chance to double money per block.", "Шанс удвоить деньги с блока."],
  (l) => [`Double ${8 * l}%`, `Удвоение ${8 * l}%`],
);
D(
  "spd1",
  0,
  -1,
  1,
  6,
  80,
  1.8,
  ["dmg1"],
  "bolt",
  ["Quick Hands", "Быстрые руки"],
  ["Faster strikes.", "Быстрее удары."],
  (l) => [
    `Speed +${(100 * (1 - 0.93 ** l)).toFixed(0)}%`,
    `Скорость +${(100 * (1 - 0.93 ** l)).toFixed(0)}%`,
  ],
);
D(
  "spd2",
  0,
  -2,
  2,
  5,
  6e3,
  2.2,
  ["spd1"],
  "bolt",
  ["Swift Strikes", "Быстрые удары"],
  ["Faster again.", "Ещё быстрее."],
  (l) => [
    `Speed +${(100 * (1 - 0.92 ** l)).toFixed(0)}%`,
    `Скорость +${(100 * (1 - 0.92 ** l)).toFixed(0)}%`,
  ],
);
D(
  "spd3",
  0,
  -3,
  3,
  5,
  2e5,
  2.4,
  ["spd2"],
  "bolt",
  ["Blur Strikes", "Молниеносность"],
  ["Very fast strikes.", "Очень быстрые удары."],
  (l) => [
    `Speed +${(100 * (1 - 0.9 ** l)).toFixed(0)}%`,
    `Скорость +${(100 * (1 - 0.9 ** l)).toFixed(0)}%`,
  ],
);
D(
  "zone1",
  0,
  1,
  0,
  5,
  200,
  1.8,
  ["dmg1"],
  "target",
  ["Wide Reach", "Широкий захват"],
  ["Bigger area under the finger.", "Больше зона под пальцем."],
  (l) => [`Radius +${0.5 * l}`, `Радиус +${0.5 * l}`],
);
D(
  "zone2",
  0,
  2,
  0,
  5,
  2e4,
  2.3,
  ["zone1"],
  "target",
  ["Mega Reach", "Мега захват"],
  ["Even bigger area.", "Ещё больше зона."],
  (l) => [`Radius +${0.5 * l}`, `Радиус +${0.5 * l}`],
);
D(
  "vs",
  0,
  0,
  1,
  8,
  25,
  1.9,
  ["dmg1"],
  "rock",
  ["Stone Value", "Цена камня"],
  ["Stone is worth more.", "Камень дороже."],
  (l) => [
    `Stone ×${(1.4 ** l).toFixed(2)}`,
    `Камень ×${(1.4 ** l).toFixed(2)}`,
  ],
);
D(
  "ucu",
  0,
  0,
  2,
  1,
  120,
  1,
  ["vs"],
  "o1",
  ["Copper Vein", "Медная жила"],
  ["Copper appears in the rock.", "Медь появляется в породе."],
  (l) => [l ? "Open" : "Locked", l ? "Открыто" : "Закрыто"],
);
D(
  "vc",
  0,
  0,
  3,
  8,
  600,
  1.95,
  ["ucu"],
  "v1",
  ["Copper Value", "Цена меди"],
  ["Copper is worth more.", "Медь дороже."],
  (l) => [`Copper ×${(1.4 ** l).toFixed(2)}`, `Медь ×${(1.4 ** l).toFixed(2)}`],
);
D(
  "uco",
  0,
  0,
  4,
  1,
  1800,
  1,
  ["vc"],
  "o2",
  ["Coal Vein", "Угольная жила"],
  ["Coal appears in the rock.", "Уголь появляется в породе."],
  (l) => [l ? "Open" : "Locked", l ? "Открыто" : "Закрыто"],
);
D(
  "vk",
  0,
  0,
  5,
  8,
  4e3,
  1.97,
  ["uco"],
  "v2",
  ["Coal Value", "Цена угля"],
  ["Coal is worth more.", "Уголь дороже."],
  (l) => [`Coal ×${(1.4 ** l).toFixed(2)}`, `Уголь ×${(1.4 ** l).toFixed(2)}`],
);
D(
  "uir",
  0,
  0,
  6,
  1,
  8e3,
  1,
  ["vk"],
  "o3",
  ["Iron Vein", "Железная жила"],
  ["Iron appears in the rock.", "Железо появляется в породе."],
  (l) => [l ? "Open" : "Locked", l ? "Открыто" : "Закрыто"],
);
D(
  "vi",
  0,
  0,
  7,
  8,
  2e4,
  2,
  ["uir"],
  "v3",
  ["Iron Value", "Цена железа"],
  ["Iron is worth more.", "Железо дороже."],
  (l) => [`Iron ×${(1.4 ** l).toFixed(2)}`, `Железо ×${(1.4 ** l).toFixed(2)}`],
);
D(
  "ugo",
  0,
  0,
  8,
  1,
  25e4,
  1,
  ["vi"],
  "o4",
  ["Gold Vein", "Золотая жила"],
  ["Gold appears in the rock.", "Золото появляется в породе."],
  (l) => [l ? "Open" : "Locked", l ? "Открыто" : "Закрыто"],
);
D(
  "vg",
  0,
  0,
  9,
  8,
  8e5,
  2,
  ["ugo"],
  "v4",
  ["Gold Value", "Цена золота"],
  ["Gold is worth more.", "Золото дороже."],
  (l) => [`Gold ×${(1.4 ** l).toFixed(2)}`, `Золото ×${(1.4 ** l).toFixed(2)}`],
);
D(
  "udi",
  0,
  0,
  10,
  1,
  5e6,
  1,
  ["vg"],
  "o5",
  ["Diamond Vein", "Алмазная жила"],
  ["Diamonds appear in the rock.", "Алмазы появляются в породе."],
  (l) => [l ? "Open" : "Locked", l ? "Открыто" : "Закрыто"],
);
D(
  "vd",
  0,
  0,
  11,
  8,
  15e6,
  2,
  ["udi"],
  "v5",
  ["Diamond Value", "Цена алмаза"],
  ["Diamonds are worth more.", "Алмаз дороже."],
  (l) => [
    `Diamond ×${(1.4 ** l).toFixed(2)}`,
    `Алмаз ×${(1.4 ** l).toFixed(2)}`,
  ],
);
D(
  "time1",
  1,
  0,
  0,
  10,
  30,
  1.5,
  [],
  "clock",
  ["Endurance", "Выносливость"],
  ["Expedition lasts longer.", "Экспедиция длится дольше."],
  (l) => [`+${2 * l}s`, `+${2 * l} с`],
);
D(
  "time2",
  1,
  0,
  -1,
  10,
  2e3,
  2,
  ["time1"],
  "clock",
  ["Long Shift", "Долгая смена"],
  ["+4 s per level.", "+4 с за уровень."],
  (l) => [`+${4 * l}s`, `+${4 * l} с`],
);
D(
  "time3",
  1,
  0,
  -2,
  10,
  5e4,
  2.2,
  ["time2"],
  "clock",
  ["Marathon", "Марафон"],
  ["+8 s per level.", "+8 с за уровень."],
  (l) => [`+${8 * l}s`, `+${8 * l} с`],
);
D(
  "spawn1",
  1,
  1,
  0,
  6,
  100,
  1.8,
  ["time1"],
  "plusbox",
  ["Rock Feed", "Подпитка породы"],
  [
    "New blocks appear after each break. Max 0.5 per block.",
    "Новые блоки после поломки. Макс. 0.5 за блок.",
  ],
  (l) => [
    `${(0.25 + 0.05 * l).toFixed(2)} per block`,
    `${(0.25 + 0.05 * l).toFixed(2)} за блок`,
  ],
);
D(
  "spawn2",
  1,
  2,
  0,
  5,
  1e3,
  2.1,
  ["spawn1"],
  "plusbox",
  ["Rock Surge", "Обвал породы"],
  ["More new blocks (cap 0.5 per block).", "Больше новых блоков (предел 0.5)."],
  (l) => [
    `+${(0.05 * l).toFixed(2)} per block`,
    `+${(0.05 * l).toFixed(2)} за блок`,
  ],
);
D(
  "resp",
  1,
  2,
  1,
  5,
  500,
  1.8,
  ["spawn1"],
  "rewind",
  ["Quick Refill", "Быстрый возврат"],
  ["Empty cells refill faster.", "Пустые клетки заполняются быстрее."],
  (l) => [
    `Refill ${(5 - 0.5 * l).toFixed(1)}s`,
    `Возврат ${(5 - 0.5 * l).toFixed(1)} с`,
  ],
);
D(
  "fever",
  1,
  2,
  -1,
  5,
  4e3,
  2.1,
  ["spawn1"],
  "flame",
  ["Final Rush", "Финальный рывок"],
  ["Money bonus in the last 5 s.", "Бонус денег за последние 5 с."],
  (l) => [
    `×${(1 + 0.3 * l).toFixed(1)} last 5s`,
    `×${(1 + 0.3 * l).toFixed(1)} за последние 5 с`,
  ],
);
D(
  "rush",
  1,
  -1,
  0,
  8,
  800,
  1.8,
  ["time1"],
  "hour",
  ["Gold Fever", "Золотая лихорадка"],
  ["Each block adds time.", "Каждый блок добавляет время."],
  (l) => [
    `+${(0.01 * l).toFixed(2)}s per block`,
    `+${(0.01 * l).toFixed(2)} с за блок`,
  ],
);
D(
  "rcap",
  1,
  -2,
  0,
  7,
  2500,
  1.9,
  ["rush"],
  "hour",
  ["Time Cap", "Предел времени"],
  ["How much extra time you can gain.", "Сколько доп. времени можно набрать."],
  (l) => [`Up to +${30 + 10 * l}%`, `До +${30 + 10 * l}%`],
);
D(
  "dens",
  1,
  -1,
  1,
  8,
  150,
  1.7,
  ["time1"],
  "rock",
  ["Rich Rock", "Богатая порода"],
  ["More ore in the rock.", "Больше руды в породе."],
  (l) => [`Ore ${6 + 3 * l}%`, `Руда ${6 + 3 * l}%`],
);
D(
  "dens2",
  1,
  -2,
  2,
  5,
  8e3,
  2.1,
  ["dens"],
  "rock",
  ["Ore Veins", "Рудные пласты"],
  ["Even more ore.", "Ещё больше руды."],
  (l) => [`Ore +${2 * l}%`, `Руда +${2 * l}%`],
);
D(
  "rare",
  1,
  -1,
  -1,
  5,
  2e3,
  1.9,
  ["time1"],
  "star",
  ["Rare Veins", "Редкие жилы"],
  ["Rarer ore appears more often.", "Редкая руда чаще."],
  (l) => [`Rarity +${30 * l}%`, `Редкость +${30 * l}%`],
);
D(
  "pure",
  1,
  -2,
  -2,
  6,
  2e4,
  2,
  ["rare"],
  "gem",
  ["Enrichment", "Обогащение"],
  [
    "Broken ore can turn a neighbour into solid ore.",
    "Руда может превратить соседа в цельную руду.",
  ],
  (l) => [`${6 * l}% chance`, `Шанс ${6 * l}%`],
);
D(
  "aw",
  2,
  0,
  0,
  8,
  100,
  1.8,
  [],
  "worker",
  ["Workers", "Рабочие"],
  [
    "Workers mine while you are away. Income starts at 0.",
    "Рабочие копают, пока тебя нет. Доход сначала 0.",
  ],
  (l) => [`${l} workers`, `${l} рабочих`],
);
D(
  "aspd",
  2,
  1,
  0,
  6,
  800,
  3,
  ["aw"],
  "plusbox",
  ["Fast Feed", "Быстрый спавн"],
  [
    "Ore for workers spawns faster, ×1.5 per level.",
    "Руда для рабочих быстрее, ×1.5 за уровень.",
  ],
  (l) => [`×${(1.5 ** l).toFixed(2)}`, `×${(1.5 ** l).toFixed(2)}`],
);
D(
  "acap",
  2,
  -1,
  0,
  10,
  400,
  1.7,
  ["aw"],
  "box",
  ["Storage", "Склад"],
  ["Holds more hours of income.", "Вмещает больше часов дохода."],
  (l) => [`${0.5 + 0.5 * l} h`, `${0.5 + 0.5 * l} ч`],
);
D(
  "aoff",
  2,
  0,
  1,
  5,
  5e3,
  2,
  ["aw"],
  "moon",
  ["Night Shift", "Ночная смена"],
  ["Better efficiency while away.", "Лучше эффективность вдали."],
  (l) => [`${50 + 10 * l}%`, `${50 + 10 * l}%`],
);
D(
  "aeff",
  2,
  0,
  -1,
  6,
  2e3,
  2.2,
  ["aw"],
  "crown",
  ["Veteran Workers", "Опытные рабочие"],
  ["Workers earn more.", "Рабочие зарабатывают больше."],
  (l) => [`+${15 * l}%`, `+${15 * l}%`],
);
D(
  "asell",
  2,
  1,
  -1,
  5,
  15e3,
  2.6,
  ["aeff"],
  "coin",
  ["Trader", "Скупщик"],
  ["Sells for more.", "Продаёт дороже."],
  (l) => [`+${20 * l}%`, `+${20 * l}%`],
);
D(
  "aore",
  2,
  -1,
  -1,
  5,
  4e4,
  2.8,
  ["aeff"],
  "gem",
  ["Ore Sense", "Рудный нюх"],
  ["Workers find valuable ore.", "Рабочие находят ценную руду."],
  (l) => [`+${10 * l}%`, `+${10 * l}%`],
);
D(
  "abon",
  2,
  0,
  2,
  5,
  2e4,
  2.5,
  ["aoff"],
  "coin",
  ["Bonus", "Премия"],
  ["Bonus when you collect.", "Бонус при сборе."],
  (l) => [`+${10 * l}%`, `+${10 * l}%`],
);
D(
  "drone",
  2,
  -1,
  1,
  6,
  1500,
  1.9,
  ["aw"],
  "gear",
  ["Auto Pick", "Авто-кирка"],
  [
    "Picks random blocks during expeditions.",
    "Бьёт случайные блоки на экспедиции.",
  ],
  (l) => [l ? `${l} auto` : "None", l ? `${l} авто` : "Нет"],
);
D(
  "inc1",
  2,
  2,
  0,
  8,
  40,
  1.6,
  ["aw"],
  "bag",
  ["Income I", "Доход I"],
  ["All income +25% per level.", "Весь доход +25% за уровень."],
  (l) => [`+${25 * l}%`, `+${25 * l}%`],
);
D(
  "inc2",
  2,
  3,
  0,
  3,
  2e3,
  6,
  ["inc1"],
  "bag",
  ["Income II", "Доход II"],
  ["All income ×1.5 per level.", "Весь доход ×1.5 за уровень."],
  (l) => [`×${(1.5 ** l).toFixed(2)}`, `×${(1.5 ** l).toFixed(2)}`],
);
D(
  "inc3",
  2,
  4,
  0,
  3,
  4e4,
  8,
  ["inc2"],
  "bag",
  ["Income III", "Доход III"],
  ["All income ×2 per level.", "Весь доход ×2 за уровень."],
  (l) => [`×${2 ** l}`, `×${2 ** l}`],
);
D(
  "heart",
  2,
  4,
  1,
  1,
  2e7,
  1,
  ["inc3"],
  "heart",
  ["Heart of the Mountain", "Сердце горы"],
  ["All income ×2.", "Весь доход ×2."],
  (l) => (l ? ["×2", "×2"] : ["×1", "×1"]),
);
D(
  "rm",
  3,
  0,
  0,
  10,
  1,
  1.35,
  [],
  "rebirth",
  ["Core Wealth", "Ядро богатства"],
  ["Permanent income bonus.", "Постоянный бонус к доходу."],
  (l) => [`+${30 * l}%`, `+${30 * l}%`],
);
D(
  "rhp",
  3,
  1,
  0,
  6,
  1,
  1.5,
  ["rm"],
  "rock",
  ["Soft Rock", "Мягкая порода"],
  ["Weaker rock.", "Порода слабее."],
  (l) => [`-${6 * l}% HP`, `-${6 * l}% HP`],
);
D(
  "rst",
  3,
  -1,
  0,
  5,
  1,
  1.6,
  ["rm"],
  "coin",
  ["Starter Capital", "Стартовый капитал"],
  ["Money after rebirth.", "Деньги после перерождения."],
  (l) => [`$${fm(START[l])}`, `$${fm(START[l])}`],
);
D(
  "rafk",
  3,
  0,
  -1,
  5,
  1,
  1.5,
  ["rm"],
  "worker",
  ["Eternal Workers", "Вечные рабочие"],
  ["Permanent auto income bonus.", "Постоянный бонус к авто заработку."],
  (l) => [`+${60 * l}%`, `+${60 * l}%`],
);
D(
  "rtime",
  3,
  0,
  1,
  5,
  2,
  1.5,
  ["rm"],
  "clock",
  ["Eternal Clock", "Вечные часы"],
  ["More expedition time.", "Больше времени на экспедиции."],
  (l) => [`+${2 * l}s`, `+${2 * l} с`],
);
D(
  "rdmg",
  3,
  1,
  -1,
  8,
  1,
  1.4,
  ["rm"],
  "pick",
  ["Eternal Might", "Вечная сила"],
  ["Permanent damage bonus.", "Постоянный бонус к урону."],
  (l) => [`+${25 * l}%`, `+${25 * l}%`],
);
D(
  "rspn",
  3,
  -1,
  -1,
  5,
  2,
  1.5,
  ["rm"],
  "plusbox",
  ["Eternal Spawn", "Вечный обвал"],
  ["More blocks appear (cap 0.5).", "Блоки появляются чаще (предел 0.5)."],
  (l) => [
    `+${(0.02 * l).toFixed(2)} per block`,
    `+${(0.02 * l).toFixed(2)} за блок`,
  ],
);
D(
  "rpur",
  3,
  1,
  1,
  5,
  2,
  1.5,
  ["rm"],
  "gem",
  ["Eternal Veins", "Вечные жилы"],
  ["Solid ore more often.", "Цельная руда чаще."],
  (l) => [`+${3 * l}%`, `+${3 * l}%`],
);
D(
  "lure",
  1,
  0,
  1,
  6,
  400,
  1.9,
  ["time1"],
  "star",
  ["Ore Lure", "Приманка руды"],
  [
    "New blocks are more likely to be ore.",
    "Новые блоки чаще оказываются рудой.",
  ],
  (l) => [`+${10 * l}% ore on new blocks`, `+${10 * l}% руды в новых блоках`],
);
D(
  "pros",
  1,
  1,
  1,
  6,
  600,
  1.9,
  ["time1"],
  "rock",
  ["Prospecting", "Разведка"],
  ["The field starts richer in ore.", "Поле в начале богаче рудой."],
  (l) => [`+${4 * l}% ore at start`, `+${4 * l}% руды на старте`],
);
D(
  "vein",
  1,
  1,
  -1,
  6,
  2500,
  2,
  ["time1"],
  "gem",
  ["Vein Burst", "Жильный взрыв"],
  [
    "Breaking stone may reveal ore next to it.",
    "Сломанный камень может открыть руду рядом.",
  ],
  (l) => [`${5 * l}% chance`, `Шанс ${5 * l}%`],
);
D(
  "rain",
  1,
  0,
  2,
  6,
  12e3,
  2.1,
  ["lure"],
  "plusbox",
  ["Ore Rain", "Рудный дождь"],
  [
    "Every few seconds stone turns into ore.",
    "Каждые пару секунд камень превращается в руду.",
  ],
  (l) =>
    l
      ? [
          `${2 + l} blocks / ${Math.max(1.5, 6 - 0.6 * l).toFixed(1)}s`,
          `${2 + l} блоков / ${Math.max(1.5, 6 - 0.6 * l).toFixed(1)} с`,
        ]
      : ["Off", "Выкл"],
);
D(
  "tnt",
  1,
  -1,
  2,
  8,
  5e3,
  2.2,
  ["dens"],
  "flame",
  ["Dynamite", "Динамит"],
  [
    "Dynamite blocks appear like ore. Breaking one blasts everything around it.",
    "Динамит появляется как руда. Сломай его — взорвёт всё вокруг.",
  ],
  (l) => [
    `${(0.25 * l).toFixed(2)}% per new block, 1 on field`,
    `${(0.25 * l).toFixed(2)}% на новый блок, 1 на поле`,
  ],
);
D(
  "tnt2",
  1,
  -1,
  3,
  2,
  5e4,
  4,
  ["tnt"],
  "flame",
  ["Bigger Blast", "Мощный взрыв"],
  ["Larger blast radius.", "Больше радиус взрыва."],
  (l) => [`Radius ${1 + l}`, `Радиус ${1 + l}`],
);
D(
  "flow",
  1,
  2,
  2,
  8,
  150,
  1.8,
  ["pros", "resp"],
  "plusbox",
  ["Block Flow", "Поток блоков"],
  [
    "New blocks keep appearing over time.",
    "Новые блоки постоянно появляются со временем.",
  ],
  (l) => [
    `${(1.5 + 0.5 * l).toFixed(1)} blocks/s`,
    `${(1.5 + 0.5 * l).toFixed(1)} блоков/с`,
  ],
);
D(
  "flow2",
  1,
  3,
  3,
  5,
  3e4,
  2.4,
  ["flow"],
  "plusbox",
  ["Mass Spawn", "Массовый спавн"],
  [
    "Many more new blocks per second.",
    "Намного больше новых блоков в секунду.",
  ],
  (l) => [`+${3 * l} blocks/s`, `+${3 * l} блоков/с`],
);
D(
  "mul5",
  0,
  -5,
  0,
  2,
  4e8,
  30,
  ["mul4"],
  "star",
  ["Cosmic Pick", "Космическая кирка"],
  ["Multiplies all damage ×32.", "Умножает весь урон ×32."],
  (l) => [`Damage ×${32 ** l}`, `Урон ×${32 ** l}`],
);
D(
  "crit2",
  0,
  2,
  -1,
  5,
  2e4,
  2.3,
  ["crit"],
  "star",
  ["Deadly Aim", "Смертельный прицел"],
  ["More crit chance.", "Больше шанс крита."],
  (l) => [`+${4 * l}% crit`, `+${4 * l}% крита`],
);
D(
  "cdmg2",
  0,
  3,
  -3,
  5,
  2e5,
  2.5,
  ["cdmg"],
  "target",
  ["Executioner", "Палач"],
  ["Crit multiplier +1 per level.", "Множитель крита +1 за уровень."],
  (l) => [`Crit +${l}`, `Крит +${l}`],
);
D(
  "luck2",
  0,
  2,
  -3,
  5,
  3e5,
  2.5,
  ["luck"],
  "clover",
  ["Fortune", "Фортуна"],
  ["More chance to double money.", "Больше шанс удвоить деньги."],
  (l) => [`+${6 * l}% double`, `+${6 * l}% удвоения`],
);
D(
  "zone3",
  0,
  3,
  0,
  5,
  5e5,
  2.4,
  ["zone2"],
  "target",
  ["Giant Reach", "Гигантский захват"],
  ["Even bigger area.", "Ещё больше зона."],
  (l) => [`Radius +${0.5 * l}`, `Радиус +${0.5 * l}`],
);
D(
  "pk4",
  0,
  4,
  4,
  6,
  8e6,
  2.6,
  ["pk3"],
  "picks",
  ["Pick Legion", "Легион кирок"],
  ["+25 pickaxes per level.", "+25 кирок за уровень."],
  (l) => [`Picks +${25 * l}`, `Кирок +${25 * l}`],
);
D(
  "spd4",
  0,
  -4,
  4,
  5,
  5e6,
  2.6,
  ["spd3"],
  "bolt",
  ["Time Warp", "Искажение времени"],
  ["Even faster strikes.", "Ещё быстрее удары."],
  (l) => [
    `Speed +${(100 * (1 - 0.9 ** l)).toFixed(0)}%`,
    `Скорость +${(100 * (1 - 0.9 ** l)).toFixed(0)}%`,
  ],
);
D(
  "time4",
  1,
  0,
  -3,
  5,
  1e6,
  3,
  ["time3"],
  "clock",
  ["Eternity", "Вечность"],
  ["+16 s per level.", "+16 с за уровень."],
  (l) => [`+${16 * l}s`, `+${16 * l} с`],
);
D(
  "fever2",
  1,
  3,
  -1,
  5,
  5e5,
  2.5,
  ["fever"],
  "flame",
  ["Overdrive", "Форсаж"],
  ["Even more money in the last 5 s.", "Ещё больше денег в последние 5 с."],
  (l) => [
    `+${(0.5 * l).toFixed(1)} bonus`,
    `+${(0.5 * l).toFixed(1)} к бонусу`,
  ],
);
D(
  "rush2",
  1,
  -3,
  0,
  6,
  2e5,
  2.2,
  ["rcap"],
  "hour",
  ["Time Bank", "Банк времени"],
  ["More time per block.", "Больше времени за блок."],
  (l) => [
    `+${(0.01 * l).toFixed(2)}s per block`,
    `+${(0.01 * l).toFixed(2)} с за блок`,
  ],
);
D(
  "dens3",
  1,
  -3,
  3,
  5,
  3e5,
  2.4,
  ["dens2"],
  "rock",
  ["Motherlode", "Материнская жила"],
  ["Even more ore.", "Ещё больше руды."],
  (l) => [`Ore +${2 * l}%`, `Руда +${2 * l}%`],
);
D(
  "rare2",
  1,
  -3,
  -3,
  5,
  1e5,
  2.3,
  ["pure"],
  "star",
  ["Gem Hunter", "Охотник за камнями"],
  ["Rarer ore more often.", "Редкая руда ещё чаще."],
  (l) => [`Rarity +${30 * l}%`, `Редкость +${30 * l}%`],
);
D(
  "pure2",
  1,
  -3,
  -2,
  5,
  4e5,
  2.5,
  ["pure"],
  "gem",
  ["Solid Veins", "Цельные жилы"],
  ["More solid ore blocks.", "Больше цельных рудных блоков."],
  (l) => [`+${4 * l}% chance`, `+${4 * l}% шанс`],
);
D(
  "aw2",
  2,
  1,
  1,
  6,
  5e4,
  2.4,
  ["aw"],
  "worker",
  ["Foremen", "Бригадиры"],
  ["+4 workers per level.", "+4 рабочих за уровень."],
  (l) => [`+${4 * l} workers`, `+${4 * l} рабочих`],
);
D(
  "aspd2",
  2,
  2,
  1,
  6,
  1e5,
  3,
  ["aspd"],
  "plusbox",
  ["Turbo Feed", "Турбо-подача"],
  [
    "Ore for workers ×1.3 faster per level.",
    "Руда для рабочих ×1.3 быстрее за уровень.",
  ],
  (l) => [`×${(1.3 ** l).toFixed(2)}`, `×${(1.3 ** l).toFixed(2)}`],
);
D(
  "acap2",
  2,
  -2,
  0,
  8,
  5e4,
  2,
  ["acap"],
  "box",
  ["Big Vault", "Большой склад"],
  ["+2 hours per level.", "+2 часа за уровень."],
  (l) => [`+${2 * l} h`, `+${2 * l} ч`],
);
D(
  "dr2",
  2,
  -2,
  2,
  5,
  2e5,
  2.5,
  ["drone"],
  "gear",
  ["Drone Swarm", "Рой дронов"],
  ["+3 auto picks per level.", "+3 авто-кирки за уровень."],
  (l) => [`+${3 * l} auto`, `+${3 * l} авто`],
);
D(
  "inc4",
  2,
  5,
  0,
  3,
  1e9,
  10,
  ["inc3"],
  "bag",
  ["Income IV", "Доход IV"],
  ["All income ×3 per level.", "Весь доход ×3 за уровень."],
  (l) => [`×${3 ** l}`, `×${3 ** l}`],
);
D(
  "rcnt",
  3,
  -1,
  1,
  5,
  3,
  1.6,
  ["rm"],
  "picks",
  ["Eternal Picks", "Вечные кирки"],
  ["+2 pickaxes per level.", "+2 кирки за уровень."],
  (l) => [`+${2 * l} picks`, `+${2 * l} кирок`],
);
D(
  "rloot",
  3,
  2,
  0,
  5,
  3,
  1.6,
  ["rhp"],
  "coin",
  ["Mine Master", "Мастер шахт"],
  ["+10% money in mines 2+.", "+10% денег в шахтах 2+."],
  (l) => [`+${10 * l}%`, `+${10 * l}%`],
);
D(
  "rzone",
  3,
  0,
  -2,
  4,
  3,
  1.6,
  ["rafk"],
  "target",
  ["Eternal Reach", "Вечный захват"],
  ["Bigger zone under the finger.", "Больше зона под пальцем."],
  (l) => [`Radius +${0.5 * l}`, `Радиус +${0.5 * l}`],
);
D(
  "rflow",
  3,
  0,
  2,
  5,
  2,
  1.5,
  ["rtime"],
  "plusbox",
  ["Eternal Flow", "Вечный поток"],
  ["More new blocks per second.", "Больше новых блоков в секунду."],
  (l) => [
    `+${(0.5 * l).toFixed(1)} blocks/s`,
    `+${(0.5 * l).toFixed(1)} блоков/с`,
  ],
);
const NM = Object.fromEntries(N.map((n) => [n.id, n]));
let S,
  T,
  mode = "menu",
  sel = null,
  tab = 0,
  rcF = 0,
  rs = 0,
  W,
  H,
  s,
  dpr,
  ro,
  k,
  cell,
  fx,
  fy,
  cols,
  rows,
  nc,
  ty,
  hp,
  mh,
  vr,
  fl,
  ag,
  rt,
  fb,
  TL,
  FL,
  CR,
  IMG = [],
  zm = 1,
  GEO = null,
  moved = false,
  spc = 0,
  tb = 0,
  flashT = 0,
  lastTick = 9,
  lastSp = 0,
  rainC = 3,
  pm = 0,
  bsum = 0,
  tntN = 0,
  spAcc = 0;
let rph = "ready",
  tl = 10,
  run = { by: {}, tot: 0 },
  zx = 0,
  zy = 0,
  holdPid = null,
  spT = 0,
  tNow = 0,
  shake = 0,
  hudT = 0,
  saveT = 6;
const P = [],
  pk = [],
  seen = /* @__PURE__ */ new Set();
function load() {
  const d = {
    L: {},
    m: 0,
    earn: 0,
    rb: 0,
    rp: 0,
    loc: 0,
    vault: 0,
    t: Date.now(),
    lang: "en",
    o: { snd: 1, shk: 1, fx: 1, rd: 1 },
  };
  try {
    const j = JSON.parse(localStorage.getItem("glub6"));
    if (j) return { ...d, ...j, o: { ...d.o, ...j.o } };
  } catch (e) {}
  return d;
}
S = load();
const lvl = (id) => S.L[id] || 0,
  open = (t) => !t || lvl(UN[t]) > 0,
  bal = (n) => (n.t === 3 ? S.rp : S.m);
const needOf = (r) => (r < 3 ? [15e3, 5e4, 1e5][r] : 1e5 * 1.5 ** (r - 2));
const bulk = (k2) => {
  let c2 = 0;
  for (let i = 0; i < k2; i++) c2 += needOf(S.rb + i);
  c2 /= k2 === 1 ? 1 : 1 + 0.05 * k2;
  return { cost: Math.round(c2), pts: k2 };
};
let rk = 1;
const need = () => bulk(rk).cost;
const cost = (n) => {
  const v = n.b * n.g ** lvl(n.id);
  return n.t === 3 ? Math.ceil(v) : Math.round(v);
};
const save = () => {
  S.t = Date.now();
  try {
    localStorage.setItem("glub6", JSON.stringify(S));
  } catch (e) {}
};
const gain = (v) => {
  S.m += v;
  S.earn += v;
};
const oi = (t) => `<img class="oi" src="${IMG[t]}">`;
const hpOf = (t) => {
  if (t === 11) t = 0;
  const b = t > 5 ? t - 5 : t;
  return Math.max(1, Math.round(ORE[b].hp * T.hpm * (t > 5 ? 3 : 1)));
};
function stats() {
  const l = lvl,
    LN = LOC[S.loc];
  T.gm =
    (1 + 0.25 * l("inc1")) *
    1.5 ** l("inc2") *
    2 ** l("inc3") *
    3 ** l("inc4") *
    (1 + 0.3 * l("rm")) *
    (l("heart") ? 2 : 1) *
    LN.l *
    (S.loc > 0 ? (1 + 0.25 * S.rb) * (1 + 0.1 * l("rloot")) : 1);
  const ov = (b) => ORE[b].v * 1.4 ** l(VN[b]) * T.gm;
  T.val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => {
    const b = t > 5 ? t - 5 : t;
    return t > 5 ? 5 * ov(b) : ov(b);
  });
  T.dmg = Math.round(
    (1 + l("dmg1") + 5 * l("dmg2") + 25 * l("dmg3") + 125 * l("dmg4")) *
      2 ** l("mul1") *
      4 ** l("mul2") *
      8 ** l("mul3") *
      16 ** l("mul4") *
      32 ** l("mul5") *
      (1 + 0.25 * l("rdmg")),
  );
  T.cnt = Math.min(
    80,
    1 + l("pk1") + 3 * l("pk2") + 10 * l("pk3") + 25 * l("pk4") + 2 * l("rcnt"),
  );
  T.iv = Math.max(
    0.12,
    0.6 *
      0.93 ** l("spd1") *
      0.92 ** l("spd2") *
      0.9 ** l("spd3") *
      0.9 ** l("spd4"),
  );
  T.cc = Math.min(0.8, 0.08 * l("crit") + 0.04 * l("crit2"));
  T.cm = 3 + 0.5 * l("cdmg") + l("cdmg2");
  T.lk = Math.min(0.9, 0.08 * l("luck") + 0.06 * l("luck2"));
  T.zr = 1.5 + 0.5 * (l("zone1") + l("zone2") + l("zone3") + l("rzone"));
  T.time =
    10 +
    2 * l("time1") +
    4 * l("time2") +
    8 * l("time3") +
    16 * l("time4") +
    2 * l("rtime");
  T.op = 0.06 + 0.03 * l("dens") + 0.02 * l("dens2") + 0.02 * l("dens3");
  T.rare = 0.3 * (l("rare") + l("rare2"));
  T.pure = 0.06 * l("pure") + 0.04 * l("pure2") + 0.03 * l("rpur");
  T.rt = 5 - 0.5 * l("resp");
  T.sr = Math.min(
    0.5,
    0.25 + 0.05 * l("spawn1") + 0.05 * l("spawn2") + 0.02 * l("rspn"),
  );
  T.rv = 0.01 * (l("rush") + l("rush2"));
  T.rcap = (0.3 + 0.1 * l("rcap")) * T.time;
  T.fv = 1 + 0.3 * l("fever") + 0.5 * l("fever2");
  T.dr = Math.min(40, l("drone") + 3 * l("dr2"));
  T.ab = 1 + 0.1 * l("abon");
  T.lure = 0.1 * l("lure");
  T.pros = 0.04 * l("pros");
  T.vein = 0.05 * l("vein");
  T.rain = l("rain");
  T.tnt = 25e-4 * l("tnt");
  T.spr = 1.5 + 0.5 * l("flow") + 3 * l("flow2") + 0.5 * l("rflow");
  T.tr = 1 + l("tnt2");
  T.hpm = LN.h * (S.loc > 0 ? 1 + 0.2 * S.rb : 1) * (1 - 0.06 * l("rhp"));
  T.eff = 0.5 + 0.1 * l("aoff");
  T.cap = (0.5 + 0.5 * l("acap") + 2 * l("acap2")) * 3600;
  let w = 0,
    q = 0;
  for (let j = 1; j < 6; j++)
    if (open(j)) {
      const ww = ORE[j].w * (1 + T.rare * (j - 1) * 0.5);
      w += ww;
      q += ww * T.val[j];
    }
  const avg = w ? (1 - T.op) * T.val[0] + (T.op * q) / w : T.val[0];
  T.afk =
    (l("aw") + 4 * l("aw2")) *
    0.05 *
    1.5 ** l("aspd") *
    1.3 ** l("aspd2") *
    avg *
    (1 + 0.15 * l("aeff") + 0.2 * l("asell") + 0.1 * l("aore")) *
    (1 + 0.6 * l("rafk"));
}
T = {};
let ac;
function snd(f, d, t = "triangle", v = 0.08) {
  if (!S.o.snd) return;
  try {
    ac = ac || new AudioContext();
    const o = ac.createOscillator(),
      g = ac.createGain(),
      n = ac.currentTime;
    o.type = t;
    o.frequency.setValueAtTime(f, n);
    o.frequency.exponentialRampToValueAtTime(f / 2, n + d);
    g.gain.setValueAtTime(v, n);
    g.gain.exponentialRampToValueAtTime(1e-3, n + d);
    o.connect(g);
    g.connect(ac.destination);
    o.start();
    o.stop(n + d);
  } catch (e) {}
}
function nz(d, v = 0.1, f = 1200) {
  if (!S.o.snd) return;
  try {
    ac = ac || new AudioContext();
    const n = ac.currentTime,
      len = Math.max(1, (ac.sampleRate * d) | 0),
      buf = ac.createBuffer(1, len, ac.sampleRate),
      a = buf.getChannelData(0);
    for (let i = 0; i < len; i++) a[i] = (rnd() * 2 - 1) * (1 - i / len);
    const so = ac.createBufferSource(),
      fi = ac.createBiquadFilter(),
      g = ac.createGain();
    so.buffer = buf;
    fi.type = "lowpass";
    fi.frequency.value = f;
    g.gain.value = v;
    so.connect(fi);
    fi.connect(g);
    g.connect(ac.destination);
    so.start(n);
  } catch (e) {}
}
const boom = () => {
  snd(90, 0.6, "sawtooth", 0.14);
  snd(55, 0.7, "square", 0.1);
  nz(0.55, 0.25, 700);
};
const chime = (b) => {
  const f = [0, 520, 600, 660, 880, 1170][b] || 600;
  snd(f, 0.18, "sine", 0.05);
  setTimeout(() => snd(f * 1.5, 0.2, "sine", 0.04), 70);
};
const arp = (fs, st = 70, t = "sine", v = 0.06) =>
  fs.forEach((f, i) => setTimeout(() => snd(f, 0.22, t, v), i * st));
function flash() {
  const f = $("#flash");
  f.classList.remove("on");
  void f.offsetWidth;
  f.classList.add("on");
}
const SC = $("#sc"),
  ZW = $("#zw"),
  IN = $("#in");
function applyLang() {
  const e = TX[S.lang] || TX.en;
  $("#h1").textContent = e.title;
  $("#sub").textContent = e.sub;
  $("#start").textContent = e.start;
  $("#sets").textContent = e.settings;
  $("#go").innerHTML = ic("mine") + " " + e.exp;
  $("#rail").innerHTML = [
    [e.tMine, "pick"],
    [e.tExp, "mine"],
    [e.tAuto, "moon"],
    [e.tReb, "rebirth"],
  ]
    .map(
      ([n, i], j) =>
        `<button class="btn tb" data-t="${j}">${ic(i)}<span>${n}</span></button>`,
    )
    .join("");
  syncTabs();
  updLoc();
  go(mode);
}
function go(m) {
  mode = m;
  const cl = document.body.classList;
  cl.remove("m-menu", "m-tree", "m-mine");
  cl.add("m-" + m);
  $("#res").classList.remove("on");
  if (m === "tree") {
    renderTree(true);
    syncTabs();
  } else $("#info").style.display = "none";
  if (m === "mine") newRun();
  $("#tt").innerHTML = m === "mine" ? tx("tExp") : "";
  $("#back").innerHTML =
    ic("back") + (m === "tree" ? " " + tx("menu") : " " + tx("tree"));
  hud();
}
const shown = (n) => !n.p.length || n.p.some((p) => lvl(p));
const nicon = (n) =>
  /^o\d$/.test(n.ic)
    ? oi(+n.ic[1])
    : /^v\d$/.test(n.ic)
      ? `<span class="v">${oi(+n.ic[1])}</span>`
      : ic(n.ic);
const nname = (n) => n.nm[RU()];
function hud() {
  const up2 = S.m > pm;
  pm = S.m;
  $("#pills").innerHTML =
    `<span class="pill${up2 ? " bump" : ""}">${ic("coin")} ${fm(S.m)}</span>`;
  document.querySelectorAll(".nd[data-id]:not(.tz)").forEach((e) => {
    const n = NM[e.dataset.id];
    e.classList.toggle("can", lvl(n.id) < n.mx && bal(n) >= cost(n));
  });
  if (sel) {
    const n = NM[sel],
      h = $("#have");
    updBuy();
    if (h) h.textContent = fm(bal(n));
  }
}
const zmin = () =>
  GEO
    ? Math.max(
        0.3,
        Math.min(1, SC.clientWidth / GEO.w, SC.clientHeight / GEO.h),
      )
    : 1;
function applyZ() {
  ZW.style.width = GEO.w * zm + "px";
  ZW.style.height = GEO.h * zm + "px";
  IN.style.width = GEO.w + "px";
  IN.style.height = GEO.h + "px";
  IN.style.transform = `scale(${zm})`;
}
const npos = (n) => [
  (n.x * GEO.GX + GEO.ox) * zm - SC.scrollLeft,
  (n.y * GEO.GY + GEO.oy) * zm - SC.scrollTop,
];
function renderTree(fresh) {
  const ns = N.filter((n) => n.t === tab);
  let x0 = 9,
    x1 = -9,
    y0 = 9,
    y1 = -9;
  ns.forEach((n) => {
    x0 = Math.min(x0, n.x);
    x1 = Math.max(x1, n.x);
    y0 = Math.min(y0, n.y);
    y1 = Math.max(y1, n.y);
  });
  const GX = 118,
    GY = 104,
    ox = 170 - x0 * GX,
    oy = 170 - y0 * GY,
    wd = (x1 - x0) * GX + 460,
    ht = (y1 - y0) * GY + 340,
    X = (n) => n.x * GX + ox,
    Y = (n) => n.y * GY + oy;
  GEO = { w: wd, h: ht, ox, oy, GX, GY };
  let h = "",
    l = "";
  ns.forEach((n) => {
    const v = shown(n),
      t = !v && n.p.some((p) => shown(NM[p]));
    if (!v && !t) return;
    n.p.forEach((p) => {
      const q = NM[p];
      if (shown(q))
        l += `<line x1="${X(q)}" y1="${Y(q)}" x2="${X(n)}" y2="${Y(n)}" class="${lvl(p) ? "lit" : ""}"/>`;
    });
    const L = lvl(n.id),
      kk = n.id + (t ? "?" : "");
    h += `<div class="nd${t ? " tz" : ""}${L >= n.mx ? " max" : ""}${sel === n.id ? " sel" : ""}${seen.has(kk) ? "" : " pop"}" data-id="${n.id}" style="left:${X(n)}px;top:${Y(n)}px;--p:${(L / n.mx) * 100}%"><i>${t ? "?" : nicon(n)}</i>${t ? "" : `<b>${L}/${n.mx}</b>`}</div>`;
    seen.add(kk);
  });
  zm = Math.max(zmin(), Math.min(1.6, zm));
  applyZ();
  IN.innerHTML = `<svg id="ln" width="${wd}" height="${ht}">${l}</svg>` + h;
  if (fresh) {
    SC.scrollLeft = X(ns[0]) * zm - SC.clientWidth / 2;
    SC.scrollTop = Y(ns[0]) * zm - SC.clientHeight / 2;
  }
  info();
  wdBuild();
  hud();
}
function info() {
  const el = $("#info");
  if (!sel) {
    el.style.display = "none";
    return;
  }
  const n = NM[sel],
    L = lvl(n.id),
    c2 = cost(n),
    cu = n.t === 3 ? ic("rebirth") : ic("coin"),
    e = tx,
    cur = n.f(L),
    nx = n.f(L + 1);
  el.classList.toggle("mini", !!S.o.mi);
  el.innerHTML =
    `<button class="btn x" id="cl">${ic("x")}</button><button class="btn x" id="mi" style="right:2.6rem">${S.o.mi ? "+" : "−"}</button><h3>${nname(n)}</h3><p>${n.ds[RU()]}</p><div class="row"><span>${e("lvl")}</span><b>${L}/${n.mx}</b></div><div class="row"><span>${e("now")}</span><b>${cur[RU()]}</b></div>` +
    (L < n.mx
      ? `<div class="row"><span>${e("next")}</span><b class="gr">${nx[RU()]}</b></div><div class="rk"><button id="buy" class="btn pri" style="flex:1"></button><button class="btn" id="bmx">MAX</button></div><small class="mut">${e("have")}: <span id="have">${fm(bal(n))}</span></small>`
      : `<div class="row"><span>${e("maxL")}</span><b class="au">${ic("check")}</b></div>`);
  updBuy();
  placeInfo();
}
function placeInfo() {
  const el = $("#info");
  if (!sel || mode !== "tree" || !GEO) {
    el.style.display = "none";
    return;
  }
  const [nx, ny] = npos(NM[sel]);
  if (
    nx < -30 ||
    ny < -30 ||
    nx > SC.clientWidth + 30 ||
    ny > SC.clientHeight + 30
  ) {
    el.style.display = "none";
    return;
  }
  el.style.display = "block";
  const w = el.offsetWidth,
    h = el.offsetHeight;
  let left = SC.offsetLeft + nx + 29 * zm + 12;
  left = Math.min(left, SC.offsetLeft + SC.clientWidth - w - 4);
  let top = SC.offsetTop + ny - h / 2;
  top = Math.max(
    SC.offsetTop + 2,
    Math.min(top, SC.offsetTop + SC.clientHeight - h - 2),
  );
  el.style.left = left + "px";
  el.style.top = top + "px";
}
function ensureVis() {
  if (!sel) return;
  const el = $("#info"),
    pw = (el.offsetWidth || 240) + 50,
    [nx, ny] = npos(NM[sel]);
  if (nx > SC.clientWidth - pw) SC.scrollLeft += nx - (SC.clientWidth - pw);
  if (nx < 40) SC.scrollLeft -= 40 - nx;
  if (ny < 40) SC.scrollTop -= 40 - ny;
  if (ny > SC.clientHeight - 40) SC.scrollTop += ny - (SC.clientHeight - 40);
  placeInfo();
}
let bk = 1;
function bcost(n, k2) {
  let c2 = 0;
  for (let i = 0; i < k2; i++) {
    const v = n.b * n.g ** (lvl(n.id) + i);
    c2 += n.t === 3 ? Math.ceil(v) : Math.round(v);
  }
  return c2;
}
function bmax(n) {
  let k2 = 0;
  const rem = n.mx - lvl(n.id);
  while (k2 < rem && bcost(n, k2 + 1) <= bal(n)) k2++;
  return k2;
}
function updBuy() {
  if (!sel) return;
  const n = NM[sel],
    b = $("#buy");
  if (!b) return;
  const rem = n.mx - lvl(n.id),
    k2 = Math.max(1, Math.min(rem, bk)),
    c2 = bcost(n, k2);
  b.disabled = bal(n) < c2;
  b.innerHTML = `${tx("buy")}${k2 > 1 ? " ×" + k2 : ""} · ${n.t === 3 ? ic("rebirth") : ic("coin")} ${fm(c2)}`;
}
function buy() {
  const n = NM[sel],
    rem = n.mx - lvl(n.id);
  let k2 = Math.max(1, Math.min(rem, bk));
  while (k2 > 1 && bcost(n, k2) > bal(n)) k2--;
  const c2 = bcost(n, k2);
  if (rem < 1 || bal(n) < c2) return;
  if (n.t === 3) S.rp -= c2;
  else S.m -= c2;
  S.L[n.id] = lvl(n.id) + k2;
  bk = 1;
  stats();
  save();
  arp([520, 660, 880].slice(0, Math.min(3, k2 + 1)), 60);
  renderTree();
  const el = IN.querySelector(".nd.sel");
  if (el) el.classList.add("buyfx");
}
function wdBuild() {
  const w = $("#wd"),
    e = tx;
  if (S.o.hw) {
    w.innerHTML = `<button class="btn" id="wsh">${ic("picks")}</button>`;
    return;
  }
  if (tab === 2)
    w.innerHTML = `<div class="wc"><div>${ic("moon")} ${e("vault")} <button class="btn" id="wh">−</button></div><div class="bar"><i id="vb"></i><b id="vt"></b></div><div id="vr" class="mut"></div><button id="vcol" class="btn pri buy">${e("collect")}</button></div>`;
  else if (tab === 3)
    w.innerHTML = `<div class="wc"><div>${ic("rebirth")} ${e("rebNo")}<span id="rn"></span> <button class="btn" id="wh">−</button></div><div class="bar"><i id="pb"></i><b id="pt"></b></div><div id="pr" class="mut"></div><div class="rk"><div id="rkv" class="mut" style="font-size:.72rem;flex:1"></div><button class="btn" id="rmx">MAX</button></div><button id="rbb" class="btn pri buy">${e("tReb")}</button></div>`;
  else w.innerHTML = "";
  wdUpd();
}
function wdUpd() {
  const e = tx;
  if (tab === 2 && $("#vb")) {
    const cap = T.afk * T.cap;
    $("#vb").style.width = Math.min(100, (S.vault / cap) * 100 || 0) + "%";
    $("#vt").textContent = "$" + fm(S.vault) + " / $" + fm(cap);
    $("#vr").textContent =
      T.afk > 0
        ? "+$" + (T.afk < 10 ? T.afk.toFixed(2) : fm(T.afk)) + " /s"
        : e("noWork");
  }
  if (tab === 3 && $("#pb")) {
    const nd = need(),
      nx = LOC.find((L) => L.r > S.rb);
    $("#rn").textContent = S.rb + 1;
    $("#pb").style.width = Math.min(100, (S.earn / nd) * 100) + "%";
    $("#pt").textContent = "$" + fm(S.earn) + " / $" + fm(nd);
    $("#pr").innerHTML =
      e("pts") +
      ": " +
      S.rp +
      "<br>" +
      e("rebInfo") +
      "<br>" +
      (nx ? e("nextMine") + " " + nx.r + " " + e("rebirths") : e("allMines"));
    $("#rbb").disabled = S.earn < nd;
    $("#rkv").textContent =
      "→ +" + bulk(rk).pts + " " + e("pts") + " · $" + fm(nd);
  }
}
function popup(h) {
  $("#rc").innerHTML = h;
  $("#res").classList.add("on");
}
function doRebirth() {
  const keep = {};
  N.filter((n) => n.t === 3).forEach((n) => (keep[n.id] = lvl(n.id)));
  const pts = bulk(rk).pts;
  S.rb += rk;
  S.rp += pts;
  rk = 1;
  S.L = keep;
  stats();
  S.m = START[lvl("rst")];
  S.earn = 0;
  S.vault = 0;
  stats();
  save();
  sel = null;
  tab = 0;
  renderTree(true);
  syncTabs();
  const nl = LOC.find((L) => L.r === S.rb),
    e = tx;
  popup(
    `<h2>${e("rebT")}</h2><div class="rr"><span>${e("gotPts")}</span><b>+${pts}</b></div><div class="rr"><span>${e("rebCount")}</span><b>${S.rb}</b></div>${nl ? `<div class="rr"><span>${e("newMine")}</span><b>${nl.n[RU()]}</b></div>` : ""}<div class="rb"><button class="btn pri" id="okk">${e("cont")}</button></div>`,
  );
  arp([440, 554, 660, 880, 1100], 90, "triangle", 0.07);
  flash();
}
const syncTabs = () =>
  document
    .querySelectorAll(".tb")
    .forEach((b) => b.classList.toggle("on", +b.dataset.t === tab));
$("#rail").onclick = (e) => {
  const b = e.target.closest(".tb");
  if (!b) return;
  tab = +b.dataset.t;
  sel = null;
  renderTree(true);
  syncTabs();
};
$("#info").onclick = (e) => {
  if (e.target.closest("#bmx")) {
    const n = NM[sel];
    bk = bk > 1 ? 1 : Math.max(1, bmax(n));
    updBuy();
    return;
  }
  if (e.target.closest("#mi")) {
    sel = null;
    renderTree();
    return;
  }
  if (e.target.closest("#cl")) {
    sel = null;
    renderTree();
  } else if (e.target.closest("#buy")) buy();
};
SC.addEventListener("click", (e) => {
  if (moved) {
    moved = false;
    return;
  }
  const d = e.target.closest(".nd");
  if (d) {
    if (!d.classList.contains("tz")) {
      sel = sel === d.dataset.id ? null : d.dataset.id;
      bk = 1;
      renderTree();
      ensureVis();
    }
    return;
  }
  if (e.target.closest("#vcol")) {
    if (S.vault >= 1) {
      gain(S.vault * T.ab);
      S.vault = 0;
      arp([700, 900, 1200], 50);
      hud();
      wdUpd();
      save();
    }
    return;
  }
  if (e.target.closest("#wh")) {
    S.o.hw = 1;
    save();
    wdBuild();
    return;
  }
  if (e.target.closest("#wsh")) {
    S.o.hw = 0;
    save();
    wdBuild();
    return;
  }
  if (e.target.closest("#rp1")) {
    rk = Math.min(1e3, rk + 1);
    wdUpd();
    return;
  }
  if (e.target.closest("#rm1")) {
    rk = Math.max(1, rk - 1);
    wdUpd();
    return;
  }
  if (e.target.closest("#rmx")) {
    let k2 = 1;
    while (k2 < 1e3 && bulk(k2 + 1).cost <= S.earn) k2++;
    rk = rk > 1 ? 1 : k2;
    wdUpd();
    return;
  }
  if (e.target.closest("#rbb")) {
    if (S.earn >= need()) {
      if (!rcF) {
        rcF = 1;
        $("#rbb").textContent = tx("confirm");
        setTimeout(() => {
          rcF = 0;
          const b = $("#rbb");
          if (b) b.textContent = tx("tReb");
        }, 3500);
      } else {
        rcF = 0;
        doRebirth();
      }
    }
    return;
  }
  if (!e.target.closest("#wd") && sel) {
    sel = null;
    renderTree();
  }
});
document.addEventListener(
  "pointerdown",
  (e) => {
    if (e.target.closest && e.target.closest(".btn"))
      snd(260, 0.04, "square", 0.025);
  },
  true,
);
const ptr = /* @__PURE__ */ new Map();
let g0 = null;
const rel = (e) => {
  const [x, y] = lp(e);
  return [x - SC.offsetLeft, y - SC.offsetTop];
};
const gst = () => {
  const ps = [...ptr.values()];
  return {
    m:
      ps.length > 1
        ? [(ps[0][0] + ps[1][0]) / 2, (ps[0][1] + ps[1][1]) / 2]
        : ps[0],
    d: ps.length > 1 ? Math.hypot(ps[0][0] - ps[1][0], ps[0][1] - ps[1][1]) : 0,
    z: zm,
    sl: SC.scrollLeft,
    st: SC.scrollTop,
  };
};
SC.addEventListener("pointerdown", (e) => {
  if (!GEO) return;
  if (!ptr.size) moved = false;
  ptr.set(e.pointerId, rel(e));
  g0 = gst();
});
addEventListener("pointermove", (e) => {
  if (!ptr.has(e.pointerId) || !g0) return;
  ptr.set(e.pointerId, rel(e));
  const ps = [...ptr.values()];
  if (ps.length > 1) {
    if (!g0.d) {
      g0 = gst();
      return;
    }
    const m = [(ps[0][0] + ps[1][0]) / 2, (ps[0][1] + ps[1][1]) / 2],
      d = Math.hypot(ps[0][0] - ps[1][0], ps[0][1] - ps[1][1]),
      z = Math.max(zmin(), Math.min(1.6, (g0.z * d) / g0.d)),
      wx = (g0.sl + g0.m[0]) / g0.z,
      wy = (g0.st + g0.m[1]) / g0.z;
    zm = z;
    applyZ();
    SC.scrollLeft = wx * zm - m[0];
    SC.scrollTop = wy * zm - m[1];
    moved = true;
  } else {
    const m = ps[0],
      dx = m[0] - g0.m[0],
      dy = m[1] - g0.m[1];
    if (Math.abs(dx) + Math.abs(dy) > 7) moved = true;
    if (moved) {
      SC.scrollLeft = g0.sl - dx;
      SC.scrollTop = g0.st - dy;
    }
  }
  placeInfo();
});
const pend = (e) => {
  if (ptr.delete(e.pointerId)) g0 = ptr.size ? gst() : null;
};
addEventListener("pointerup", pend);
addEventListener("pointercancel", pend);
SC.addEventListener(
  "wheel",
  (e) => {
    if (!GEO) return;
    e.preventDefault();
    const [x, y] = rel(e),
      z = Math.max(zmin(), Math.min(1.6, zm * Math.exp(-e.deltaY * 15e-4))),
      wx = (SC.scrollLeft + x) / zm,
      wy = (SC.scrollTop + y) / zm;
    zm = z;
    applyZ();
    SC.scrollLeft = wx * zm - x;
    SC.scrollTop = wy * zm - y;
    placeInfo();
  },
  { passive: false },
);
const updLoc = () =>
  ($("#loc").innerHTML = ic("mine") + " " + LOC[S.loc].n[RU()]);
function locM() {
  const e = tx;
  $("#md").innerHTML =
    `<h2>${e("mineSel")}</h2>` +
    LOC.map((L, i) => {
      const ok = S.rb >= L.r;
      return `<button class="btn lc${i === S.loc ? " on" : ""}" data-l="${i}"${ok ? "" : " disabled"}><b>${ic(ok ? "mine" : "lock")} ${L.n[RU()]}</b><small>${ok ? `${e("hardness")} ×${L.h} · ${e("income")} ×${L.l}` : `${e("locked")}: ${L.r} ${e("rebirths")}`}</small></button>`;
    }).join("") +
    `<button class="btn pri" data-o="x">${e("close")}</button>`;
  $("#modal").classList.add("open");
}
$("#loc").onclick = locM;
$("#start").onclick = () => {
  go("tree");
  snd(440, 0.2, "sine", 0.05);
};
$("#back").onclick = () => go(mode === "mine" ? "tree" : "menu");
$("#go").onclick = () => {
  go("mine");
  snd(300, 0.2, "sine", 0.05);
  nz(0.35, 0.08, 2200);
};
function flip() {
  S.o.rd = -(S.o.rd || 1);
  save();
  resize(true);
}
document.querySelectorAll(".rt").forEach((b) => {
  b.innerHTML = ic("rebirth");
  b.onclick = flip;
});
function setm() {
  const e = tx,
    on = (v) => (v ? e("on") : e("off"));
  $("#md").innerHTML =
    `<h2>${e("setT")}</h2><button class="btn" data-o="lang">${e("lang")}: ${S.lang === "ru" ? "Русский" : "English"}</button><button class="btn" data-o="snd">${e("sound")}: ${on(S.o.snd)}</button><button class="btn" data-o="shk">${e("shake")}: ${on(S.o.shk)}</button><button class="btn" data-o="fx">${e("fxT")}: ${S.o.fx ? e("fxF") : e("fxL")}</button><button class="btn" data-o="save">${RU() ? "Сохранение" : "Save code"}</button><button class="btn" data-o="rd">${e("side")}: ${(S.o.rd || 1) > 0 ? "↻" : "↺"}</button><button class="btn warn" data-o="rst">${rs ? e("sure") : e("reset")}</button><button class="btn pri" data-o="x">${e("close")}</button>`;
}
function enc(o) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(o))));
}
function dec(s2) {
  return JSON.parse(decodeURIComponent(escape(atob(s2.trim()))));
}
function saveM(msg) {
  save();
  const code = enc(S),
    r = RU();
  $("#md").innerHTML =
    `<h2>${r ? "Сохранение" : "Save code"}</h2><small class="mut">${r ? "Скопируй код и вставь его позже, чтобы продолжить отсюда." : "Copy this code and paste it later to continue from here."}</small><textarea id="sv" readonly rows="4" style="width:100%;font:12px monospace">${code}</textarea><button class="btn pri" data-o="cp">${r ? "Скопировать" : "Copy"}</button><textarea id="ld" rows="3" style="width:100%;font:12px monospace" placeholder="${r ? "Вставь код сюда" : "Paste code here"}"></textarea><button class="btn" data-o="ld">${r ? "Загрузить" : "Load"}</button>${msg ? `<div class="gr">${msg}</div>` : ""}<button class="btn" data-o="bk">${r ? "Назад" : "Back"}</button>`;
}
$("#sets").onclick = () => {
  rs = 0;
  setm();
  $("#modal").classList.add("open");
};
$("#modal").onclick = (e) => {
  const lb = e.target.closest("[data-l]");
  if (lb) {
    S.loc = +lb.dataset.l;
    stats();
    save();
    updLoc();
    locM();
    return;
  }
  const o = e.target.dataset && e.target.dataset.o;
  if (e.target.id === "modal" || o === "x") {
    $("#modal").classList.remove("open");
    rs = 0;
    return;
  }
  if (!o) return;
  if (o === "save") {
    saveM();
    return;
  }
  if (o === "bk") {
    setm();
    return;
  }
  if (o === "cp") {
    const v = $("#sv").value;
    (navigator.clipboard ? navigator.clipboard.writeText(v) : Promise.reject())
      .then(() => saveM(RU() ? "Скопировано" : "Copied"))
      .catch(() =>
        saveM(
          RU()
            ? "Выдели текст и скопируй вручную"
            : "Select the text and copy manually",
        ),
      );
    return;
  }
  if (o === "ld") {
    try {
      const j = dec($("#ld").value);
      if (!j || typeof j !== "object" || !j.L) throw 0;
      S = j;
      S.o = { snd: 1, shk: 1, fx: 1, rd: 1, ...S.o };
      S.vault = S.vault || 0;
      save();
      stats();
      TL = mkTiles(S.loc);
      sel = null;
      tab = 0;
      rk = 1;
      bk = 1;
      seen.clear();
      updLoc();
      resize(true);
      applyLang();
      $("#modal").classList.remove("open");
      go("menu");
    } catch (err) {
      saveM(RU() ? "Неверный код" : "Invalid code");
    }
    return;
  }
  if (o === "lang") {
    S.lang = S.lang === "ru" ? "en" : "ru";
    save();
    applyLang();
    setm();
    return;
  }
  if (o === "rst") {
    if (!rs) {
      rs = 1;
      setm();
      return;
    }
    try {
      localStorage.removeItem("glub6");
    } catch (x) {}
    location.reload();
    return;
  }
  if (o === "rd") {
    flip();
    setm();
    return;
  }
  S.o[o] = S.o[o] ? 0 : 1;
  save();
  setm();
};
$("#res").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.id === "again") {
    $("#res").classList.remove("on");
    newRun();
  } else if (b.id === "okk") $("#res").classList.remove("on");
  else go("tree");
};
const cv = $("#cv"),
  c = cv.getContext("2d");
function mkTiles(li) {
  const L = LOC[li],
    P0 = L.p,
    mc = () => {
      const e = document.createElement("canvas");
      e.width = e.height = 8;
      return e;
    };
  let z = 12345;
  const rr = () => (z = (z * 9301 + 49297) % 233280) / 233280,
    out = [];
  for (let t = 0; t < 12; t++)
    out[t] = [0, 1, 2, 3].map(() => {
      const e = mc(),
        g = e.getContext("2d"),
        px = (x, y, col) => {
          g.fillStyle = col;
          g.fillRect(x, y, 1, 1);
        },
        b = t > 5 && t < 11 ? t - 5 : t > 10 ? 0 : t,
        o = ORE[b].o;
      if (t === 11) {
        for (let y = 0; y < 8; y++)
          for (let x = 0; x < 8; x++) {
            const v = rr();
            px(x, y, v < 0.5 ? "#c43c2e" : v < 0.8 ? "#a8301f" : "#d9533f");
          }
        for (let i = 0; i < 8; i++) {
          px(i, 0, "#ff7a66");
          px(0, i, "#ff7a66");
          px(i, 7, "#6b1a10");
          px(7, i, "#6b1a10");
        }
        for (let x = 1; x < 7; x++) {
          px(x, 3, "#e8dcc0");
          px(x, 4, "#e8dcc0");
        }
        [2, 4, 6].forEach((x) => {
          px(x, 3, "#3a2a20");
          px(x - 1, 4, "#3a2a20");
        });
        px(3, 0, "#6b4a2a");
        px(4, 0, "#ffd23a");
      } else if (t > 5) {
        for (let y = 0; y < 8; y++)
          for (let x = 0; x < 8; x++) {
            const v = rr();
            px(x, y, v < 0.5 ? o[1] : v < 0.8 ? o[0] : o[2]);
          }
        for (let i = 0; i < 8; i++) {
          px(i, 0, o[2]);
          px(0, i, o[2]);
          px(i, 7, o[0]);
          px(7, i, o[0]);
        }
        for (let q = 0; q < 3; q++)
          px((1 + rr() * 5) | 0, (1 + rr() * 5) | 0, "#fff");
      } else {
        for (let y = 0; y < 8; y++)
          for (let x = 0; x < 8; x++) {
            const v = rr();
            px(x, y, v < 0.55 ? P0[1] : v < 0.8 ? P0[0] : P0[2]);
          }
        for (let i = 0; i < 8; i++) {
          px(i, 0, L.a);
          px(0, i, L.a);
          px(i, 7, L.b);
          px(7, i, L.b);
        }
        if (t) {
          const nb = t === 5 ? 3 : 4;
          for (let q = 0; q < nb; q++) {
            const bx = (1 + rr() * 4) | 0,
              by = (1 + rr() * 4) | 0;
            px(bx, by, o[2]);
            px(bx + 1, by, o[1]);
            px(bx, by + 1, o[1]);
            px(bx + 1, by + 1, o[0]);
            if (rr() < 0.6) px(bx + 2, by + (rr() < 0.5 ? 0 : 1), o[0]);
            if (ORE[b].g && rr() < 0.5) px(bx + 2, by + 2, ORE[b].g);
          }
        } else
          for (let q = 0; q < 3; q++)
            px((1 + rr() * 5) | 0, (1 + rr() * 5) | 0, P0[2]);
      }
      return e;
    });
  return out;
}
function mkMisc() {
  const mc = () => {
    const e = document.createElement("canvas");
    e.width = e.height = 8;
    return e;
  };
  let z = 777;
  const rr = () => (z = (z * 9301 + 49297) % 233280) / 233280;
  FL = [0, 1, 2, 3].map(() => {
    const e = mc(),
      g = e.getContext("2d");
    for (let y = 0; y < 8; y++)
      for (let x = 0; x < 8; x++) {
        const v = rr();
        g.fillStyle = v < 0.8 ? "#1b1722" : v < 0.92 ? "#241d2e" : "#15111b";
        g.fillRect(x, y, 1, 1);
      }
    return e;
  });
  const CK = [
    [3, 1],
    [3, 2],
    [4, 3],
    [4, 4],
    [5, 5],
    [2, 3],
    [1, 3],
    [5, 3],
    [6, 3],
    [4, 5],
    [3, 6],
    [3, 4],
    [1, 5],
    [2, 5],
    [6, 5],
    [6, 1],
    [5, 1],
    [2, 2],
  ];
  CR = [3, 7, 12, 18].map((m) => {
    const e = mc(),
      g = e.getContext("2d");
    g.fillStyle = "#14121a";
    CK.slice(0, m).forEach(([x, y]) => g.fillRect(x, y, 1, 1));
    return e;
  });
}
let lw = 0,
  lh = 0;
function resize(f) {
  const vw = innerWidth,
    vh = innerHeight,
    A = $("#app");
  if (!f && vw === lw && vh === lh) return;
  lw = vw;
  lh = vh;
  ro = vh > vw;
  dpr = Math.min(2, devicePixelRatio || 1);
  if (ro) {
    W = vh;
    H = vw;
    A.style.cssText = `width:${W}px;height:${H}px;left:${(vw - W) / 2}px;top:${(vh - H) / 2}px;transform:rotate(${(S.o.rd || 1) * 90}deg)`;
  } else {
    W = vw;
    H = vh;
    A.style.cssText = `width:${W}px;height:${H}px;left:0;top:0;transform:none`;
  }
  cv.width = W * dpr;
  cv.height = H * dpr;
  s = H / 360;
  layout();
}
function layout() {
  k = Math.max(3, Math.floor(H / 120));
  cell = 8 * k;
  const aw = W - 16,
    ah = H - 58;
  cols = Math.max(6, Math.floor(aw / cell));
  rows = Math.max(4, Math.floor(ah / cell));
  fx = Math.round((W - cols * cell) / 2);
  fy = Math.round(50 + (ah - rows * cell) / 2);
  nc = cols * rows;
  ty = new Uint8Array(nc);
  hp = new Float32Array(nc);
  mh = new Float32Array(nc);
  vr = new Uint8Array(nc);
  fl = new Float32Array(nc);
  ag = new Float32Array(nc);
  rt = new Float32Array(nc);
  fb = document.createElement("canvas");
  const q = Math.round(cell * dpr);
  fb.width = cols * q;
  fb.height = rows * q;
  const g = fb.getContext("2d");
  g.imageSmoothingEnabled = false;
  for (let r = 0; r < rows; r++)
    for (let j = 0; j < cols; j++)
      g.drawImage(FL[(r * 7 + j * 3) % 4], j * q, r * q, q, q);
  pk.length = 0;
  P.length = 0;
  holdPid = null;
  genField(false);
  if (mode === "mine") {
    rph = "ready";
    tl = T.time;
  }
}
function newCell(i, w, bn) {
  let t = 0;
  if (rnd() < T.op + (bn || 0)) {
    const ws = ORE.map((r, j) =>
        j && open(j) ? r.w * (1 + T.rare * (j - 1) * 0.5) : 0,
      ),
      sum = ws.reduce((a, b) => a + b, 0);
    if (sum > 0) {
      let q = rnd() * sum;
      for (let j = 1; j < 6; j++) {
        q -= ws[j];
        if (q <= 0) {
          t = j;
          break;
        }
      }
    }
  }
  if (t === 0 && T.tnt && tntN < 1 && rnd() < T.tnt) {
    t = 11;
    tntN++;
  }
  ty[i] = t;
  hp[i] = mh[i] = hpOf(t);
  vr[i] = (rnd() * 4) | 0;
  fl[i] = 0;
  ag[i] = w === void 0 ? 0 : w;
  if (w === void 0 && t > 0 && t < 11 && mode !== "tree") sparkle(cx(i), cy(i));
}
function genField(a) {
  tntN = 0;
  for (let i = 0; i < nc; i++)
    newCell(
      i,
      a ? -(rnd() * 0.4 + (((i / cols) | 0) / rows) * 0.5) : 1,
      a ? T.pros : 0,
    );
}
function newRun() {
  TL = mkTiles(S.loc);
  rph = "ready";
  tl = T.time;
  tb = 0;
  spc = 0;
  lastTick = 9;
  rainC = 3;
  run = { by: {}, tot: 0 };
  P.length = 0;
  pk.length = 0;
  holdPid = null;
  genField(true);
  tmUI();
}
function tmUI() {
  $("#tm i").style.width = Math.min(100, (tl / T.time) * 100) + "%";
  $("#tm b").textContent = tl.toFixed(1) + " " + tx("sec");
  $("#tm").classList.toggle("low", tl <= 3 && rph === "run");
}
const cx = (i) => fx + (i % cols) * cell + cell / 2,
  cy = (i) => fy + ((i / cols) | 0) * cell + cell / 2,
  inZ = (i) => Math.hypot(cx(i) - zx, cy(i) - zy) <= T.zr * cell + cell * 0.5;
function pick(dr) {
  for (let t = 0; t < 14; t++) {
    let i;
    if (dr) i = (rnd() * nc) | 0;
    else {
      const a = rnd() * TAU,
        d = Math.sqrt(rnd()) * T.zr * cell,
        c_ = Math.floor((zx + cos(a) * d - fx) / cell),
        r_ = Math.floor((zy + sin(a) * d - fy) / cell);
      if (c_ < 0 || r_ < 0 || c_ >= cols || r_ >= rows) continue;
      i = r_ * cols + c_;
    }
    if (ty[i] !== 255 && ag[i] >= 0) return i;
  }
  return -1;
}
function spawnOne(ex) {
  let j = -1;
  if (holdPid !== null && mode === "mine") {
    for (let q = 0; q < 30; q++) {
      const a = rnd() * TAU,
        d = Math.sqrt(rnd()) * (T.zr + 0.5) * cell,
        c_ = Math.floor((zx + cos(a) * d - fx) / cell),
        r_ = Math.floor((zy + sin(a) * d - fy) / cell);
      if (c_ < 0 || r_ < 0 || c_ >= cols || r_ >= rows) continue;
      const i = r_ * cols + c_;
      if (ty[i] === 255 && i !== ex) {
        j = i;
        break;
      }
    }
  }
  if (j < 0)
    for (let q = 0; q < 40; q++) {
      const i = (rnd() * nc) | 0;
      if (ty[i] === 255 && i !== ex) {
        j = i;
        break;
      }
    }
  if (j >= 0) newCell(j, void 0, T.lure);
}
const add = (o) => {
    if (P.length < 320) P.push(o);
  },
  addPk = (dr) =>
    pk.push({
      x: 0,
      y: 0,
      k: -1,
      ph: 0.45,
      hd: 0,
      sc: 0,
      dr,
      nw: 1,
      die: false,
    });
function burst(x, y, t, m) {
  const f = S.o.fx ? 1 : 0.4,
    b = t > 5 && t < 11 ? t - 5 : t > 10 ? 0 : t;
  for (let i = 0; i < Math.ceil(m * f); i++) {
    const pal =
      t === 11
        ? ["#c43c2e", "#ffb02e", "#6b4a2a"]
        : t && (t > 5 || rnd() < 0.6)
          ? ORE[b].o
          : LOC[S.loc].p;
    add({
      t: "c",
      x,
      y,
      vx: (rnd() - 0.5) * 200 * s,
      vy: -(60 + rnd() * 220) * s,
      gr: 760 * s,
      life: 0.6 + rnd() * 0.5,
      max: 1,
      sz: k * (1 + ((rnd() * 2) | 0)),
      col: pal[(rnd() * 3) | 0],
    });
  }
}
const txt = (x, y, t, col, z) =>
  add({
    t: "x",
    x,
    y,
    vx: 0,
    vy: -45 * s,
    life: 0.8,
    max: 0.8,
    txt: t,
    col,
    sz: z * s,
  });
function hitCell(i) {
  let d = T.dmg;
  const cr = rnd() < T.cc;
  if (cr) d *= T.cm;
  hp[i] -= d;
  fl[i] = 1;
  if (S.o.shk) shake = Math.max(shake, cr ? 3 : 1);
  const x = cx(i),
    y = cy(i);
  burst(x, y, ty[i], cr ? 6 : 3);
  if (cr && ty[i] !== 11) txt(x, y - cell * 0.6, fm(d) + "!", "#ffd24a", 15);
  snd(180 + rnd() * 80, 0.05, "square", 0.025);
  if (rnd() < 0.5) nz(0.05, 0.05, 2500);
  if (hp[i] <= 0) brk(i);
}
function conv(i) {
  const nb = [],
    c0 = i % cols,
    r0 = (i / cols) | 0;
  for (let dr = -1; dr <= 1; dr++)
    for (let dc = -1; dc <= 1; dc++) {
      const cc = c0 + dc,
        rr = r0 + dr;
      if (cc < 0 || rr < 0 || cc >= cols || rr >= rows) continue;
      const j2 = rr * cols + cc;
      if (j2 !== i && ty[j2] < 6) nb.push(j2);
    }
  if (!nb.length) return;
  const j = nb[(rnd() * nb.length) | 0],
    b = ty[i];
  ty[j] = b + 5;
  hp[j] = mh[j] = hpOf(b + 5);
  ag[j] = 0;
  fl[j] = 1;
  burst(cx(j), cy(j), b + 5, 8);
}
function rollOre() {
  const ws = ORE.map((r, j) =>
      j && open(j) ? r.w * (1 + T.rare * (j - 1) * 0.5) : 0,
    ),
    sum = ws.reduce((a, b) => a + b, 0);
  if (sum <= 0) return 0;
  let q = rnd() * sum;
  for (let j = 1; j < 6; j++) {
    q -= ws[j];
    if (q <= 0) return j;
  }
  return 1;
}
function sparkle(x, y) {
  if (mode === "tree") return;
  for (let q = 0; q < 6; q++) {
    const a = rnd() * TAU;
    add({
      t: "c",
      x,
      y,
      vx: cos(a) * 80 * s,
      vy: sin(a) * 80 * s - 30 * s,
      gr: 0,
      life: 0.4,
      max: 0.5,
      sz: k,
      col: "#fff",
    });
  }
  if (mode === "mine" && tNow - lastSp > 0.2) {
    lastSp = tNow;
    snd(1300 + rnd() * 300, 0.07, "sine", 0.02);
  }
}
function seed(i) {
  const nb = [],
    c0 = i % cols,
    r0 = (i / cols) | 0;
  for (let dr = -1; dr <= 1; dr++)
    for (let dc = -1; dc <= 1; dc++) {
      const cc = c0 + dc,
        rr = r0 + dr;
      if (cc < 0 || rr < 0 || cc >= cols || rr >= rows) continue;
      const j2 = rr * cols + cc;
      if (j2 !== i && ty[j2] === 0) nb.push(j2);
    }
  if (!nb.length) return;
  const o = rollOre();
  if (!o) return;
  const j = nb[(rnd() * nb.length) | 0];
  ty[j] = o;
  hp[j] = mh[j] = hpOf(o);
  ag[j] = 0;
  fl[j] = 1;
  sparkle(cx(j), cy(j));
}
function oreRain() {
  let left = 2 + T.rain,
    tries = 0;
  while (left > 0 && tries < 60) {
    tries++;
    let j;
    if (holdPid !== null) {
      const a = rnd() * TAU,
        d = Math.sqrt(rnd()) * T.zr * cell,
        c_ = Math.floor((zx + cos(a) * d - fx) / cell),
        r_ = Math.floor((zy + sin(a) * d - fy) / cell);
      if (c_ < 0 || r_ < 0 || c_ >= cols || r_ >= rows) continue;
      j = r_ * cols + c_;
    } else j = (rnd() * nc) | 0;
    if (ty[j] === 0 && ag[j] >= 0.25) {
      const o = rollOre();
      if (!o) return;
      ty[j] = o;
      hp[j] = mh[j] = hpOf(o);
      ag[j] = 0;
      fl[j] = 1;
      sparkle(cx(j), cy(j));
      left--;
    }
  }
}
function explode(i) {
  const R = T.tr,
    c0 = i % cols,
    r0 = (i / cols) | 0,
    x = cx(i),
    y = cy(i);
  ty[i] = 255;
  tntN = Math.max(0, tntN - 1);
  rt[i] = T.rt + rnd() * 2;
  add({ t: "b", x, y, vx: 0, vy: 0, life: 0.5, max: 0.5, r: (R + 0.6) * cell });
  flashT = 0.25;
  if (S.o.shk) shake = 16;
  boom();
  for (let q = 0; q < (S.o.fx ? 30 : 12); q++) {
    const a = rnd() * TAU,
      sp = (120 + rnd() * 320) * s;
    add({
      t: "c",
      x,
      y,
      vx: cos(a) * sp,
      vy: sin(a) * sp - 80 * s,
      gr: 500 * s,
      life: 0.5 + rnd() * 0.5,
      max: 0.9,
      sz: k * (1 + ((rnd() * 2) | 0)),
      col: ["#ff5a1f", "#ffb02e", "#ffe27a", "#3a3a3a"][(rnd() * 4) | 0],
    });
  }
  const sv = bsum;
  bsum = 0;
  for (let dr = -R; dr <= R; dr++)
    for (let dc = -R; dc <= R; dc++) {
      const cc = c0 + dc,
        rr = r0 + dr;
      if (cc < 0 || rr < 0 || cc >= cols || rr >= rows) continue;
      const j = rr * cols + cc;
      if (j === i || ty[j] === 255) continue;
      if (ty[j] === 11) explode(j);
      else brk(j, true);
    }
  const got = bsum;
  bsum = sv;
  if (mode === "mine" && got > 0)
    txt(x, y - cell * 0.6, "+$" + fm(got), "#ffe27a", 20);
}
function brk(i, q) {
  const t = ty[i];
  if (t === 11) {
    explode(i);
    return;
  }
  const b = t > 5 ? t - 5 : t,
    x = cx(i),
    y = cy(i);
  burst(x, y, t, q ? 4 : 10);
  if (mode === "mine") {
    let v = T.val[t];
    if (rnd() < T.lk) v *= 2;
    if (rph === "run" && tl <= 5) v *= T.fv;
    v = Math.max(1, Math.round(v));
    gain(v);
    const r = run.by[b] || (run.by[b] = { n: 0, m: 0 });
    r.n++;
    r.m += v;
    run.tot += v;
    if (!q)
      for (let j = 0; j < 2; j++)
        add({
          t: "i",
          x,
          y,
          x0: x,
          y0: y,
          life: 0.7 + j * 0.08,
          max: 0.7 + j * 0.08,
          col: b ? ORE[b].o[1] : LOC[S.loc].p[0],
        });
    if (q) bsum += v;
    else {
      txt(x, y - cell * 0.5, "+$" + fm(v), b ? ORE[b].o[2] : "#fff", 14);
      if (b > 0) chime(b);
    }
    if (rph === "run" && T.rv && tb < T.rcap) {
      const a = Math.min(T.rv, T.rcap - tb);
      tl += a;
      tb += a;
    }
    if (t > 0 && t < 6 && T.pure && rnd() < T.pure) conv(i);
    if (t === 0 && T.vein && rnd() < T.vein) seed(i);
    hud();
  }
  ty[i] = 255;
  rt[i] = T.rt + rnd() * 2;
  spc += T.sr;
  while (spc >= 1) {
    spc--;
    spawnOne(i);
  }
  if (!q) {
    if (S.o.shk) shake = Math.max(shake, 2.5);
    snd(110, 0.14, "triangle", 0.06);
    nz(0.1, 0.1, 1100);
  }
}
const lp = (e) =>
  !ro
    ? [e.clientX, e.clientY]
    : (S.o.rd || 1) > 0
      ? [e.clientY, innerWidth - e.clientX]
      : [innerHeight - e.clientY, e.clientX];
cv.addEventListener("pointerdown", (e) => {
  if (mode !== "mine" || rph === "done" || holdPid !== null) return;
  [zx, zy] = lp(e);
  holdPid = e.pointerId;
  try {
    cv.setPointerCapture(e.pointerId);
  } catch (_) {}
  if (rph === "ready") {
    rph = "run";
    arp([300, 400, 520], 50);
  }
});
cv.addEventListener("pointermove", (e) => {
  if (e.pointerId === holdPid) [zx, zy] = lp(e);
});
const up = (e) => {
  if (e.pointerId === holdPid) holdPid = null;
};
cv.addEventListener("pointerup", up);
cv.addEventListener("pointercancel", up);
function endRun() {
  rph = "done";
  holdPid = null;
  save();
  const e = tx,
    rows_ = Object.entries(run.by)
      .map(
        ([b, r]) =>
          `<div class="rr"><span>${oi(+b)} ×${r.n}</span><b>+$${fm(r.m)}</b></div>`,
      )
      .join("");
  popup(
    `<h2>${e("resT")}</h2>` +
      (rows_ || `<p class="mut">${e("nothing")}</p>`) +
      `<div class="rr tot"><span>${e("total")}</span><b>+$${fm(run.tot)}</b></div><div class="rb"><button class="btn pri" id="again">${e("again")}</button><button class="btn" id="totree">${e("toTree")}</button></div>`,
  );
  arp([523, 392, 330, 262], 110, "triangle", 0.07);
}
function sim(dt) {
  shake = Math.max(0, shake - dt * 30);
  flashT = Math.max(0, flashT - dt);
  for (let i = 0; i < nc; i++) {
    if (ty[i] === 255) {
      if (rt[i] > 0 && (rt[i] -= dt) <= 0) newCell(i);
    } else {
      ag[i] += dt;
      if (fl[i] > 0) fl[i] -= dt * 5;
    }
  }
  if (mode === "menu" || rph === "run") {
    spAcc = Math.min(20, spAcc + T.spr * dt);
    while (spAcc >= 1) {
      spAcc--;
      spawnOne(-1);
    }
  }
  if (mode === "menu") {
    if (pk.length < 2) addPk(true);
  } else if (rph === "run") {
    tl -= dt;
    if (tl <= 0) {
      tl = 0;
      endRun();
    }
    tmUI();
    if (tl <= 3 && tl > 0 && Math.ceil(tl) !== lastTick) {
      lastTick = Math.ceil(tl);
      snd(800, 0.08, "square", 0.04);
    }
    if (T.rain > 0) {
      rainC -= dt;
      if (rainC <= 0) {
        rainC = Math.max(1.5, 6 - 0.6 * T.rain);
        oreRain();
      }
    }
    if (holdPid !== null) {
      let a = 0;
      pk.forEach((p) => {
        if (!p.dr && !p.die) a++;
      });
      if (a < T.cnt && (spT -= dt) <= 0) {
        spT = Math.max(0.02, Math.min(0.12, 0.8 / T.cnt));
        addPk(false);
      }
    } else
      pk.forEach((p) => {
        if (!p.dr) p.die = true;
      });
    if (pk.filter((p) => p.dr && !p.die).length < T.dr) addPk(true);
  } else pk.forEach((p) => (p.die = true));
  for (let j = pk.length - 1; j >= 0; j--) {
    const p = pk[j];
    if (p.die) {
      p.sc -= dt * 8;
      if (p.sc <= 0) pk.splice(j, 1);
      continue;
    }
    p.sc = Math.min(1, p.sc + dt * 7);
    if (p.k < 0 || ty[p.k] === 255 || (!p.dr && mode === "mine" && !inZ(p.k))) {
      p.k = pick(p.dr || mode === "menu");
      p.hd = 0;
      if (p.k < 0) continue;
      p.ph = Math.min(p.ph, 0.5);
      if (p.nw) {
        p.x = cx(p.k);
        p.y = cy(p.k);
        p.nw = 0;
      }
    }
    const m = Math.min(1, dt * 16);
    p.x += (cx(p.k) - p.x) * m;
    p.y += (cy(p.k) - p.y) * m;
    p.ph += dt / T.iv;
    if (p.ph >= 0.72 && !p.hd) {
      p.hd = 1;
      hitCell(p.k);
    }
    if (p.ph >= 1) {
      p.ph -= 1;
      p.hd = 0;
    }
  }
  for (let i = P.length - 1; i >= 0; i--) {
    const p = P[i];
    if ((p.life -= dt) <= 0) {
      P.splice(i, 1);
      continue;
    }
    if (p.t === "i") {
      const u = 1 - p.life / p.max,
        e = u * u * (3 - 2 * u);
      p.x = p.x0 + (W - 90 - p.x0) * e;
      p.y = p.y0 + (22 - p.y0) * e - sin(e * Math.PI) * 30 * s;
    } else {
      if (p.gr) p.vy += p.gr * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
  }
}
function pl(x0, y0, x1, y1, col, t) {
  const m = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / k));
  c.fillStyle = col;
  for (let i = 0; i <= m; i++)
    c.fillRect(
      Math.round((x0 + ((x1 - x0) * i) / m) / k) * k,
      Math.round((y0 + ((y1 - y0) * i) / m) / k) * k,
      k * t,
      k * t,
    );
}
function drawPk(p) {
  if (p.k < 0) return;
  const ph = p.ph,
    UP = -2.3,
    HI = 0.852;
  let a;
  if (ph < 0.55) a = UP - 0.15 * sin((ph / 0.55) * Math.PI);
  else if (ph < 0.72) {
    const u = (ph - 0.55) / 0.17;
    a = UP + (HI - UP) * u * u;
  } else {
    const u = (ph - 0.72) / 0.28;
    a = HI + (UP - HI) * u * u * (3 - 2 * u);
  }
  const L = 10.6 * k * p.sc,
    x0 = p.x - 7 * k * p.sc,
    y0 = p.y - 9 * k * p.sc,
    x1 = x0 + cos(a) * L,
    y1 = y0 + sin(a) * L,
    dx = cos(a),
    dy = sin(a),
    px = -dy,
    py = dx,
    hc = p.dr ? "#7fe8ff" : "#dfe6f2",
    q = k * p.sc;
  pl(x0, y0, x1, y1, "#7a5230", 1);
  pl(
    x1 - px * 5 * q + dx * k,
    y1 - py * 5 * q + dy * k,
    x1 + px * 5 * q + dx * k,
    y1 + py * 5 * q + dy * k,
    "#4c5368",
    2,
  );
  pl(
    x1 - px * 4 * q + dx * 2 * k,
    y1 - py * 4 * q + dy * 2 * k,
    x1 + px * 4 * q + dx * 2 * k,
    y1 + py * 4 * q + dy * 2 * k,
    hc,
    1,
  );
  c.fillStyle = "#e0a070";
  c.fillRect(Math.round(x0 / k) * k, Math.round(y0 / k) * k, k * 2, k * 2);
}
function drawP() {
  P.forEach((p) => {
    c.globalAlpha = Math.min(1, p.life / (p.max * 0.35));
    if (p.t === "c") {
      c.fillStyle = p.col;
      c.fillRect(Math.round(p.x / k) * k, Math.round(p.y / k) * k, p.sz, p.sz);
    } else if (p.t === "i") {
      c.fillStyle = "#fff";
      c.fillRect(
        Math.round(p.x / k) * k - k / 2,
        Math.round(p.y / k) * k - k / 2,
        k * 3,
        k * 3,
      );
      c.fillStyle = p.col;
      c.fillRect(
        Math.round(p.x / k) * k,
        Math.round(p.y / k) * k,
        k * 2,
        k * 2,
      );
    } else if (p.t === "b") {
      const u = 1 - p.life / p.max;
      c.globalAlpha = 1 - u;
      c.strokeStyle = "#ffd27a";
      c.lineWidth = k * 2;
      c.beginPath();
      c.arc(p.x, p.y, p.r * u, 0, TAU);
      c.stroke();
      c.fillStyle = "rgba(255,170,60," + 0.35 * (1 - u) + ")";
      c.beginPath();
      c.arc(p.x, p.y, p.r * u * 0.9, 0, TAU);
      c.fill();
    } else {
      c.font = `800 ${p.sz}px monospace`;
      c.textAlign = "center";
      c.lineWidth = 3 * s;
      c.strokeStyle = "rgba(0,0,0,.8)";
      c.strokeText(p.txt, p.x, p.y);
      c.fillStyle = p.col;
      c.fillText(p.txt, p.x, p.y);
    }
  });
  c.globalAlpha = 1;
}
function draw() {
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.imageSmoothingEnabled = false;
  c.fillStyle = "#120f19";
  c.fillRect(0, 0, W, H);
  c.save();
  if (shake > 0 && S.o.shk)
    c.translate(
      Math.round((rnd() - 0.5) * shake * 2),
      Math.round((rnd() - 0.5) * shake * 2),
    );
  c.drawImage(fb, fx, fy, cols * cell, rows * cell);
  for (let i = 0; i < nc; i++) {
    if (ty[i] === 255 || ag[i] < 0) continue;
    const x = fx + (i % cols) * cell,
      y = fy + ((i / cols) | 0) * cell,
      a = ag[i],
      t_ = TL[ty[i]][vr[i]];
    if (a < 0.25) {
      const u = a / 0.25,
        e = 1 + 2.70158 * (u - 1) ** 3 + 1.70158 * (u - 1) ** 2,
        z = Math.max(2, Math.round(cell * e));
      c.drawImage(t_, x + ((cell - z) >> 1), y + ((cell - z) >> 1), z, z);
      continue;
    }
    const jx = fl[i] > 0.6 ? (rnd() < 0.5 ? -k : k) : 0;
    c.drawImage(t_, x + jx, y, cell, cell);
    const f = 1 - hp[i] / mh[i];
    if (f > 0)
      c.drawImage(CR[Math.min(3, Math.ceil(f * 4) - 1)], x + jx, y, cell, cell);
    if (ty[i] > 5 && ty[i] < 11 && sin(tNow * 3 + i * 1.7) > 0.9) {
      c.fillStyle = "#fff";
      c.fillRect(
        x + (((i * 3) % 6) + 1) * k,
        y + (((i * 5) % 6) + 1) * k,
        k,
        k,
      );
    }
    if (ty[i] === 11 && sin(tNow * 16 + i) > 0) {
      c.fillStyle = "#ffe27a";
      c.fillRect(x + 4 * k + jx, y, k, k);
    }
    if (fl[i] > 0) {
      c.globalAlpha = Math.min(0.55, fl[i] * 0.55);
      c.fillStyle = "#fff";
      c.fillRect(x + jx, y, cell, cell);
      c.globalAlpha = 1;
    }
  }
  c.strokeStyle = "#4a3626";
  c.lineWidth = 6;
  c.strokeRect(fx - 3, fy - 3, cols * cell + 6, rows * cell + 6);
  c.strokeStyle = "#8a6a48";
  c.lineWidth = 2;
  c.strokeRect(fx - 6, fy - 6, cols * cell + 12, rows * cell + 12);
  if (holdPid !== null && mode === "mine") {
    const r = T.zr * cell;
    c.fillStyle = "rgba(255,230,150,.09)";
    c.beginPath();
    c.arc(zx, zy, r, 0, TAU);
    c.fill();
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * TAU + tNow * 0.8;
      c.fillStyle = "rgba(255,230,150,.75)";
      c.fillRect(
        Math.round((zx + cos(a) * r) / k) * k,
        Math.round((zy + sin(a) * r) / k) * k,
        k,
        k,
      );
    }
  }
  pk.forEach(drawPk);
  drawP();
  if (flashT > 0) {
    c.fillStyle = "rgba(255,226,160," + Math.min(0.6, flashT * 2) + ")";
    c.fillRect(0, 0, W, H);
  }
  if (mode === "mine" && rph === "ready") {
    c.fillStyle = "rgba(0,0,0,.65)";
    c.fillRect(W / 2 - 170 * s, H / 2 - 34 * s, 340 * s, 68 * s);
    c.textAlign = "center";
    c.fillStyle = "#ffe9a8";
    c.font = `700 ${17 * s}px monospace`;
    c.fillText(tx("hint"), W / 2, H / 2 - 6 * s);
    c.font = `${12 * s}px monospace`;
    c.fillStyle = "#cfd6e8";
    c.fillText(
      LOC[S.loc].n[RU()] + " · " + T.time + " " + tx("sec"),
      W / 2,
      H / 2 + 16 * s,
    );
  }
  c.restore();
}
let lt;
function frame(ts) {
  const dt = Math.min(0.05, (ts - (lt || ts)) / 1e3);
  lt = ts;
  tNow += dt;
  const cap = T.afk * T.cap;
  S.vault = Math.min(S.vault + T.afk * dt, cap);
  if (mode !== "tree") {
    sim(dt);
    draw();
  }
  if ((hudT -= dt) <= 0) {
    hudT = 0.25;
    hud();
    wdUpd();
  }
  if ((saveT -= dt) <= 0) {
    saveT = 6;
    save();
  }
  requestAnimationFrame(frame);
}
stats();
{
  const el = Math.min((Date.now() - S.t) / 1e3, T.cap);
  if (el > 5) S.vault = Math.min(S.vault + T.afk * el * T.eff, T.afk * T.cap);
}
mkMisc();
IMG = mkTiles(0).map((v) => v[0].toDataURL());
TL = mkTiles(S.loc);
resize();
applyLang();
addEventListener("resize", () => resize());
addEventListener("orientationchange", () => setTimeout(resize, 150));
setTimeout(resize, 400);
go("menu");
requestAnimationFrame(frame);
