
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TestForm from './Components/TestForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const darkMode=()=>{
    if (mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#383d43'
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
  <Navbar title="Testing" mode={mode} darkMode={darkMode}/>
  <div className="container">  
  <TestForm heading="Text Converter" mode={mode}/>
  {/* <About/> */}
  </div>

    </>

  );
}

export default App;
