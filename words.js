const words = [
  {
    id: 1,
    word: "yuz",
    senonim: "aft",
  },
  {
    id: 2,
    word: "kiyma",
    senonim: "qayiq",
  },
  {
    id: 3,
    word: "va'da",
    senonim: "lavz",
  },
  {
    id: 4,
    word: "baland",
    senonim: "uzun",
  },
  {
    id: 5,
    word: "gap",
    senonim: "jumla",
  },
  {
    id: 6,
    word: "jo'xori",
    senonim: "makka",
  },
  {
    id: 7,
    word: "qo'y",
    senonim: "tegma",
  },
  {
    id: 8,
    word: "it",
    senonim: "kuchuk",
  },
  {
    id: 9,
    word: "eshshak",
    senonim: "xutik",
  },
  {
    id: 10,
    word: "sevgi",
    senonim: "muhabbat",
  },
  {
    id: 11,
    word: "qasam",
    senonim: "ont",
  },
  {
    id: 12,
    word: "pichoq",
    senonim: "tig'",
  },
  {
    id: 13,
    word: "uy",
    senonim: "turar joy",
  },
  {
    id: 14,
    word: "tong",
    senonim: "sahar",
  },
];
const uncorrectWords = ["kitob", "lola", "gitara", "uy", "non", "osmon"];

let a =
  "Men Kitob Siz  U Bilim Ular  Koʻylak Dasturxon Piyola Pichoq Non Choy Daftar  Ilm Aql Kuch Ishonch Nafrat  Gʻazab Qaygʻu Alam Gul Yurak Sevgi Tabiat Goʻzallik Ruchka Avtobus Dars Baxt Uy Shirinlik Inson Asal Stol Iztirob Musiqa Quvonch Hiyonat Umid Oʻchirgʻich Akkaunt Chizgʻich Rang qalamlar Qora qalam Uchburchak Jadval Roʻyhat Umr Vaqt  Yomon  Yaxshi  Duo  Chiroyli Hayol Koʻzoynak Juftlik Paypoq  Naushnik Oq libos Kamzil Kastyum Isitgich Muzlatgich Oynayi jahon Sahna Qoʻshiqchi Kinoteatr Vatan Shahar  Viloyat Poytaxt Markaz Doʻkon Ip Oyna Igna Uzuk Qaychi Kirmashinasi Avtomobil Masofa Uzoq Yaqin Berahm Yolgʻizlik";
let b = a.split(" ")
let newArr= []
for(let i =0; i <b.length; i++){
  if(b[i]){
    newArr.push(b[i])
  }
}
console.log(newArr);


