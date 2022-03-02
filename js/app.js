const loginform = document.querySelector("#login");
const overlay = document.querySelector(".overlay");
const logininput = document.querySelector("#login input");
const textuser = document.querySelector("#textuser");

function handlesubmit(info) {
  info.preventDefault();
  loginform.classList.add("hidden");
  overlay.classList.add("hidden");
  const user = logininput.value;
  localStorage.setItem("username", user);
  userdisplay();
}
function userdisplay() {
  const userinfo = localStorage.getItem("username");
  textuser.innerText = `Hello ${userinfo}`;
  textuser.classList.remove("hidden");
}
const saveuserinfo = localStorage.getItem("username");

if (saveuserinfo === null) {
  overlay.classList.remove("hidden");
  loginform.classList.remove("hidden");
  loginform.addEventListener("submit", handlesubmit);
} else {
  userdisplay();
}
