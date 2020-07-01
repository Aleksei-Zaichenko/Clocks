import React from "react";

export default function DigitalCloks({ timeAsNumber }) {
  return (
    <div className="digitalClocks">
      <h1>digital</h1>
      <h2>{timeAsNumber}</h2>
    </div>
  );
}
