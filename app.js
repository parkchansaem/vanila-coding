const calaulration = {
  add: function add(a, b) {
    console.log(a + b);
  },
  minus: function minus(a, b) {
    console.log(a - b);
  },
  mul: function mul(a, b) {
    console.log(a * b);
  },
  div: function div(a, b) {
    console.log(a / b);
  },
};

const a = 10;
const b = 5;
calaulration.add(a, b);
calaulration.minus(a, b);
calaulration.mul(a, b);
calaulration.div(a, b);

const age = prompt("write your age");

function drinkage() {
  if (age < 18) {
    return "you can`t drink";
  } else {
    return "you can drink";
  }
}

const title = document.getElementById("title");

title.innerText = drinkage(age);
console.log(title);
