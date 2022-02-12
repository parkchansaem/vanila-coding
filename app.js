const loginform = document.querySelector("#login");
const logininput = document.querySelector("#login input");
const textuser = document.querySelector("#textuser");

function handlesubmit(info) {
  info.preventDefault();
  console.log(info);
  loginform.classList.add("hidden");
  const user = logininput.value;
  textuser.innerText = `hello${user}`;
  textuser.classList.remove("hidden");
}

loginform.addEventListener("submit", handlesubmit);
