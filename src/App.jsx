import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeMachine from './TimeMachine';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
    <TimeMachine />
  </div>
  );
};

export default App
