import React from "react"
import ReactDOM from "react-dom";

import './style.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Interests from './components/Interests.js';

ReactDOM.render(
    <div className="card">
        <Header /> 
        <About />
        <Interests />
    </div>, document.getElementById("root"));