import { useState } from 'react'
import './App.css'
import { TopBar } from './topBar/topBar';
import { Register } from './register/register';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || "light");

  return (
    <>
        <div className={`app ${mode}`}>
        <TopBar mode={mode} setMode={setMode} />
        <Register />
      </div>
    </>
  )
}

export default App
