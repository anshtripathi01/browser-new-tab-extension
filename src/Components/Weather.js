import { useEffect, useState } from "react";

const Weather = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  // const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({
    temp: "",
    icon: "",
    location: ""
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });


    fetch(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=4236d7f622034251d8d52afac54a439b`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeather({
          temp: data.main.temp,
          icon: data.weather[3].icon,
          location: data.name
        })
      })
      .catch((err) => {
        console.log("error is :", err);
      });
  }, [latitude, longitude]);


  return (

    <div>
      <img src={`https://openweathermap.org/img/w/${weather.icon}`} alt="weather-icon" />
      <h3>{Math.round(weather.temp)} &deg;c</h3>
      <p>{weather.location}</p>
    </div>

  );
};

export default Weather;
