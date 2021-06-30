class Weather {
  constructor(city, state) {
    this.apiKey = '768f6969abc4420f8f6969abc4f20f8b';
    this.city = city;
    this.state = state;
  }

  // fetch weather
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/g/${this.state}/${this.city}.json`);
    const responseData = await response.json();
    return responseData.current_observation;
  }

  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}