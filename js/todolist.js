const todoform = document.querySelector("#todo-form");
const todolist = document.querySelector("#todo-list");
const todoinput = document.querySelector("#todo-form input");
const valueform = document.querySelector("#search-date");
const valueinput = document.querySelector("#search-date input");
let todos = [];

const data = new Date();
function getTodayDate() {
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const date = String(data.getDate()).padStart(2, "0");
  const getdate = month + "-" + date;
  console.log(getdate);
  return getdate;
}
valueinput.value = getTodayDate();

function savevalue() {
  localStorage.setItem(valueinput.value, JSON.stringify(todos));
}

function deletetodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.classList.add("deleteA");
  setTimeout(() => {
    li.remove();
  }, "1000");
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  savevalue();
}

function clearclick(span, button) {
  if (button.classList[1] === "hidden") {
    span.style.textDecoration = "line-through";
    button.classList.remove("hidden");
  } else {
    button.classList.add("hidden");
    span.style.textDecoration = "none";
  }
}
function liclick(event) {
  if (event.clear === "True") {
    delete event.clear;
    console.log(event);
  } else {
    event.clear = "True";
  }
  savevalue();
}

function paintTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  span.className = "todo-text";
  button.className = "todo-delete-button";
  li.appendChild(span);
  li.appendChild(button);
  button.classList.add("hidden");
  li.className = "todolistWord";
  li.addEventListener("click", () => liclick(todo));
  li.addEventListener("click", () => clearclick(span, button));
  button.addEventListener("click", deletetodo);
  if (todo.clear === "True") {
    span.style.textDecoration = "line-through";
    button.classList.remove("hidden");
  }
  span.innerText = todo.text;
  todolist.appendChild(li);
}

function handletodosubmit(info) {
  info.preventDefault();
  const todo = todoinput.value;
  todoinput.value = "";
  const todoobj = { text: todo, id: Date.now() };
  todos.push(todoobj);
  paintTodo(todoobj);
  savevalue();
}
function handleValuesubmit(info) {
  info.preventDefault();
  todos = [];
  const dateValue = valueinput.value;
  const inputvalue = localStorage.getItem(dateValue);
  const parseValue = JSON.parse(inputvalue);
  while (todolist.hasChildNodes()) {
    todolist.removeChild(todolist.firstChild);
  }
  parseValue.forEach(paintTodo);
  todos = parseValue;
}

valueform.addEventListener("submit", handleValuesubmit);
todoform.addEventListener("submit", handletodosubmit);
const savedvalue = localStorage.getItem(valueinput.value);

if (savedvalue !== null) {
  const parseValue = JSON.parse(savedvalue);
  parseValue.forEach(paintTodo);
  todos = parseValue;
}
