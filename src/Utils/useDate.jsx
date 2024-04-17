import { useEffect, useState } from "react";

export const useDate = () => {
  const locale = "en";

  const [today, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      return clearInterval(timer)
    }, 60 * 1000);
  }, []);

const day=today.toLocaleDateString(locale,{weekday:'long'})
const month=today.toLocaleDateString(locale,{month:'long'})
const date=`${day},${today.getDate()},${month}\n\n`
console.log(date,"dateeeee in useDate");
const time=today.toLocaleDateString(locale,{hour:'numeric',hour12:true,minute:'numeric'})
console.log(time,"time in useDate");


return {date,time}

};
