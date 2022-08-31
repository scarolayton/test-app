import React from "react";
import './Questions.css'
import logo from '../assets/cubes-solid.svg';
import {useNavigate} from 'react-router-dom'
import correctAnswerSound from '../assets/audio files/correct-answer.mp3'
import wrongAnswerSound from '../assets/audio files/wrong-answer.mp3'
import buttonClickSound from '../assets/audio files/button-sound.mp3'
import { Helmet } from "react-helmet";
import {QuestionsArray} from '../QuestionsArray'
import {Timer} from './Timer'
const PlayContext = React.createContext();
function Questions (props){
  const [currentDateObj, setCurrentDate] = React.useState(Date.now() + 600000);
  const [sessionQuestions, setSessionsQuestions] = React.useState(QuestionsArray)

  const [currentQuestion,setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(1);
  
  const [newQuestion, setNewQuestion] = React.useState(Math.round(Math.random() * (sessionQuestions.length - 1)))
  const navigate = useNavigate();

  const displayNextQuestion  =  () => {

    let newPossibleQuestion = Math.round(Math.random() * (sessionQuestions.length - 1));
    if(newPossibleQuestion === sessionQuestions.length - 1){
      newPossibleQuestion = newPossibleQuestion - 1

    }
    console.log(sessionQuestions.length);
    setNewQuestion(newPossibleQuestion);
   

    setCurrentQuestion(currentQuestion + 1);
        
  }

    const validTheAnswer = (e) => { 
      if (e.target.innerText === sessionQuestions[newQuestion].answer) {
        // console.log(QuestionsArray.length - 10);
        document.getElementById('correctAnswerSound').play();
        setScore(score + 1)
        console.log(score);
      }else {
        document.getElementById('wrongAnswerSound').play();
        
      }
      displayNextQuestion();
        
          if ( sessionQuestions.length > (QuestionsArray.length - 9) ){
            let filteredArray = sessionQuestions.filter(question => {
              return sessionQuestions.indexOf(question) !== newQuestion;
            })
           setSessionsQuestions(filteredArray)
           
          console.log(sessionQuestions.length);
           console.log(sessionQuestions[newQuestion]);

   
         }else {

          navigate(`/Results/${score}`)
          
         }
        
        



    }
    return (
      
      <React.Fragment>
      <PlayContext.Provider value={score}></PlayContext.Provider>
        <React.Fragment>
          <audio id="correctAnswerSound" src={correctAnswerSound}/>
          <audio id='buttonClickSound'src={buttonClickSound}/>
          <audio id="wrongAnswerSound"src={wrongAnswerSound} />
        </React.Fragment>
        <Helmet>
          <title>Quizz App - Play</title>
        </Helmet>
      <div id="QuestionsContainer">
      <div id="Questionscomplements">
      <img src={logo} alt="logo"/>
          <p>{currentQuestion + 1} of 10</p>

          <Timer currentDataObj={currentDateObj} score={score}/>
        </div>
        <div id="QuestionsContent">
          <p className="bounceInDown">{sessionQuestions[newQuestion].question}</p>
          <button className="options zoomIn" onClick={(e) => {validTheAnswer(e)}}>{sessionQuestions[newQuestion].optionA}</button>
          <button className="options zoomIn" onClick={(e) => validTheAnswer(e)} >{sessionQuestions[newQuestion].optionB}</button>
          <button className="options zoomIn" onClick={(e) => validTheAnswer(e)}>{sessionQuestions[newQuestion].optionC}</button> 
          <button className="options zoomIn" onClick={(e) => validTheAnswer(e)}>{sessionQuestions[newQuestion].optionD}</button>
        </div>
      </div>
    </React.Fragment>

  )
}

export {Questions , PlayContext}