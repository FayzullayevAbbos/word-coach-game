// wordcoach.js
const randomWord = document.querySelector(".ran-word");
const aVariant = document.querySelector(".a-variant");
const bVariant = document.querySelector(".b-variant");
const container = document.querySelector(".container");
const btnEL = document.querySelector("button");
const modal = document.querySelector(".modal-cont");
const modalText = document.querySelector(".modal-text");
const back = document.querySelector(".back")
let ans = 0;
let unAns = 0;
function rest() {
  btnEL.style.display = "inline-block";
  container.style.display = "none";
}
function moda() {
  modal.style.display = "flex";
  modalText.textContent = `${ans} ta topdingiz`;
}
btnEL.addEventListener("click", (event) => {
  btnEL.style.display = "none";
  container.style.display = "flex";
  ranWord();
});
aVariant.addEventListener("click", (event) => {
  aVariant.style.backgroundColor = "green";
  setTimeout(() => {
    ranWord();
    aVariant.style.backgroundColor = "#5804ff";
  }, 300);
  if (ans + unAns != 5) {
    ans += 1;
  } else {
    moda()
  }
});
bVariant.addEventListener("click", (event) => {
  bVariant.style.backgroundColor = "red";
  setTimeout(() => {
    ranWord();
    bVariant.style.backgroundColor = "#5804ff";
  }, 300);
  if (ans + unAns != 5) {
    unAns += 1;
  } else if (ans + unAns == 5) {
    moda()
  }
});
back.addEventListener("click" , (e) => {
    rest()
    modal.style.display = "none";
    ans = 0
    unAns = 0
})

function ranWord() {
  const newWords = words.map((el) => {
    if (el.id === Math.trunc(Math.random() * 13) + 1) {
      randomWord.textContent = `Random Word : ${el.word}`;
      aVariant.textContent = el.senonim;
      bVariant.textContent = newArr[Math.trunc(Math.random() * 90 + 1)];
    }
  });
}
