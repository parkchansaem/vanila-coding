const imgs = ["a.jpeg", "b.jpg", "c.jpg", "d.jpg", "e.jpeg"];

const choseimg = imgs[Math.floor(Math.random() * imgs.length)];

console.log(Math.floor(Math.random() * imgs.length));
console.log(choseimg);
const bgimg = document.createElement("img");
bgimg.src = `img/${choseimg}`;
bgimg.id = "bgimg";
console.log(bgimg);
document.body.appendChild(bgimg);
