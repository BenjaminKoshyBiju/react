
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TestForm from './Components/TestForm';

function App() {
  return (
    <>
  <Navbar title="Testing"/>
  <div className="container">  
  <TestForm heading="Text Converter"/>
  {/* <About/> */}
  </div>

    </>

  );
}

export default App;
