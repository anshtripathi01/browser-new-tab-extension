import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({
    temp: "",
    icon: "",
    location: ""
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {


          setWeather({

            temp: data.main.temp,
            icon: data.weather[0].icon,
            location: data.name
          })
        })
        .catch((err) => {
          console.log("error is :", err);
        });
    });

  }, []);


  return (

    <div className="weather-container">
      <img src={`${process.env.REACT_APP_ICON_URL}/${weather.icon}.png`} alt="weather-icon" />
      <h3>{Math.round(weather.temp)} &deg;c</h3>
      <p>{weather.location}</p>
    </div>

  );
};

export default Weather;
