import { useState } from "react";
const api = {
  key: "369ee2cc7778dd61d3982ba2b1e094e2",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchStart = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <h2>Weather App</h2>

      {/* Search */}
      <input type={"text"} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={searchStart}> Search for this location</button>
      {typeof weather.main !== "undefined" ? (
        <div>
          {/* Location  */}
          <p>Location: {weather.name}</p>

          {/* Temperature Celsius  */}
          <p>Temperature: {weather.main.temp}°C</p>

          {/* Condition (Sunny ) */}
          <p>Condition: {weather.weather[0].main}</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      ) : (
        <h3>Write the location correctly</h3>
      )}
    </div>
  );
}

export default App;
