const cristmasdisplay = document.querySelector("#Dday");
const cristmas = new Date(2022, 11, 25, 00, 00).getTime();
function Dday() {
  const nowtime = new Date().getTime();

  const time = cristmas - nowtime;
  const day = Math.floor(time / (1000 * 60 * 60 * 24));
  const hour = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minut = Math.floor((time / (1000 * 60)) % 60);
  const second = Math.floor((time / 1000) % 60);
  cristmasdisplay.innerText = `${day}D ${hour}h ${minut}m ${second}s`;
}
setInterval(Dday, 1000);
