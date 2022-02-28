const clock = document.querySelector("h2#clock");

function timeclock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}`;
  console.log(date.getSeconds());
}
timeclock();
setInterval(timeclock, 1000);
