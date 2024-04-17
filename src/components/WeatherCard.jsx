import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate.jsx";
import sun from "../assets/images/icons/sun.png";
import cloud from "../assets/images/icons/cloud.png";
import fog from "../assets/images/icons/fog.png";
import rain from "../assets/images/icons/rain.png";
import snow from "../assets/images/icons/snow.png";
import storm from "../assets/images/icons/storm.png";
import wind from "../assets/images/icons/windy.png";
import "../index.css";
const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  uvindex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();
  const [inputValue, setInputValue] = useState("");
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
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather icon" />
        <p className="font-bold text-5xl flex justify-center items-center"> 
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">Wind Speed
          <span className="font-normal">{windspeed} km/h</span>
        </p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <span className='font-normal'>{humidity} gm/m&#179;</span></p>
      </div>
      <div className="flex font-bold p-1 justify-between">UV  index <div>{uvindex}</div></div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>     
    </div>
  );
};

export default WeatherCard;
