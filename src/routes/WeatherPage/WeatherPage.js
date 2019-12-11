import React from 'react';

import './WeatherPage.css';

class WeatherPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            temp: '',
            maxTemp: '',
            minTemp: '',
            main: '',
            city: 'Riga',
            cityToShow: '',
            countryToShow: '',
            country: 'LV',
            showWeather: false,
            showError: false,
        };
    }

    onChange = (e) => {
        e.preventDefault();
        if (e.target.name === 'city') {
            this.setState({
                city: e.target.value,
            });
        }
        if (e.target.name === 'country') {
            this.setState({
                country: e.target.value,
            });
        }
    };
    getWeather = (e) => {
        e.preventDefault();
        console.log('Getting weather ...');
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${process.env.REACT_APP_WEATHER_APPID}`)
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                //console.log(result.weather[0].main);
                if (!this.state.showWeather) {
                    this.setState({
                        showWeather: !this.state.showWeather,
                    });
                }
                this.setState({
                    minTemp: result.main.temp_min,
                    maxTemp: result.main.temp_max,
                    temp: result.main.temp,
                    main: result.weather[0].description,
                    cityToShow: this.state.city,
                    countryToShow: this.state.country,
                    showError: false,
                });
            })
            .catch(err => {
                console.log('Error = ', err);
                this.setState({
                    showWeather: false,
                    showError: true,
                });
            });
    };

    render() {
        const {city, country} = this.state;
        return (
            <div className="weather-block__center">
                <input type="text"
                       className="weather__input-text"
                       name="city"
                       value={city}
                       onChange={this.onChange}/>
                <input type="text"
                       className="weather__input-text"
                       name="country"
                       value={country}
                       onChange={this.onChange}/>
                <button className="button-weather__orange"
                        onClick={this.getWeather}>Get Weather
                </button>
                <div> {this.state.showWeather && <React.Fragment>
                    <div>
                        <h2 className="weather__forecast_title">
                            {this.state.cityToShow}<span>, </span>
                            {this.state.countryToShow}
                        </h2>
                    </div>
                    <div>
                        <h3><p>Temperature</p>
                            <span className="weather__forecast_number">{this.state.temp}</span>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <p>Min. temp</p>
                            <span className="weather__forecast_number">{this.state.minTemp}</span>
                        </h3>
                        <h3>
                            <p>Max. temp</p>
                            <span className="weather__forecast_number">{this.state.maxTemp}</span>
                        </h3>
                    </div>
                    <div><h3>
                        {this.state.main}</h3>
                    </div>
                </React.Fragment>}
                    {this.state.showError && <div className="weather-error">Incorrect City or Country</div>}
                </div>

            </div>
        );
    }

}

export default WeatherPage;
