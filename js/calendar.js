const calendar = document.querySelector("#calendar");
const month = document.querySelector("div#month");
const day = document.querySelector("div#day");
const date = document.querySelector("div#date");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function calenderNow() {
  const now = new Date();
  const dataMonth = monthNames[now.getMonth()].slice(0, 3);
  month.innerText = `${dataMonth}`;
  const dateDay = WEEKDAY[now.getDay()];
  day.innerText = `${dateDay}`;
  date.innerText = `${now.getDate()}`;
}
calenderNow();
setInterval(calenderNow, 1000);
