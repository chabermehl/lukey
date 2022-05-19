import React, { useState, useEffect } from "react";
import "./style.css";

const NickName: React.FC = () => {
  const getTimeLeft = () => {
    const timeOfReckoning = new Date("05/25/2022 05:28:00");
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
    <div>
      <h1>Time Remaining Until Loquacious Is No More</h1>
      <h3>{`${time.days} Days, ${time.hours} Hours, ${time.minutes} Minutes and ${time.seconds} Seconds`}</h3>
      <h3>
        Official end time because I'm not fighting time zones if the countdown
        is wrong: 05/25/2022 at 7:25 PM Loquacious' time
      </h3>
      <div
        className="imageContainer"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverExit}
      >
        <img
          src="/logo512.png"
          alt="Loquacious head"
          style={{ transform: `rotate(${transform}turn)` }}
        />
        {hovering ? (
          <h3 style={{ textAlign: "center" }}>Loquacious, my dear boi</h3>
        ) : null}
      </div>
    </div>
  );
};

export default NickName;
