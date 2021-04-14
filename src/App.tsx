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
  const [transform, setTransform] = useState(0.05);
  const [hovering, setHovering] = useState(false);

  const handleHoverEnter = () => {
    setHovering(true);
  };

  const handleHoverExit = () => {
    setHovering(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft);
      setTransform((prev) => (prev === 0.05 ? -0.05 : 0.05));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>Time Remaining Until Zaiah's HR Complaint</h1>
      <h3>{`${time.days} Days, ${time.hours} Hours, ${time.minutes} Minutes, ${time.seconds} Seconds`}</h3>
      <div onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
        <img
          src="/logo512.png"
          alt="zaiah-head"
          style={{ transform: `rotate(${transform}turn)` }}
        />
        {hovering ? (
          <h3 style={{ textAlign: "center" }}>
            REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!
          </h3>
        ) : null}
      </div>
    </div>
  );
}

export default App;
