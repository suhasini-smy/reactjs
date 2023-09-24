import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import React  from 'react';

function App() {
  return (
            <>
              <div className="clas"></div>
              <Navbar title="TextUtile"/>
              <div className='container my-3'>
               <TextForm heading="enter the text"/>
               {/* <About/> */}
              </div>
            </>
         );
}

export default App;
