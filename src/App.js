import React, { useState } from "react";
import "./App.css";

import AnalogClocks from "./components/AnalogClocks";
import DigitalClocks from "./components/DigitalClocks";

function App() {
  const [location, setLocation] = useState({});
  const [timezoneToDisplay, setTimezoneToDisplay] = useState({
    continent: "",
    city: "",
  });
  const [timezone, setTimezone] = useState({ continent: "America", city: "" });
  const [bottomContainer, setBottomContainer] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = timezone.city.split(" ").join("_");
    setLocation({ continent: timezone.continent, city: city });
    setTimezoneToDisplay(timezone);
    setTimezone({ continent: "America", city: "" });
  };

  const handleChange = (event) => {
    setTimezone({ ...timezone, [event.target.name]: event.target.value });
  };

  const handleDigital = () => {
    setBottomContainer(false);
  };

  const handleAnalog = () => {
    setBottomContainer(true);
  };

  return (
    <div className="App">
      <div className="topContainer" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>Hi, Welcome to Clocks App</h1>
        <h2 style={{ fontSize: "2.3rem" }}>Enter the continent and the city</h2>
        <form
          className="timezoneForm"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <label>
            Choose the continent:
            <select
              name="continent"
              value={timezone.continent}
              onChange={(event) => handleChange(event)}
            >
              <option value="America">America</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
            </select>
          </label>
          <label style={{ margin: "1% 0" }}>
            City:{" "}
            <input
              type="text"
              name="city"
              placeholder="enter the city name"
              value={timezone.city}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <button
            type="submit"
            style={{
              width: "17%",
              margin: "0.3% 0",
              padding: "0.5%",
              borderRadius: "6px",
            }}
          >
            Submit
          </button>
        </form>
        <h3 style={{ fontSize: "1.7rem" }}>
          Select the type of Clocks you want to see:
        </h3>
        <div className="clocksTypeContainer">
          <button onClick={handleDigital}>Digital</button>
          <button onClick={handleAnalog}>Analog</button>
        </div>
        <h4
          style={
            timezoneToDisplay.continent !== "" && timezoneToDisplay.city !== ""
              ? { display: "block" }
              : { display: "none" }
          }
        >
          Currently you are viewing: {timezoneToDisplay.continent},{" "}
          {timezoneToDisplay.city}
        </h4>
      </div>
      {bottomContainer ? (
        <AnalogClocks location={location} />
      ) : (
        <DigitalClocks location={location} />
      )}
    </div>
  );
}

export default App;
