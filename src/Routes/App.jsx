import React, {useState} from 'react'
import '../index.css'
import {Login} from '../pages/Login'
import { Home } from '../pages/Home';
import { Ranking } from '../pages/Ranking';
import { Results } from '../pages/Results';
import { Questions } from '../pages/Questions';
import { Route, Routes,Switch} from 'react-router-dom'
import { themeContext } from '../context/themeContext';

function App() {
  const [score, setScore] = useState(0);
  const [itIsSigned , setItIsSigned] = useState(false);
  return (
      
      <themeContext.Provider value={{score, setScore}}>
        {/* <h1 className='text-yellow-600'>hola</h1> */}
        <Routes>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Questions' element={<Questions />}></Route>
          <Route path='/Results' element={<Results/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Ranking' element={<Ranking/>}></Route>
        </Routes>
      </themeContext.Provider>
  );
}

export default App;

