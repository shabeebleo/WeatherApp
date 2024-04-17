import React, { useState } from "react";
import search from "../assets/images/icons/search.svg";
import { useStateContext } from "../context";
import BackgroundLayout from "./BackgroundLayout";
import WeatherCard from "./WeatherCard.jsx";
import MiniCard from "./MiniCard.jsx";
function Home() {
  const { weather, place, values, setPlace } = useStateContext();
  const [inputValue, setInputValue] = useState("");
  const submitCity = () => {
    setPlace(inputValue);
    setInputValue("");
  };
  return (
    <div className="w-full px-8 h-screen text-white ">
      <nav className="flex w-full justify-between items-center mt-2 mb-2">
        <h1 className="font-bold tracking-wide text-3xl ">Weather App</h1>   
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input
            style={{ zIndex: 10 }}
            placeholder="Search City"
            value={inputValue}
            onChange={(e) => {
              console.log("onChange");
              return setInputValue(e.target.value);
            }}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                // event.preventDefault()
                submitCity();
              }
            }}
            type="text"
            className="focus:outline-none w-full text-black text-lg"
          />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>

      <main className="w-full flex justifky-center flex-1 px-[10%] items-center max-sm:flex-col max-sm:gap-6">
        <WeatherCard
          place={place}
          windspeed={weather.windspeed}
          humidity={weather.humidity}
          temperature={weather.temp}
          uvindex={weather.uvindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Home;
