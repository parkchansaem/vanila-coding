const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const bgButton = document.querySelector("#colorButton");
function firstNum() {
  return colors[Math.floor(Math.random() * colors.length)];
}
function bgclick() {
  const copy = colors;
  const first = firstNum();
  const secondcopy = copy.filter((second) => first !== second);
  const body = document.querySelector("body");
  const second = secondcopy[Math.floor(Math.random() * secondcopy.length)];
  console.log(first);
  console.log(second);
  console.log(copy);
  body.style.backgroundImage = `linear-gradient(to right, ${first},${second})`;
}

bgButton.addEventListener("click", bgclick);
