import React from "react";

export default function AnalogCloks({ timeAsNumber }) {
  return (
    <div className="analogClocks">
      <h1>analog</h1>
      <h2>{timeAsNumber}</h2>
    </div>
  );
}
