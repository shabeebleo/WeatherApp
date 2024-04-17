// import { useState, useContext, createContext, useEffect } from "react";
// import axios from "axios";

// const StateContext = createContext();

// export const StateContextProvider = ({ children }) => {
//   const [weather, setWeather] = useState({});
//   const [values, setValues] = useState([]);
//   const [thisLocation, setThisLocation] = useState("");
//   const [place, setPlace] = useState("calicut");

//   //fetch api
//   const fetchWeather = async () => {
//     const options = {
//         method: 'GET',
//         url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
//         params: {
//             aggregateHours: '24',
//             location: place,
//             contentType: 'json',
//             unitGroup: 'metric',
//             shortColumnNames: 0,
//         },
//         headers: {
//             'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
//             'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
//         }
//     };
//     try {
//       const response = await axios.request(options);
//       console.log(response,"response in context");
//       const thisData = Object.values(response.data.locations)[0];
//       setThisLocation(thisData.address);
//       setValues(thisData.values);
//       setWeather(thisData.values[0]);
//     } catch (error) {
//         console.log("errrrrrr");
//       console.error(error);
//       alert("Failed to fetch weather data.");
//     }
//   };

//   useEffect(() => {
//     fetchWeather();
//   }, [place]);

//   useEffect(() => {
//     console.log(values);
//   }, [values]);

//   return (
//     <StateContext.Provider
//       value={{
//         weather,
//         setPlace,
//         values,
//         thisLocation,
//       }}
//     >
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);
import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [thisLocation, setThisLocation] = useState("");
  const [place, setPlace] = useState("dubai"); // Default location
// console.log(weather,values,thisLocation,place,"weather,values,thisLocation,place");
  // Fetch API
  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY; // Replace with your actual API key
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${apiKey}&unitGroup=metric&aggregateHours=24&contentType=json&shortColumnNames=0`;   
    try {
      const response = await axios.get(apiUrl);
    //   console.log(response, "response in context");
      // Parse the response data as needed
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
