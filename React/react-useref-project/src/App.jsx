import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // Stopwatch state
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  
  // Functions to control the timer
  function startTimer() {
    if (!timerRef.current) { // Prevent multiple intervals
      timerRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  // Button color change functionality
  const btnRef = useRef();

  function changeColor() {
    
      btnRef.current.style.backgroundColor = 'red';
    }
  


  return (
    <div>
      <h1>Stopwatch: {time} seconds</h1>
      
      <button
      ref= {btnRef}
      onClick={startTimer}>Start</button>
      <br /> <br />
      
      <button onClick={stopTimer}>Stop</button>
      <br /> <br />
      
      <button onClick={resetTimer}>Reset</button>
      <br /> <br />
      
      <button  onClick={changeColor}>
        Change Color of Start Button
      </button>
    </div>
  );
}

export default App;
