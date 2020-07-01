import React, { useState, useEffect } from "react";
import "./App.css";

import AnalogClocks from "./components/AnalogClocks";
import DigitalClocks from "./components/DigitalClocks";

function App() {
  const [timezoneToDisplay, setTimezoneToDisplay] = useState({
    country: "",
    city: "",
  });
  const [timezone, setTimezone] = useState({ country: "", city: "" });
  const [bottomContainer, setBottomContainer] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(timezone);
    setTimezoneToDisplay(timezone);
    setTimezone({ country: "", city: "" });
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
        <h2>Enter the country and the city</h2>
        <form
          className="timezoneForm"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <label>
            Country:{" "}
            <input
              type="text"
              name="country"
              value={timezone.country}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label>
            City:{" "}
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
            timezoneToDisplay.country != "" && timezoneToDisplay.city != ""
              ? { display: "block" }
              : { display: "none" }
          }
        >
          Currently you are viewing: {timezoneToDisplay.country},{" "}
          {timezoneToDisplay.city}
        </h4>
      </div>
      {bottomContainer ? <AnalogClocks /> : <DigitalClocks />}
    </div>
  );
}

export default App;
