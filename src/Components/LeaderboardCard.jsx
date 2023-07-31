import React from 'react'
import { CgGhostCharacter } from "react-icons/cg";
const LeaderboardCard = () => {
    return(

    <div className='flex p-2 items-center bg-slate-50 rounded-2xl mb-4 mt-4'> 
        <p className='mr-3 border-gray-300 border-solid border-2 w-6 text-center rounded-full'>4</p>
        <CgGhostCharacter className='w-10 text-6xl mr-3'/>
        <div>
            <p className='font-bold text-lg'>Madelyn Diaz</p>
            <p className='text-gray-400 font-semibold'>2000 points</p>
        </div>
    </div>
    )
}

export {LeaderboardCard}