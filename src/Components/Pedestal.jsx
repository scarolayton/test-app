import React from 'react'
import { CgGhostCharacter } from "react-icons/cg";

const Pedestal = () => {
    return(
        <section className=' flex justify-around h-80 items-center pt-10 p-2'>
        <div className='self-end text-center flex flex-col justify-center'>
          <div className=' bg-slate-50 rounded-full text-center h-20 p-1 self-start shadow-2xl mb-3 ml-3 shadow-black'> 
            <p className='text-2xl text-gray-400   font-bold drop-shadow-lg shadow-black ' style={{marginTop: '-30px', marginLeft: '-30px'}}>2nd</p>
            <CgGhostCharacter className='text-7xl m-auto'/>
          </div>
          <h3 className='text-slate-50 font-bold text-ln'>Madelyn Diaz</h3>
          <p className='text-slate-50 text-center text-lg font-semibold bg-gray-400 rounded-2xl bg-opacity-50'>2000 pts</p> 
        </div>
        <div className='self-start text-center flex flex-col justify-center'>
          <div className=' bg-slate-50 rounded-full text-center h-20 p-1 self-start shadow-2xl mb-3 ml-3 shadow-black'> 
            <p className='text-3xl text-yellow-500   font-bold drop-shadow-lg shadow-black ' style={{marginTop: '-30px', marginLeft: '-30px'}}>1fst</p>
            <CgGhostCharacter className='text-7xl m-auto'/>
          </div>
          <h3 className='text-slate-50 font-bold text-ln'>Madelyn Diaz</h3>
          <p className='text-slate-50 text-center text-lg font-semibold bg-gray-400 rounded-2xl bg-opacity-50'>2000 pts</p>  
        </div>
        <div className='self-end text-center flex flex-col justify-center'>
          <div className=' bg-slate-50 rounded-full text-center h-20 p-1 self-start shadow-2xl ml-3 mb-3 shadow-black'> 
            <p className='text-2xl text-orange-500   font-bold drop-shadow-lg shadow-black ' style={{marginTop: '-25px', marginLeft: '-30px'}}>3rd</p>
            <CgGhostCharacter className='text-7xl m-auto'/>
          </div>
          <h3 className='text-slate-50 font-bold text-ln'>Madelyn Diaz</h3>
          <p className='text-slate-50 text-center text-lg font-semibold bg-gray-400 rounded-2xl bg-opacity-50'>2000 pts</p> 
        </div>
      </section>
    )
}

export {Pedestal}