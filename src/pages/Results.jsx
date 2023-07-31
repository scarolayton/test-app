import React, {useContext} from "react";
import { Helmet } from "react-helmet";
import { themeContext } from "../context/themeContext";
import buttonClickSound from '../assets/audio files/button-sound.mp3'
import  trophySymbol from '../assets/trophy.svg'
import { useNavigate, useParams } from "react-router-dom";
// import '../styles/Results.css'
function Results() {
  const navigate = useNavigate();
  const redirection = () => {
    navigate('/Questions/');

  } 
 
  const {score, setScore} = useContext(themeContext);
  console.log(score);
  const displayScoreMessage = () => {
    let message = '';
    if(score <= 1){
      return message = 'You are not prepared 😥'
    }else if (score > 1 && score <= 6){
      return message = 'You have to improve your skills 😑'
    }else if (score > 6 && score <= 9){
      return message = 'You are good for the icfes 😉'
    }else {
      return message = 'You are ready for the icfes Test 😎'
    }
  }
  return (
    <React.Fragment>
      <React.Fragment>
        <audio id='buttonClickSound'src={buttonClickSound}/>
      </React.Fragment>
      <Helmet><title>Icfes quizz - Results</title></Helmet>
      <div className='resultsContainer h-screen w-11/12 m-auto' >
        <h2 className="text-center text-3xl m-5 mb-9 font-semibold">{displayScoreMessage()} </h2>
        <section className="resultsMainSection bg-red-400 rounded-2xl h-3/5 flex flex-col items-center" >
          <img src={trophySymbol} alt="trophySymbol" className="w-2/3 mt-4" />
          <p className="text-center text-xl text-slate-50 font-semibold mt-4">You get +{score * 10} ICFES points</p>
          <a href="/" className="text-white rounded-xl mt-9 bg-slate-300  bg-opacity-60 p-4 text-lg ">Check  ICFES test ranking</a>
        </section>
        <section className=" flex justify-between mt-9 ">
          <div>
            <h5 className=" mb-1 text-left w-full text-gray-400 font-semibold text-base">CORRECT ANSWER</h5>
            <p className="text-2xl font-semibold">{score} questions</p>
          </div>
          <div>
            <h5 className="mb-1 text-left w-full text-gray-400 font-semibold text-base">INCORRECT ANSWER</h5>
            <p className="text-2xl font-semibold">{10 - score} questions</p>
          </div>
        </section>
        <div className="flex justify-center">
        <button className="bg-indigo-600 w-3/4 p-4 rounded-2xl mt-5 text-slate-50 font-semibold text-lg ml-"  type="submit" onClick={ () => {document.getElementById('buttonClickSound').play(), redirection('/')}}>Done</button>

        </div>
          
      </div>
    </React.Fragment>
  )
}

export {Results}