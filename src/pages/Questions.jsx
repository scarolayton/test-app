import React, {useContext, useEffect} from "react";
// import '../styles/Questions.css'
import {useLocation, useNavigate} from 'react-router-dom'
import correctAnswerSound from '../assets/audio files/correct-answer.mp3'
import wrongAnswerSound from '../assets/audio files/wrong-answer.mp3'
import buttonClickSound from '../assets/audio files/button-sound.mp3'
import { Helmet } from "react-helmet";
import {QuestionsArray} from '../assets/QuestionsArray'
import {Timer} from '../Components/Timer'
import { ProgressBarQuestions } from "../Components/ProgessBarQuestions";
import { useMyContext } from "../context/themeContext"; 
import { supabase } from "../config/supabase";
function Questions (props){
  const location = useLocation()
  const navigate = useNavigate();
  const [currentDateObj, setCurrentDate] = React.useState(Date.now() + 600000);   
  const [sessionQuestions, setSessionQuestions] = React.useState([])
  const [sessionOptions, setSessionsOptions] = React.useState([])
  const [currentQuestion,setCurrentQuestion] = React.useState(0);
  const [newQuestion,setNewQuestion] = React.useState(Math.round(Math.random() * 20));
  
  const {score, setScore} = useMyContext();
  useEffect(() => {
    const fetchQuestions = async () => {
      const {categorie} = location.state
      try {
        if(categorie === 'Random'){
          const dataQuestions =  (await supabase.from('Questions').select('*')).data
          setSessionQuestions(dataQuestions)
          
          const dataOptions =  (await supabase.from('Options').select('*')).data
          setSessionsOptions(dataOptions)
          
        }else {
          const dataQuestions =  (await supabase.from('Questions').select('*').eq('categorie', categorie)).data
          setSessionQuestions(dataQuestions)
          
          const dataOptions =  (await supabase.from('Options').select('*').eq('categorie', categorie)).data
          setSessionsOptions(dataOptions)
          
        }
        }catch (err) {
          console.error(err)
        }
        
       
    }
    
    if(location.state === null){
      navigate('/')
    }else {
      fetchQuestions()
      setScore(0)
    }
  }, [])
  const displayNextQuestion  =  () => {

    let newPossibleQuestion = Math.round(Math.random() * (sessionQuestions.length - 1));
    if(newPossibleQuestion === sessionQuestions.length - 1){
      newPossibleQuestion = newPossibleQuestion - 1

    }

    setNewQuestion(newPossibleQuestion);
   

    setCurrentQuestion(currentQuestion + 1);
  }

    const validTheAnswer = (e) => { 
      
      if (e.target.innerText === sessionQuestions[newQuestion].correct_answer_id.trim()) {
        e.target.classList.add('bg-green-500')
        document.getElementById('correctAnswerSound').play();
        setScore(score + 1)
        console.log(score);
        // setTimeout((() => e.target.classList.remove('bg-green-500')), 500)
      }else {
        e.target.classList.add('bg-red-500')
        document.getElementById('wrongAnswerSound').play();
        // setTimeout((() => e.target.classList.remove('bg-red-500')), 500)
      }
      
     
      
          console.log(currentQuestion);
          if ( currentQuestion+2 <= 10 ){
            displayNextQuestion();
            let filteredQuestions = sessionQuestions.filter(question => {
              return sessionQuestions.indexOf(question) !== newQuestion;
            })
            let filteredOptions = sessionOptions.filter(options => {
              return sessionOptions.indexOf(options) !== newQuestion;
            })
           setSessionQuestions(filteredQuestions)
           setSessionsOptions(filteredOptions)
          console.log(sessionQuestions.length);


   
         }else {
          setTimeout(() => {

            navigate(`/Results/`)
          }, 1000)
          
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
        <div id="QuestionsContainer flex flex-col" className="w-full h-auto min-h-screen  bg-gradient-to-b from-indigo-600 to-indigo-300">
          <div className="progressBarQuestions flex justify-center mb-8 pt-8">
            <ProgressBarQuestions currentQuestion={currentQuestion}/>
          </div>
          <div id="QuestionsContent" className="flex  flex-col items-center   rounded-xl h-auto  w-11/12 m-auto bg-slate-50 md:w-1/2">
            <div className="h-1/6 w-2/5 mt-4">

            <Timer  currentDataObj={currentDateObj} score={score}/>
            </div>
            <p className="mt-5 mb-1 text-left w-full pl-3 text-gray-400 font-semibold text-lg">Question {currentQuestion + 1} of 10</p>
            {sessionQuestions.length > 0 && (
              <>
              <p className="bounceInDown text-center pl-3 pr-4 font-semibold text-lg mb-5">{sessionQuestions[newQuestion].question_text}</p>
              </>
            )}
            {sessionOptions.map(option => {
              console.log(sessionQuestions[newQuestion].id);

              if(sessionQuestions[newQuestion].id === option.question_id){
                console.log(sessionQuestions[newQuestion].id);
                console.log(option.question_id);
                return(

              <>
                <button className="options transition-all zoomIn w-11/12 cursor-pointer border-solid border-2 border-gray-400 rounded-2xl p-3 text-left mb-9" onClick={(e) => {validTheAnswer(e)}}>{option.option_texta}</button>
                <button className="options transition-all zoomIn w-11/12 cursor-pointer border-solid border-2 border-gray-400 rounded-2xl p-3 text-left mb-9" onClick={(e) => {validTheAnswer(e)}}>{option.option_textb}</button>
                <button className="options transition-all zoomIn w-11/12 cursor-pointer border-solid border-2 border-gray-400 rounded-2xl p-3 text-left mb-9" onClick={(e) => {validTheAnswer(e)}}>{option.option_textc}</button>
                <button className="options transition-all zoomIn w-11/12 cursor-pointer border-solid border-2 border-gray-400 rounded-2xl p-3 text-left mb-9" onClick={(e) => {validTheAnswer(e)}}>{option.option_textd}</button>
              </>
                )
              }
            })}
          </div>
        </div>
        </>
  )
}

export {Questions}