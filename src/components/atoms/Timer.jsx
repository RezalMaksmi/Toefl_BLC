import React, { useEffect, useState } from 'react';

function Timer({ timeLeft }) {
  const [seconds, setSeconds] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="timer">
      Waktu tersisa: {seconds} detik
    </div>
  );
}

export default Timer;
