
import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [thisLocation, setThisLocation] = useState("");
  const [place, setPlace] = useState("dubai"); // Default location
  // Fetch API
  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY; // Replace with your actual API key
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${apiKey}&unitGroup=metric&aggregateHours=24&contentType=json&shortColumnNames=0`;   
    try {
      const response = await axios.get(apiUrl);
      const { address, days } = response.data;
      setThisLocation(address);
      setValues(days);
      setWeather(days[0]);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch weather data.");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values,"values useEffect");
  }, [values]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        place
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
