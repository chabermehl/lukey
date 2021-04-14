import React, { useState, useEffect } from "react";

function App() {
  const getTimeLeft = () => {
    const timeOfReckoning = new Date("10/19/2021");
    const now = new Date();

    const timeLeft = timeOfReckoning.getTime() - now.getTime();

    return {
      seconds: Math.floor((timeLeft / 1000) % 60),
      minutes: Math.floor((timeLeft / 1000 / 60) % 60),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    setInterval(() => {
      setTime(getTimeLeft);
    }, 1000);
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>Time Remaining Until Zaiah's HR complaint</h1>
      <h3>{`${time.days} Days, ${time.hours} Hours, ${time.minutes} Minutes, ${time.seconds} Seconds`}</h3>
    </div>
  );
}

export default App;
