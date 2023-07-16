import Sidebar from  "./compenent/Sidebar"
import Navbar from "./compenent/Navbar";
import Profile from "./compenent/Profile"
import UseEffectApi from "./compenent/UseEffectApi";

import './App.css';

import React from 'react'

 function App() {
  return (
    <div className="App">
    <Sidebar/>
    <Navbar/>
    <Profile/>
    </div>

  )
}


export default App;
