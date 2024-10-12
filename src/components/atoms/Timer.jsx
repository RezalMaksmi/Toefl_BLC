import React, { useEffect, useState } from 'react';

function Timer({ timeLeft }) {
  const [seconds, setSeconds] = useState(timeLeft);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,   
 '0')}`;
  };

  useEffect(() => {
    if (seconds <= 0) {
      setSeconds(0); 
    }
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="font-semibold">
      Waktu tersisa: {formatTime(seconds)}
    </div>
  );
}

export default Timer;
