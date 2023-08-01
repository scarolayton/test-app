import React from "react";
import illustration from '../assets/home-illustration.gif'
import { Helmet } from "react-helmet";
import {auth} from '../config/firebase';
import {  GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

import {NavLink, useNavigate} from 'react-router-dom'

function Login(props) {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();
  const redirectToGoogle = async  () => {
    try {

      const useCred = await signInWithPopup(auth, provider)
      navigate('/');
      
    }catch(error) {
      console.error(error);
    }
  }

 
    
    
  return (

    <React.Fragment>
      
      <Helmet>
        <title>Icfes quizz - Home</title>
      </Helmet> 
      <section className="HomeContainer w-screen h-screen bg-gradient-to-b from-indigo-600 to-indigo-300 flex justify-around  items-center flex-col">
          <h1 className="text-slate-100 m-10 text-3xl font-extrabold">ICFES Test</h1>
          <img src={illustration} alt="illustration" className="w-3/5" />
        <div className="bg-white h-auto w-11/12 text-center rounded-2xl p-2">
          {/* <img src={logo} alt=""/> */}
          <h3 className="font-bold text-gray-900 text-xl ">Login or create an account</h3>
          <p className="text-sm leading-5 text-gray-500 mt-5 m-auto">This is an app to practice your abilities for the icfes test, try to use this app on a mobile phone</p>
          <div className="mt-5 flex justify-center items-center flex-col">
           <button onClick={redirectToGoogle} className='block bg-indigo-500 w-11/12 text-lg text-slate-100 p-4 rounded-2xl  mb-6 ' >Login with Google </button>
           <button  className='mb-6 bg-gray-300 text-indigo-500 w-11/12 p-4 rounded-2xl' >Logout</button>
          </div>
        </div> 
      </section>
    </React.Fragment>
  );
}

export {Login}