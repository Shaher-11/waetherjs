const search = document.querySelector('.search');
const input = document.querySelector('.input');
const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const img = document.querySelector('.img');
const infoText = document.querySelector('.info-text');

const toCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

const toFahr = (kelvin) => ((kelvin - 273.15) * 9 / 5 + 32).toFixed(1);

const toKmPerHour = (speed) => (speed * 3.6).toFixed(1);

