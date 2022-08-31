import React from "react";
import { Helmet } from "react-helmet";
import buttonClickSound from '../assets/audio files/button-sound.mp3'
import { useNavigate, useParams } from "react-router-dom";
import './Results.css'
// import {PlayContext} from '../Play'
function Results() {
  const navigate = useNavigate();
  const redirection = () => {
    navigate('/Questions/');
    // window.location.reload();

  } 
  const {score} = useParams();
  if (score === undefined) {
    console.log('error');
  }
  const displayScoreMessage = () => {
    let message = '';
    
    switch (Number(score)) {
      case 1:
        return message = 'You are really bad for this bro'
      case 2: 
      case 3:
      case 4:
      case 5:
      case 6:
        return message = 'You have to improve your skills'

      case 7:  
      case 8:
      case 9: 
        return message = 'You are good for the icfes'
      case 10:
        return message = 'You are awesome for the icfes Test'
        
      default:
        break
    }
 

      return message;
  }  
  return (
    <React.Fragment>
      <React.Fragment>
        <audio id='buttonClickSound'src={buttonClickSound}/>
      </React.Fragment>
      <Helmet><title>Icfes quizz - Results</title></Helmet>
      <div className='resultsContainer' >
      <h2>{displayScoreMessage()}</h2>
      <h1>Yor score is {score}/10</h1>
      <button  type="submit" onClick={ () => {document.getElementById('buttonClickSound').play(), redirection()}}>Comeback</button>
        
      </div>
    </React.Fragment>
  )
}

export {Results}