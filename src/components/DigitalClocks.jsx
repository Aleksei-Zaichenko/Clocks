import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

export default function DigitalCloks({ location }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTime(
        moment().tz(`${location.continent}/${location.city}`).format("HH:mm:ss")
      );
    }, 1000);
  }, [time, location.continent, location.city]);

  return (
    <div className="digitalClocks">
      <h1>digital</h1>
      <h2>{time}</h2>
    </div>
  );
}
