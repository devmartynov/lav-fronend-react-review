import React, { Component } from 'react';
import './Weather.css';

const initiateState = {
    temp: '',
    maxTemp: '',
    minTemp: '',
    main: '',
    city: 'Riga',
    cityToShow: '',
    countryToShow:'',
    country: 'LV',
    showWeather: false,
    showError: false
}

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = initiateState;
    }

    onChange = (e) => {
        e.preventDefault();
        if (e.target.name === "city") {
            this.setState({
                city: e.target.value
            })
        }
        if (e.target.name === "country") {
            this.setState({
                country: e.target.value
            })
        }
    }
    getWeather = (e) => {
        e.preventDefault();
        console.log('Getting weather ...');
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${process.env.REACT_APP_WEATHER_APPID}`)
            .then((res) => { return res.json() })
            .then((result) => {
                //console.log(result.weather[0].main);
                if (!this.state.showWeather) {
                    this.setState({
                        showWeather: !this.state.showWeather
                    })
                }
                this.setState({
                    minTemp: result.main.temp_min,
                    maxTemp: result.main.temp_max,
                    temp: result.main.temp,
                    main: result.weather[0].description,
                    cityToShow: this.state.city,
                    countryToShow: this.state.country,
                    showError: false
                })
            })
            .catch(err => {
                console.log('Error = ', err);
                this.setState({
                    showWeather: false,
                    showError: true
                })
            })
    }

    render() {
        const { city, country } = this.state;
        return (
            <div className="weather-block__center">
                <input type="text"
                    name="city"
                    value={city}
                    onChange={this.onChange} />
                <input type="text"
                    name="country"
                    value={country}
                    onChange={this.onChange} />
                <button className="button-weather__orange"
                    onClick={this.getWeather}>Get Weather</button>
                <div> {this.state.showWeather && <React.Fragment>
                    <div>
                        <h2>
                            {this.state.cityToShow}<span>, </span>
                            {this.state.countryToShow}
                        </h2>
                    </div>
                    <div>
                        <h3><p>Temperature</p> 
                            {this.state.temp}
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <p>Min. temp</p>
                            {this.state.minTemp}
                        </h3>
                        <h3>
                           <p>Max. temp</p>
                          {this.state.maxTemp}
                        </h3>
                    </div>
                    <div> <h3>
                        {this.state.main}</h3>
                    </div> </React.Fragment>}
                    {this.state.showError && <div className="weather-error">Incorrect City or Country</div>}
                </div>

            </div>
        )
    }

}
export default Weather;
