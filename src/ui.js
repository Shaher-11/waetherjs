class UI {
  constructor() {
    this.location = document.getElementsById('w-location');
    this.desc = document.getElementsById('w-desc');
    this.string = document.getElementsById('w-string');
    this.details = document.getElementsById('w-details');
    this.icon = document.getElementsById('w-icon');
    this.humidity = document.getElementsById('w-humidity');
    this.feelsLike = document.getElementsById('w-feels-like');
    this.dewpoint = document.getElementsById('w-dewpoint');
    this.wind = document.getElementsById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttribute('src', weather.icon_url);
    this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelsLike_string}`;
    this.dewpoint.textContent = `Dewpoint: ${weather.dewpoint_string}`;
    this.wind.textContent = `Wind: ${weather.wind_string}`;
  }
}