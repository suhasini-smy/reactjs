import './App.css';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
//import {  Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [darkMode,setDarkMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
          msg:message,
          type:type
      });

      setTimeout (()=>{
                        setAlert(null);
                      },3000);
  }

 

  const enableDarkMode = () =>{
    if(darkMode==="light"){
      setDarkMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert('Dark Mode has enabled','success');
      document.title="text Utiles - dark";
    }else{
      setDarkMode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light Mode has enabled','success');
      document.title="text Utiles - grey";
     }
  }

  const ChangeTheme = (cls) =>{
    console.log(cls);
    
    if(darkMode==="light")
    {
      setDarkMode('dark');
      document.body.style.backgroundColor="#eee";
      showAlert('Dark Mode has enabled','success');
    }else{
      setDarkMode('light');
      document.body.style.backgroundColor="yellow";
      showAlert('Light Mode has enabled','success');
    }
  }

  return (    
            <>
                <div className="clas"></div>
                <Navbar title="TextUtile" mode={darkMode} ChangeColor={ChangeTheme} toggleMode={enableDarkMode}/>
                <Alert alert={alert}/>
                 <Routes>
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="enter the text"  mode={darkMode}  />}/>
                </Routes> 

                {/* <TextForm showAlert={showAlert} heading="enter the text"  mode={darkMode}  /> */}
            </>
       );
}

export default App;
