"use client";
import WeatherDetail from "@/components/weather-detail";
import WeatherSearch from "@/components/weather-search";
import { searchCity } from "@/lib/weather-api";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherType, setWeatherType] = useState("");
  const mistWeather =
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/%D0%97%D0%B0_%D1%81%D0%B5%D0%BB%D0%BE%D0%BC_2.jpg";

  const cloudsWeather =
    "https://c02.purpledshub.com/uploads/sites/41/2023/04/GettyImages987269142-tb-a5b2bb8.jpg";

  const snowWeather =
    "https://preview.redd.it/snow-1920x1080-v0-xxi8w2s9uha81.jpg?auto=webp&s=3d30cad749473d7e6d5f2d8221fc072e389b2064";

  const clearWeather = "https://wallpapercave.com/wp/wp11789974.jpg";

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await searchCity(city);
      setWeatherData(data);
      setWeatherType(data.weather[0].main);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getBackgroundImage = () => {
    if (weatherType === "Clear") {
      return clearWeather;
    } else if (weatherType === "Clouds") {
      return cloudsWeather;
    } else if (weatherType === "Snow") {
      return snowWeather;
    } else if (weatherType === "Mist") {
      return mistWeather;
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: "cover",
        height: "100vh", // 100% of the viewport height
      }}
    >
      <WeatherSearch {...{ city, setCity, fetchData, loading }} />
      <WeatherDetail {...{ weatherData }} />
    </div>
  );
}
