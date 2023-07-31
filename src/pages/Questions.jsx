import React, {useContext} from "react";
// import '../styles/Questions.css'
import {useNavigate} from 'react-router-dom'
import correctAnswerSound from '../assets/audio files/correct-answer.mp3'
import wrongAnswerSound from '../assets/audio files/wrong-answer.mp3'
import buttonClickSound from '../assets/audio files/button-sound.mp3'
import { Helmet } from "react-helmet";
import {QuestionsArray} from '../assets/QuestionsArray'
import {Timer} from '../Components/Timer'
import { ProgressBarQuestions } from "../Components/ProgessBarQuestions";
import { themeContext } from "../context/themeContext";
function Questions (props){
  const [currentDateObj, setCurrentDate] = React.useState(Date.now() + 600000);   
  const [sessionQuestions, setSessionsQuestions] = React.useState(QuestionsArray)

  const [currentQuestion,setCurrentQuestion] = React.useState(0);
  const {score, setScore} = useContext(themeContext);
  
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

          navigate(`/Results/`)
          
         }
        
        



    }
    return (
          <>
          <React.Fragment>
          
            <audio id="correctAnswerSound" src={correctAnswerSound}/>
            <audio id='buttonClickSound'src={buttonClickSound}/>
            <audio id="wrongAnswerSound"src={wrongAnswerSound} />
          </React.Fragment>
          <Helmet>
            <title>Quizz App - Play</title>
          </Helmet>
        <div id="QuestionsContainer flex flex-col " className="w-full h-screen  bg-gradient-to-b from-indigo-600 to-indigo-300">
        <div className="progressBarQuestions flex justify-center mb-8 pt-8">
            <ProgressBarQuestions currentQuestion={currentQuestion}/>
          </div>
          <div id="QuestionsContent" className="flex  flex-col items-center   rounded-xl h-5/6  w-11/12 m-auto bg-slate-50 ">
            <Timer  currentDataObj={currentDateObj} score={score}/>
            <p className="mt-5 mb-1 text-left w-full pl-3 text-gray-400 font-semibold text-lg">Question {currentQuestion + 1} of 10</p>
            
            <p className="bounceInDown text-center pl-3 pr-4 font-semibold text-lg mb-5">{sessionQuestions[newQuestion].question}</p>
            <button className="options zoomIn w-11/12 cursor-pointer border-solid border-2 border-gray-400 rounded-2xl p-3 text-left mb-9" onClick={(e) => {validTheAnswer(e)}}>{sessionQuestions[newQuestion].optionA}</button>
            <button className="options zoomIn w-11/12 cursor-pointer border-solid border-2 border-gray-400 rounded-2xl p-3 text-left mb-9" onClick={(e) => validTheAnswer(e)} >{sessionQuestions[newQuestion].optionB}</button>
            <button className="options zoomIn w-11/12 cursor-pointer border-solid border-2 border-gray-400 rounded-2xl p-3 text-left mb-9" onClick={(e) => validTheAnswer(e)}>{sessionQuestions[newQuestion].optionC}</button> 
            <button className="options zoomIn w-11/12 cursor-pointer border-solid border-2 border-gray-400 rounded-2xl p-3 text-left mb-9" onClick={(e) => validTheAnswer(e)}>{sessionQuestions[newQuestion].optionD}</button>
          </div>
        </div>
        </>
  )
}

export {Questions}