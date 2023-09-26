import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
//import React  from 'react';
import React,{useState} from 'react'

function App() {
  const [darkMode,SetDarkMode] = useState('light');

  const enableDarkMode = () =>{
    if(darkMode==="light"){
      SetDarkMode('dark');
      document.body.style.backgroundColor="grey";
    }else{
      SetDarkMode('light');
      document.body.style.backgroundColor="white";
    }
  }

  return (
            <>
              <div className="clas"></div>
              <Navbar title="TextUtile" mode={darkMode} toggleMode={enableDarkMode}/>
              <div className='container my-3'>
               <TextForm heading="enter the text" mode={darkMode}  />
               {/* <About/> */}
              </div>
            </>
         );
}

export default App;
