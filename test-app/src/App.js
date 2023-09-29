
import './App.css';
import Alert from './Components/Alert';
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
            alertMod('Dark Mode Enabled','success')
            
          }
          else{
            setMode('light')
            document.body.style.backgroundColor='white'
            alertMod('Light Mode Enabled','success')
          }
        }

  const [alert, setAlert] = useState(null)

        const alertMod=(message,type)=>{
          setAlert({
            message:message,
            type:type
          })
          setTimeout(() => {
            setAlert(null)
          }, 1500);       
        }
  
  return (
    <>
  <Navbar title="Testing" mode={mode} darkMode={darkMode}/>
  <Alert alert={alert}/>
  <div className="container">  
  <TestForm heading="Text Converter" mode={mode} showAlert={alertMod} />
  {/* <About/> */}
  </div>

    </>

  );
}

export default App;
