import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  // let time = new Date();

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);
  return (
    <p>
      This is the time {time.toLocaleDateString()} -{time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
