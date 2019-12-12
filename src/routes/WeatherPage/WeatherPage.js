import React from 'react';

import Button from '../../components/Button';

import './WeatherPage.scss';

export default class WeatherPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.getWeather = this.getWeather.bind(this);

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

    render() {
        const {city, country} = this.state;
        return (
            <div className='WeatherPage'>
                <input
                    type='text'
                    className='WeatherPage__input'
                    name='city'
                    value={city}
                    onChange={this.onChange}
                />
                <input
                    type='text'
                    className='WeatherPage__input'
                    name='country'
                    value={country}
                    onChange={this.onChange}
                />
                <Button
                    className='WeatherPage__button-weather'
                    onClick={this.getWeather}
                    label='Get Weather'
                />
                <div>
                    {this.state.showWeather && (
                        <>
                            <div>
                                <h2 className='WeatherPage__forecast-title'>
                                    {this.state.cityToShow}<span>, </span>
                                    {this.state.countryToShow}
                                </h2>
                            </div>
                            <div>
                                <h3><p>Temperature</p>
                                    <span className='WeatherPage__forecast-number'>{this.state.temp}</span>
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    <p>Min. temp</p>
                                    <span className='WeatherPage__forecast-number'>{this.state.minTemp}</span>
                                </h3>
                                <h3>
                                    <p>Max. temp</p>
                                    <span className='WeatherPage__forecast-number'>{this.state.maxTemp}</span>
                                </h3>
                            </div>
                            <div><h3>
                                {this.state.main}</h3>
                            </div>
                        </>
                    )}
                    {this.state.showError && <div className='WeatherPage__error'>Incorrect City or Country</div>}
                </div>
            </div>
        );
    }

    onChange(e) {
        if (e.target.name === 'city') {
            this.setState({city: e.target.value});
        }

        if (e.target.name === 'country') {
            this.setState({country: e.target.value});
        }
    };

    getWeather(e) {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${process.env.REACT_APP_WEATHER_APPID}`)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    minTemp: result.main.temp_min,
                    maxTemp: result.main.temp_max,
                    temp: result.main.temp,
                    main: result.weather[0].description,
                    cityToShow: this.state.city,
                    countryToShow: this.state.country,
                    showError: false,
                    showWeather: true,
                });
            })
            .catch(error => {
                console.log('Error = ', error);
                this.setState({
                    showWeather: false,
                    showError: true,
                });
            });
    };

}
