import React from 'react'
import { Menu } from '../Components/Menu'
import { Pedestal } from '../Components/Pedestal'
import { LeaderboardCard } from '../Components/LeaderboardCard'
const Ranking = () => {
  return (
    <div className='h-auto min-h-screen w-screen pb-16  bg-gradient-to-b from-indigo-600 to-indigo-300'>
      <h1 className='text-center text-slate-50 text-3xl font-semibold pt-5 mb-5'>Leaderboard</h1>
      <Pedestal/>
      <Menu/>
      
    </div>
    
  )
}


export {Ranking}