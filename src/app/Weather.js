export class Weather {

    constructor(city, countryCode) {
        this.apiKey = 'f3b0e4e51724743a36e2746ebeccfedc';
        this.city = city;
        this.countryCode = countryCode;

    }
    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URI);
const data = response.json()
        return data;
    }

    changeLocation(city,countryCode){
        this.city=city;
        this.countryCode=countryCode;
    }
}