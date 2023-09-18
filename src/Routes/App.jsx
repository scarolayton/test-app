import React, {useEffect, useState} from 'react'
import '../index.css'
import {Login} from '../pages/Login'
import { Home } from '../pages/Home';
import { Ranking } from '../pages/Ranking';
import { Results } from '../pages/Results';
import { Questions } from '../pages/Questions';
import { Route, Routes,useNavigate} from 'react-router-dom'
import { MyContextProvider, useMyContext } from '../context/themeContext';
import { supabase } from '../config/supabase';
function App() {
  const navigate = useNavigate()
   useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(!session){
        navigate('/Login')
      }
    })
  }, [])
  return (
      
      <MyContextProvider>
        {/* <h1 className='text-yellow-600'>hola</h1> */}
        <Routes>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Questions' element={<Questions />}></Route>
          <Route path='/Results' element={<Results/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Ranking' element={<Ranking/>}></Route>
        </Routes>
      </MyContextProvider>
  );
}

export default App;

