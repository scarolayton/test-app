import React, { useEffect } from 'react'
import { Cards } from '../Components/Cards'
import { Menu } from '../Components/Menu';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const navigate = useNavigate()
  const user = auth.currentUser
  console.log(user);
  
  useEffect(()=> {

    if(user === null){

      navigate('/Login')
      
    }
  }, [navigate])
  if(user === null){
    return(<h1>por favor registrese</h1>)
  }
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-indigo-600 to-indigo-300'>
      <header className='text-slate-50 flex justify-between p-5 mb-4'>
        <h1 className='font-semibold text-2xl'>{user.displayName}</h1>
        <img className='w-14 h-14 rounded-full' src={user.photoURL} alt="user-picture" />
      </header>
      <section className='bg-slate-200 rounded-2xl h-full'>
        <h3 className='font-bold text-xl p-4'>Categories</h3>
      

        <Cards/>

      </section>
      <Menu/>
    </div>
  )
}


export {Home}