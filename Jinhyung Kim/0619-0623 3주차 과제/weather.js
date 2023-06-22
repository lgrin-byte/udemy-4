const API_KEY = '8e8138d772da1c83dec8277c1bea693a';

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const weatherContainer = document.querySelector('#weather');
      const city = data.name;
      const weather = data.weather[0].main;

      weatherContainer.innerHTML = `
        <span>${city} / ${weather}</span>
      `;
    });
}

function geoFail() {
  alert('위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);