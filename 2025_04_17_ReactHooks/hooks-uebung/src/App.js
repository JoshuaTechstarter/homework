import React, { useState, useEffect } from 'react';
import './App.css';
import './darkmode.css';
import DarkModeToggle from './DarkModeToggle';

function App() {
  const [clicks, setClicks] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isAltColor, setIsAltColor] = useState(false); // statt isBlue

  useEffect(() => {
    console.log('Die Seite wurde geladen!');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Hintergrundfarbe setzen (per CSS variable)
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--custom-bg-color', isAltColor ? '#f08080' : 'var(--bg-color)');
  }, [isAltColor]);

  const handleModeToggle = () => { };

  return (
    <div className="App">
      <h1>React Hooks Übung</h1>

      <DarkModeToggle onToggle={handleModeToggle} />

      <button onClick={() => setClicks(clicks + 1)}>
        Klick mich! ({clicks})
      </button>

      <hr />

      <button onClick={() => setIsAltColor(!isAltColor)}>
        Hintergrundfarbe wechseln
      </button>

      <hr />

      <button onClick={() => setIsVisible(!isVisible)}>
        Text {isVisible ? 'ausblenden' : 'einblenden'}
      </button>
      {isVisible && <p>Ich bin sichtbar!</p>}

      <hr />

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ margin: '0 1rem' }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <hr />

      <p>Seit {seconds} Sekunden geöffnet</p>
    </div>
  );
}

export default App;
