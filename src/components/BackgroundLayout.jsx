import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
//images
import Clear from "../assets/images/Clear.jpg";
import Fog from "../assets/images/fog.png";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";
function BackgroundLayout() {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);
  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      }else if(imageString.toLowerCase().includes("fog")){
        setImage(Fog);
      }else if(imageString.toLowerCase().includes("rain")||imageString.toLowerCase().includes("shower")){
        setImage(Rainy);
      }else if(imageString.toLowerCase().includes("cloud")||imageString.toLowerCase().includes("overcast")){
        console.log("reached");
        setImage(Cloudy);
      }else if(imageString.toLowerCase().includes("snow")){
        setImage(Snow);
      }else if(imageString.toLowerCase().includes("thunder")||imageString.toLowerCase().includes("storm")){
        setImage(Stormy);
      }else if(imageString.toLowerCase().includes("sunny")){
        setImage(Sunny);
      }

    }

    return () => {
      setImage();
    };
  }, [weather.conditions
  ]);

  return (
    <div>
      <img className="h-screen w-full fixed left-0 top-0 -z-[5] " src={image} alt="weather Image" />
    </div>
  );
}

export default BackgroundLayout;
