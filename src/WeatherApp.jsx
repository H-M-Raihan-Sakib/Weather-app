import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import Footer from "./footer";
import { useEffect, useState } from "react";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Dhaka",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 70,
    weather: "Haze",
  });
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    setDarkMode(storedMode === null ? true : storedMode === "true");
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <main className="WeatherApp">
      <section className="weather-shell">
        <header className="weather-header">
          <div className="weather-header-top">
            <span className="weather-badge">Live Weather</span>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setDarkMode((current) => !current)}
            >
              {darkMode ? <BedtimeIcon /> : <SunnyIcon />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <h2>Weather App</h2>
          <p>Search any city to view current temperature, humidity and sky conditions.</p>
        </header>

        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </section>
    </main>
  );
}
