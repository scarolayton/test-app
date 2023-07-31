import React from 'react'
import { Cards } from '../Components/Cards'
import { CgGhostCharacter } from "react-icons/cg";
import { Menu } from '../Components/Menu';
const Home = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-indigo-600 to-indigo-300'>
      <header className='text-slate-50 flex justify-between p-5 mb-4'>
        <h1 className='font-semibold text-2xl'>Madelyn Diaz</h1>
        <CgGhostCharacter className='text-4xl'/>
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