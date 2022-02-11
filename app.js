const superEventHandler = {
  resize: function () {
    if (window.innerWidth < 600) {
      document.body.style.background = "red";
    } else if (window.innerWidth < 800) {
      document.body.style.background = "yellow";
    } else if (window.innerWidth < 1000) {
      document.body.style.background = "green";
    } else {
      document.body.style.background = "blue";
    }
  },
};

window.addEventListener("resize", superEventHandler.resize);
