const todoform = document.querySelector("#todo-form");
const todolist = document.querySelector("#todo-list");
const todoinput = document.querySelector("#todo-form input");

function deletetodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "x";
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deletetodo);
  span.innerText = todo;
  console.log(li);
  todoform.appendChild(li);
}

function handletodosubmit(info) {
  info.preventDefault();
  const todo = todoinput.value;
  todoinput.value = "";
  paintTodo(todo);
}

todoform.addEventListener("submit", handletodosubmit);
