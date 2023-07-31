import React from 'react'
import { Menu } from '../Components/Menu'
import { Pedestal } from '../Components/Pedestal'
import { LeaderboardCard } from '../Components/LeaderboardCard'
const Ranking = () => {

  return (
    <div className='h-max w-screen  bg-gradient-to-b from-indigo-600 to-indigo-300'>
      <h1 className='text-center text-slate-50 text-3xl font-semibold pt-5 mb-5'>Leaderboard</h1>
      <Pedestal/>
      <Menu/>
      <article className='bg-gray-200 h-fit p-4 mt-6 mb-10 rounded-2xl m-3'>
        <LeaderboardCard/>
        <LeaderboardCard/>
        <LeaderboardCard/>
        <LeaderboardCard/>
        <LeaderboardCard/>
        <LeaderboardCard/>
        <LeaderboardCard/>
      </article>
    </div>
    
  )
}


export {Ranking}