import React, { useEffect } from "react";
import illustration from '../assets/home-illustration.gif'
import { Helmet } from "react-helmet";
import {NavLink, useNavigate} from 'react-router-dom'
import { supabase } from "../config/supabase";
import Chance from "chance";
import { useMyContext } from "../context/themeContext";
function Login(props) {
  const {currentUser, setCurrentUser} = useMyContext()
  const chance = new Chance()
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    try {

      const res = await supabase.auth.signInWithOAuth({
         provider: 'google',
       })      
      console.log(res);
    }catch (err){
      console.error(err)
    }
  }
  const signInAsAsnonymous = async () => {
    try {

      const res = await supabase.auth.signUp({
        email: chance.email(),
        password: chance.string()
      })    
      navigate('/test-app/') 
      console.log(res);
    }catch (err){
      console.error(err)
    }
  }
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(session){
        navigate('/')
      }
    })
  }, [])  
  return (

    <React.Fragment>
      
      <Helmet>
        <title>Icfes quizz - Home</title>
      </Helmet> 
      <section className="HomeContainer w-screen h-auto bg-gradient-to-b  from-indigo-600 to-indigo-300 flex justify-around  items-center flex-col min-h-screen">
          <h1 className="text-slate-100 m-10 text-3xl font-extrabold md:text-5xl">ICFES Test</h1>
          <img src={illustration} alt="illustration" className="w-3/5 md:w-3/12" />
        <div className="bg-white h-auto w-11/12 mb-5 text-center rounded-2xl p-2 md:w-1/3">
          {/* <img src={logo} alt=""/> */}
          <h3 className="font-bold text-gray-900 text-xl ">Login or create an account</h3>
          <p className="text-sm leading-5 text-gray-500 mt-5 m-auto">This is an app to practice your abilities for the icfes test, try to use this app on a mobile phone</p>
          <div className="mt-5 flex justify-center items-center  flex-col">
           <button onClick={signInWithGoogle}  className='block bg-indigo-500 w-11/12 text-lg text-slate-100 p-4 rounded-2xl  mb-6 ' >Login with Google </button>
           <button onClick={signInAsAsnonymous} className='mb-6 bg-gray-300 text-indigo-500 w-11/12 p-4 rounded-2xl' >Sing up as anonymoous</button>
          </div>
        </div> 
      </section>
    </React.Fragment>
  );
}

export {Login}