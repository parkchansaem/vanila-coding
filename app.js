const h1 = document.querySelector("#title h1");
console.dir(h1);

const superEventHandler = {
  click: function clickEvent() {
    h1.style.color = "blue";
  },
  enter: function mouseEnter() {
    h1.innerText = "the mouse is here!";
    h1.style.color = "red";
  },
  enter: function mouseEnter() {
    h1.innerText = "the mouse is here!";
    h1.style.color = "red";
  },
  leave: function mouseLeave() {
    h1.innerText = "the mouse is gone";
    h1.style.color = "skyblue";
  },
  resize: function handleResize() {
    h1.innerText = "you just resized";
    h1.style.color = "yellow";
  },
  rightclick: function windowContext() {
    h1.innerText = "that was a right click";
    h1.style.color = "green";
  },
};

h1.addEventListener("click", superEventHandler.click);
h1.addEventListener("mouseenter", superEventHandler.enter);
h1.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightclick);
