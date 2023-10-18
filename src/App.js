import "./App.css";
import { useContext, useEffect } from "react";
import WheateherResult from "./components/WheatherResult";
import WeatherContext from "./context/Weather";

function App() {
  const { handleChange, handleSubmit, weather, search } =
    useContext(WeatherContext);
  useEffect(() => {});

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Search a city"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>
        <h2 className="cityHead">
          <span className="cityName">{search} </span>
        </h2>
      </div>
      {weather.map((item, index) => (
        <WheateherResult
          key={index}
          date={item.date}
          mintemp={item.day.mintemp_c}
          maxtemp={item.day.maxtemp_c}
          condition={item.day.condition.text}
          icon={item.day.condition.icon}
        />
      ))}
    </div>
  );
}

export default App;
