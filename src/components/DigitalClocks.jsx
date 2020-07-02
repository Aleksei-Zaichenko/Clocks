import React,{useState, useEffect} from "react";
import moment from "moment-timezone";

export default function DigitalCloks({ location }) {

  const [time, setTime] = useState('')

  useEffect(()=>{
    
  },[time])

  return (
    <div className="digitalClocks">
      <h1>digital</h1>
      <h2>
        {moment().tz(`${location.country}/${location.city}`).format("HH:mm:ss")}
      </h2>
    </div>
  );
}
