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
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  savevalue();
}

function paintTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.style.fontSize = "20px";
  span.style.fontWeight = "500";
  const button = document.createElement("button");
  button.innerText = "x";
  button.style.borderRadius = "3px";
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deletetodo);
  span.innerText = todo.text;
  li.id = "todolistWord";
  console.log(li);
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
