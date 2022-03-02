const todoform = document.querySelector("#todo-form");
const todolist = document.querySelector("#todo-list");
const todoinput = document.querySelector("#todo-form input");

let todos = [];

function savevalue() {
  localStorage.setItem("todos", JSON.stringify(todos));
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

function clearclick(event) {
  const li = event.target;
  const button = li.children[1];
  const span = li.children[0];
  span.style.textDecoration = "line-through";
  button.classList.remove("hidden");
}
function liclick(event) {
  const li = event.target.parentElement;
  li.children[1].classList.remove("hidden");
  li.children[0].style.textDecoration = "line-through";
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
  span.addEventListener("click", liclick);
  li.addEventListener("click", clearclick);
  button.addEventListener("click", deletetodo);
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

todoform.addEventListener("submit", handletodosubmit);
const savedvalue = localStorage.getItem("todos");
if (savedvalue !== null) {
  const parseValue = JSON.parse(savedvalue);
  parseValue.forEach(paintTodo);
  todos = parseValue;
}
