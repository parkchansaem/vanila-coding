const maxNumform = document.querySelector("#maxNumber");
const maxNuminput = document.querySelector("#maxNumber input");
const chooseNumform = document.querySelector("#guessNum");
const chooseNuminput = document.querySelector("#guessNum input");
const Proceeding = document.querySelector("#Proceeding");
const result = document.querySelector("#result");
let maxValue = 0;
function maxNumchange(info) {
  info.preventDefault();
  maxValue = maxNuminput.value;
  console.log(maxValue);
  if (maxValue < 0) {
    alert("check number");
    window.location.reload();
  }
}
function randomNum(guessNum) {
  const random = Math.round(Math.random() * maxValue);
  console.log(Math.round(Math.random() * maxValue));
  Proceeding.innerText = `You chose:${guessNum} , the machine chose:${random} .`;
  if (guessNum === random) {
    result.innerText = "You Win";
  } else {
    result.innerText = "You lost";
  }
}
function chooseNum(info) {
  info.preventDefault();
  const guessnumber = Number(chooseNuminput.value);
  if (guessnumber > maxNuminput.value) {
    alert("guess number Big!!!");
    chooseNuminput.value = "";
  } else {
    Proceeding.classList.remove("hidden");
    result.classList.remove("hidden");
    randomNum(guessnumber);
  }
}
maxNumform.addEventListener("input", maxNumchange);
chooseNumform.addEventListener("submit", chooseNum);
