import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import "./AnalogClocks.css";

export default function AnalogCloks({ location }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTime(
        moment().tz(`${location.continent}/${location.city}`).format("HH:mm:ss")
      );
    }, 1000);
  }, [time, location.continent, location.city]);

  const hoursDegrees =
    this.state.date.getHours() * 30 + this.state.date.getMinutes() / 2;
  const minutesDegrees =
    this.state.date.getMinutes() * 6 + this.state.date.getSeconds() / 10;
  const secondsDegrees = this.state.date.getSeconds() * 6;

  const divStyleHours = {
    transform: "rotateZ(" + hoursDegrees + "deg)",
  };

  const divStyleMinutes = {
    transform: "rotateZ(" + minutesDegrees + "deg)",
  };

  const divStyleSeconds = {
    transform: "rotateZ(" + secondsDegrees + "deg)",
  };

  return (
    <div id="analogClocks">
      <h1 className="this.state.class">{time}</h1>
    </div>
  );
}
