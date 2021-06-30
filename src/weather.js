/* eslint-disable import/no-cycle, import/no-cycle, import/prefer-default-export */
import { insertData, changeAppearance } from './ui';

const fetchWeatherData = (location = 'Cairo', units = 'metric') => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=c0200200bfb501d04806a813e7fcf708`;

  async function getData() {
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    const symbol = units === 'metric' ? ' °C' : ' °F';
    const data = {
      temp: Math.round(weatherData.main.temp) + symbol,
      location,
    };
    insertData(data);
    changeAppearance(weatherData.main.temp, units);
  }
  getData();
};

fetchWeatherData();

export { fetchWeatherData };
/* eslint-enable import/no-cycle, import/no-cycle, import/prefer-default-export */
