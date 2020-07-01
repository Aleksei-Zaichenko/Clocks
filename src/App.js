import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import AnalogClocks from "./components/AnalogClocks";
import DigitalClocks from "./components/DigitalClocks";

function App() {
  const [timeAsNumber, setTimeAsNumber] = useState("");
  const [timezoneToDisplay, setTimezoneToDisplay] = useState({
    continent: "",
    city: "",
  });
  const [timezone, setTimezone] = useState({ continent: "America", city: "" });
  const [bottomContainer, setBottomContainer] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const city = timezone.city.split(" ").join("_");

    axios
      .get(`http://worldtimeapi.org/api/timezone/${timezone.continent}/${city}`)
      .then((res) => {
        console.log(res.data.datetime);
        setTimeAsNumber(res.data.datetime);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
        <h1>Hi, Welcome to Clocks App</h1>
        <h2>Enter the continent and the city</h2>
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
          <label>
            city:{" "}
            <input
              type="text"
              name="city"
              value={timezone.city}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <h3>Select the type of Clocks you want to see:</h3>
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
      {bottomContainer ? <AnalogClocks /> : <DigitalClocks />}
    </div>
  );
}

export default App;
