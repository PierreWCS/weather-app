import React from 'react';

const WeatherRender = ({location}) => {

    let userWeather = location.userCity;
    console.log(userWeather);
    return (
        <div>
            {
                userWeather ?
                    <h1>{userWeather}</h1>
                    : null
            }
        </div>
    )
};

export default WeatherRender;