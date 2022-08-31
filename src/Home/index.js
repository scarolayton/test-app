import React from "react";
import { Helmet } from "react-helmet";
import logo from '../assets/cubes-solid.svg';
import {NavLink} from 'react-router-dom'
import './Home.css'
function Home(props) {
  return (

    <React.Fragment>
      
      <Helmet>
        <title>Icfes quizz - Home</title>
      </Helmet>
      <section id="HomeContainer">
        <div id="HomeContent">
          <img src={logo} alt=""/>
          <h1>Insta icfes</h1>
          <div id="HomeButtonsContainer">
            <NavLink id="HomeButtonPlay" to={'/Instructions'}>Play</NavLink>
            <button id="HomeButtonLog"  className="HomeSecundaryButtons" onClick={() => {document.getElementById('buttonClickSound').play();}}><NavLink to={'/'}>Login</NavLink></button>
            <button id="HomeButtonSing" className="HomeSecundaryButtons"><NavLink to={'/'}>Singup</NavLink></button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export {Home}