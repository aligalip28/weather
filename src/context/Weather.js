import { createContext } from "react";
import { useState } from "react";

const WeatherContext = createContext();

function Provider({ children }) {
  const APP_KEY = "5064a5bb3d254efba81122344231810";
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  let cityinput = "";
  const handleChange = (event) => {
    event.preventDefault();
    cityinput = event.target.value;
    setSearch(cityinput);
  };

  const handleSubmit = async () => {
    setSearch(search);
    if (search === "") return;
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${search}&days=3&aqi=no&alerts=no`
      );
      const result = await data.json();
      setWeather(result.forecast.forecastday, result);
      console.log(result.location);
    } catch (error) {
      alert("Hatalı Şehir İsmi Girdiniz");
    }
  };
  const sharedValuesAndMethods = {
    handleChange,
    handleSubmit,
    weather,
    search,
  };
  return (
    <WeatherContext.Provider value={sharedValuesAndMethods}>
      {children}
    </WeatherContext.Provider>
  );
}
export { Provider };
export default WeatherContext;
