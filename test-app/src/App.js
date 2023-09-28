
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
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
  <Navbar title="Testing" mode={mode} darkMode={darkMode}/>
  <div className="container">  
  <TestForm heading="Text Converter"/>
  {/* <About/> */}
  </div>

    </>

  );
}

export default App;
