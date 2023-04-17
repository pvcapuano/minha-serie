import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 && showAlert) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      toast.success("Time's up!", {
        theme: "colored",
      });
      setShowAlert(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, seconds, showAlert]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSeconds(value);
  };

  const handlePlayClick = () => {
    setIsRunning(true);
    setShowAlert(true);
  };

  const handleStopClick = () => {
    setIsRunning(false);
    setShowAlert(false);
  };

  const handleResetClick = () => {
    setSeconds(0);
    setIsRunning(false);
    setShowAlert(false);
    clearInterval(intervalRef.current);
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
          value={seconds}
          onChange={handleInputChange}
          className="w-20 text-black p-1"
        />
        <div className="flex justify-between items-center w-20">
          <button
            onClick={handlePlayClick}
            disabled={isRunning || seconds === 0}
          >
            <i className="fa-solid fa-play"></i>
          </button>
          <button onClick={handleStopClick} disabled={!isRunning}>
            <i className="fa-solid fa-stop"></i>
          </button>
          <button onClick={handleResetClick} disabled={!seconds && !isRunning}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
