import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      toast.success("Time's up!");
      setIsRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col bg-black p-2 gap-3 sm:gap-5 ">
      <h2 className="text-2xl font-bold text-center">
        {seconds} seconds left!
      </h2>
      <div className="flex items-center justify-between">
        <label htmlFor="seconds-input">Enter number of seconds:</label>
        <input
          type="number"
          id="seconds-input"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
          className="w-20 text-black p-1"
        />
        <div className="flex justify-between items-center w-20">
          <button onClick={handleStart} disabled={isRunning}>
            <i className="fa-solid fa-play"></i>
          </button>
          <button onClick={handleStop} disabled={!isRunning}>
            <i className="fa-solid fa-stop"></i>
          </button>
          <button onClick={handleReset} disabled={isRunning}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
