// var w = Math.round(.5*document.getElementById("chart1").clientWidth);
var w = Math.min(
  Math.round(document.getElementById("chart1").clientWidth),
  600
);
h = 700; //Math.round(.6*document.getElementById("chart1").clientWidth);
mgfill = [
  "#824029",
  "#ADC9C0",
  "#2F8484",
  "#43696E",
  "#B2869E",
  "#58575B",
  "#B03420",
  "#E59241",
  "#9BD3C4",
  "#3353BC",
  "#201F6D",
  "#1E597C",
  "#639EC6",
  "#D86DCF",
  "#E4E5CF",
  "#B7B7B7",
  "#2A4512",
  "#3D150D",
  "#7C9124",
  "#604F6D",
  "#C9DB45",
  "#E5D9BA"
];

wp = Math.round(0.2 * document.getElementById("chart1").clientWidth);

var elecfill = [
  "#0000ff",
  "#5934df",
  "#7250c0",
  "#7d69a0",
  "#808080",
  "#aa7264",
  "#ca6048",
  "#e6462a",
  "#ff0000"
];

elecfill[0] = "#fca336";
elecfill[4] = "#909090";
elecfill[8] = "#857ab8";

var simp_fill = ["#1E1E26", "#909090", "#9E2825"];

//var simp_fill_parts = ['#4a4a5e','#909090','#9e4b49'];
var simp_fill_parts = simp_fill;

var simp_char = ["\u2663", "", "\u2665"];

opacity_red = 0.4;
opacity_blk = 0.15;

var idno2 = 0;
var width = w;
var height = h;
var num_red = 0;
var red_this = 0;

var lx = -1;
var ly = -1;

//var simp_fill = ['#244999','#BBAA90','#D22532'];

// calculate number of rows and columns
var square5sRow = 5;
var square5sColumn = 5;
var square5 = 35;

var clsq = false;

var plan_strings = fetch("./src-meta5/data/plan_strings.json").then(d =>
  d.json()
);

var dist_strings = fetch("./src-meta5/data/dist_strings.json").then(d =>
  d.json()
);

var dist_wins = fetch("./src-meta5/data/dist_wins.json").then(d => d.json());

var plan_wins = fetch("./src-meta5/data/plan_wins.json").then(d => d.json());

var dist2html = fetch("./src-meta5/data/dist2html.json").then(d => d.json());

var partial_plan_tree = fetch("./src-meta5/data/partial_plan_tree.json").then(
  d => d.json()
);

var part_plan2html = fetch("./src-meta5/data/part_plan2html.json").then(d =>
  d.json()
);

var dist_lookup = fetch("./src-meta5/data/dist_lookup.json").then(d =>
  d.json()
);

var elec_dist = fetch("./src-meta5/data/elec_dist.json").then(d => d.json());

for (var key in plan_wins) {
  plan_wins[key] = JSON.parse(
    "[" +
      plan_wins[key]
        .split("(")
        .join("")
        .split(")")
        .join("") +
      "]"
  );
}

var r_win_i = [0, 0, 0, 0, 0, 0];
var b_win_i = [0, 0, 0, 0, 0, 0];
var n_win_i = [0, 0, 0, 0, 0, 0];
var rwin = 0;
var bwin = 0;

var cur_plan_str = "1222311223413334155544455";

var hoff = 130;
var voff = 15;

var plan = [];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

party_init = [
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1
];
party_init = shuffle(party_init);
