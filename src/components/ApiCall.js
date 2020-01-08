import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavigationBar from "./NavigationBar";

const ApiCall = ({location}) => {
    const [weatherData, setWeatherData] = useState(null);
    let userCity = location.userCity;
    console.log(userCity);
    let tokenApi = "6562e0196d25a3f936163a650363e095";
    let apiRequest = `https://api.openweathermap.org/data/2.5/weather?q=${userCity},fr&appid=${tokenApi}`;


    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(apiRequest)
            .then(result => result.data)
            .then(data => {
                console.log(data);
                let weather = data;
                setWeatherData(weather);
            })
    };

    return (
        <div>
            <NavigationBar/>
            {
                weatherData ?
                    <div>
                        <h1>Weather in {weatherData.name}</h1>
                        <p>Weather:</p>
                        {weatherData.weather.map((element) => {
                            return (
                                <p>{element.description}</p>
                            )
                        })}
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind speed: {weatherData.wind.speed}km/h</p>
                        <p>Feels: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
                        <p>Min: {Math.round(weatherData.main.temp_min - 273.15)}°C</p>
                        <p>Max: {Math.round(weatherData.main.temp_max - 273.15)}°C</p>
                    </div>
                    : null
            }
        </div>
    )
};

export default ApiCall;