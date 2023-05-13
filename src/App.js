import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import About from './component/About';
// import Login from './component/Login';
import Signup from './component/Signup';
import Contactus from './component/Contactus';
import Home from './component/Home';
import Form from "./component/Form";
import Login from "./component/Login";



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header/>
<Routes>
<Route  element={<Home/>}path="/"/>
<Route  element={<About/>}path="/About"/>
<Route  element={<Contactus/>}path="/Contactus"/>
<Route  element={<Signup/>}path="/Signup"/>
<Route  element={<Login/>}path="/Login"/>
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
