import React, { useState } from "react";
import search from "../assets/images/icons/search.svg"
import { useStateContext } from "../context";
import BackgroundLayout from "./BackgroundLayout";
function Home() {
  console.log(useStateContext(),"useStateContext()");
  const {weather}=useStateContext()
  
  console.log(weather,"weatherrr in home");
  const [inputValue,setInputValue]=useState('')
  return (
    <div className="w-full px-8 h-screen text-white">
      <nav className="flex w-full justify-between items-center z">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="w-[15rem] bg-white flex items-center p-2 gap-2 rounded shadow-xl overflow-hidden">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input value={inputValue}
          onChange={e=>setInputValue(e.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
            }}}        
           type="text" className="focus:outline-none w-full text-black text-lg"/>
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      
    </div>
  );
}

export default Home;
