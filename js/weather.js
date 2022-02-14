const API_KEY = "8a4d9b4faf273b1024f10e9c8d2086ec";
function onGeook(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const cityweather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      cityweather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("can't find you. no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeook, onGeoError);
