import React, { useEffect, useState } from "react";
import cloud from "../assets/images/icons/cloud.png";
import fog from "../assets/images/icons/fog.png";
import rain from "../assets/images/icons/rain.png";
import snow from "../assets/images/icons/snow.png";
import storm from "../assets/images/icons/storm.png";
import wind from "../assets/images/icons/windy.png";
import sun from '../assets/images/icons/sun.png'
function MiniCard({ time, temp, iconString }) {
  const [icon, setIcon] = useState();
  useEffect(() => {
    if (iconString?.toLowerCase().includes("cloud")) {
      setIcon(cloud);
    } else if (iconString?.toLowerCase().includes("rain")) {
      setIcon(rain);
    } else if (iconString?.toLowerCase().includes("snow")) {
      setIcon(snow);
    } else if (iconString?.toLowerCase().includes("thunder")) {
      setIcon(storm);
    } else if (iconString?.toLowerCase().includes("clear")) {
      setIcon(sun);
    } else if (iconString?.toLowerCase().includes("fog")) {
      setIcon(fog);
    } else if (iconString?.toLowerCase().includes("wind")) {
      setIcon(wind);
    }
  }, [iconString]);

  return (
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col">
      <p className="text-center">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr />
      <div>
        <img src={icon} alt="weather" className="w-[4rem] h-[4rem]" />
    
      </div>
      <p className="tex-center font-bold">{temp}&deg;C</p>
    </div>
  );
}

export default MiniCard;
