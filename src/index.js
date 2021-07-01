const search = document.querySelector('.search');
const input = document.querySelector('.input');
const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const img = document.querySelector('.img');
const infoText = document.querySelector('.info-text');

const toCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

const toFahr = (kelvin) => ((kelvin - 273.15) * (9 / 5) + 32).toFixed(1);

const toKmPerHour = (speed) => (speed * 3.6).toFixed(1);

search.addEventListener('click', () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e933e63cbe1c79cbe7e1844bf80fe3f0`)
    .then((res) => res.json())
    .then((data) => {
      cityName.innerHTML = `<img src="https://www.countryflags.io/${data.sys.country}/flat/64.png"> ${data.name}, ${data.sys.country}`;
      temp.innerHTML = `<h1 class='cels'>${toCelsius(data.main.temp)} &#8451</h1>
        <h1 class='fahr'>${toFahr(data.main.temp)} F</h1>
        <button class='fahrBtn btn btn-secondary'>To  Fahrenheit</button>
        <p class='lead mt-3 cels'>MIN: ${toCelsius(data.main.temp_min)} &#8451; | MAX: ${toCelsius(data.main.temp_max)} &#8451;</p>
            <p class='lead mt-3 fahr'>MIN: ${toFahr(data.main.temp_min)} F | MAX: ${toFahr(data.main.temp_max)} F</p>
            <p class='lead '>Humidity: ${data.main.humidity} %</p>
            <p class='lead '>Wind speed: ${toKmPerHour(data.wind.speed)} km/h</p>   
            `;
      const fahrBtn = document.querySelector('.fahrBtn');
      const fahr = document.querySelectorAll('.fahr');

      const cels = document.querySelectorAll('.cels');

      const arr = Array.from(fahr);

      fahrBtn.addEventListener('click', () => {
        if (arr.every((f) => f.style.display === 'none') || arr.every((f) => f.style.display === '')) {
          fahrBtn.textContent = 'To Celsius';
          fahr.forEach((f) => {
            f.style.display = 'block';
          });
          cels.forEach((f) => {
            f.style.display = 'none';
          });
        } else {
          fahrBtn.textContent = 'To Fahrenheit';
          cels.forEach((f) => {
            f.style.display = 'block';
          });
          fahr.forEach((f) => {
            f.style.display = 'none';
          });
        }
      });

      img.style.display = 'flex';
      if (data.main.temp > 300) {
        img.src = 'images/hot.webp';
        infoText.innerText = 'It is hot outside, go swimming!';
      } else if (data.main.temp > 290) {
        img.src = 'images/walk.jpeg';
        infoText.innerText = 'It is nice outside, Take a walk!';
      } else {
        img.src = 'images/cold.jpg';
        infoText.innerText = 'It is cold outside, Say Home';
      }
    })

    .catch(() => {
      temp.innerText = 'Oops City not found! Please check if you typed it correctly.';
    });
  input.value = '';
  temp.innerHTML = '';
  img.innerHTML = '';
  cityName.innerHTML = '';
  infoText.innerText = '';
  img.style.display = 'none';
});
