import _ from 'lodash';


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
