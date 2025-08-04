import { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset timer
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="bg-red-600 p-3 rounded-lg text-center min-w-[60px]">
        <div className="text-2xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="text-xs text-red-100">HORAS</div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="bg-red-600 p-3 rounded-lg text-center min-w-[60px]">
        <div className="text-2xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="text-xs text-red-100">MIN</div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="bg-red-600 p-3 rounded-lg text-center min-w-[60px]">
        <div className="text-2xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="text-xs text-red-100">SEG</div>
      </div>
    </div>
  );
};