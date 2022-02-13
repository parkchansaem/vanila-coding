const imgs = ["0.jpg", "1.jpg", "2.jpg"];

const choseimg = imgs[Math.floor(Math.random() * imgs.length)];

console.log(Math.floor(Math.random() * imgs.length));
console.log(choseimg);
const bgimg = document.createElement("img");
bgimg.src = `img/${choseimg}`;
bgimg.id = "bgimg";
console.log(bgimg);
document.body.appendChild(bgimg);
