import _ from 'lodash';
import Weather from './weather';
import UI from './ui';

// Init weather object
const weather = new Weather('Boston', 'MA');
const ui = new UI();

function getWeather() {
  weather.getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation('Miami', 'FL');

  // get and display weather
  getWeather();

  // close modal
  $('#locModal').modal('hide');
});
