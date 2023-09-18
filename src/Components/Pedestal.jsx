import React, { useEffect, useState } from 'react'
import { CgGhostCharacter } from "react-icons/cg";
import { supabase } from '../config/supabase';
const Pedestal = () => {
    const [firstThree, setFirstThree] = useState([]);
    const [restOfTheTable, setRestOfTheTable] = useState([]) 
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      const bringTheRanking = async () => {
        try {
          const res =  (await supabase.from('users').select('*').order('points', {ascending: false})).data
          setFirstThree(res.slice(0,3))
          setRestOfTheTable(res.slice(2,9))
          setLoading(false)

        } catch (error) {
          console.error(error)
        }
      }
      bringTheRanking()
      console.log(firstThree[1]);
    }, [])
    return(
      <>
      {!loading ? ( 
        <>
          <div className="container mx-auto p-4">
            <div className="grid  grid-cols-3 gap-4 align-bottom justify-end text-center">
              <div className="bg-gray-300 p-4 rounded-lg sm:h-44 mt-16 ">
                <h2 className="text-xl font-semibold mb-2">2nd Place</h2>
                {firstThree[1].avatar_url ? (
                   <img className='rounded-full w-14 m-auto' src={firstThree[1].avatar_url} alt="avatar" />
                  ) : (
                   <CgGhostCharacter className='text-5xl m-auto'/>

                  )}
                <p>{firstThree[1].user_name ? firstThree[1].user_name.slice(0,8) : `Anon.${firstThree[1].userId.slice(0,4)}`}</p>
                <p>Score: {firstThree[1].points}</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg sm:h-60">
                <h2 className="text-xl font-semibold mb-2">1st Place</h2>
                {firstThree[0].avatar_url ? (
                   <img className='rounded-full w-14 m-auto' src={firstThree[0].avatar_url} alt="avatar" />
                  ) : (
                   <CgGhostCharacter className='text-5xl m-auto'/>

                  )}
                <p>{firstThree[0].user_name ? firstThree[0].user_name.slice(0,8) : `Anon.${firstThree[0].userId.slice(0,4)}`}</p>
                <p>Score: {firstThree[0].points}</p>
              </div>
              <div className="bg-orange-300 p-4 rounded-lg sm:h-40 mt-20">
                <h2 className="text-xl font-semibold mb-2">3rd Place</h2>
                {firstThree[2].avatar_url ? (
                   <img className='rounded-full w-14 m-auto' src={firstThree[2].avatar_url} alt="avatar" />
                  ) : (
                   <CgGhostCharacter className='text-5xl m-auto'/>

                  )}
                <p>{firstThree[2].user_name ? firstThree[1].user_name.slice(0,8) : `Anon.${firstThree[2].userId.slice(0,4)}`}</p>
                <p>Score: {firstThree[2].points}</p>
              </div>
            </div>
          </div>
{/*         
                  <section className=' flex justify-around h-80 items-center pt-10 p-2'>
                    <div className='self-end text-center flex flex-col justify-center'>
                      <div className=' bg-slate-50 rounded-full text-center h-20 p-1 self-start shadow-2xl mb-3 ml-3 shadow-black'> 
                        <p className='text-2xl text-gray-400   font-bold drop-shadow-lg shadow-black ' style={{marginTop: '-30px', marginLeft: '-30px'}}>2nd</p>
                        {firstThree[1].avatar_url ? (
                          <img className='rounded-full w-14 m-auto' src={firstThree[1].avatar_url} alt="avatar" />
                          ) : (
                          <CgGhostCharacter className='text-7xl m-auto'/>

                        )}
                      </div>
                      <h3 className='text-slate-50 font-bold text-ln'>{firstThree[1].user_name ? firstThree[1].user_name.slice(0,8) : `Anonymous-${firstThree[1].userId.slice(0,4)}`}</h3>
                      <p className='text-slate-50 text-center text-lg font-semibold bg-gray-400 rounded-2xl bg-opacity-50'>{firstThree[1].points}pts</p> 
                    </div>
                    <div className='self-start text-center flex flex-col justify-center'>
                      <div className=' bg-slate-50 rounded-full text-center h-20 p-1 self-start shadow-2xl mb-3 ml-3 shadow-black'> 
                        <p className='text-3xl text-yellow-500   font-bold drop-shadow-lg shadow-black ' style={{marginTop: '-30px', marginLeft: '-30px'}}>1fst</p>
                          {firstThree[0].avatar_url ? (
                            <img src={firstThree[0].avatar_url} alt="avatar" />
                            ) : (
                            <CgGhostCharacter className='text-7xl m-auto'/>

                          )}                      
                        </div>
                      <h3 className='text-slate-50 font-bold text-ln'>{firstThree[0].user_name ? firstThree[0].user_name : `Anonymous-${firstThree[0].userId.slice(0,4)}`}</h3>
                      <p className='text-slate-50 text-center text-lg font-semibold bg-gray-400 rounded-2xl bg-opacity-50'>{firstThree[0].points}pts</p>  
                    </div>
                    <div className='self-end text-center flex flex-col justify-center'>
                      <div className=' bg-slate-50 rounded-full text-center h-20 p-1 self-start shadow-2xl ml-3 mb-3 shadow-black'> 
                        <p className='text-2xl text-orange-500   font-bold drop-shadow-lg shadow-black ' style={{marginTop: '-25px', marginLeft: '-30px'}}>3rd</p>
                          {firstThree[2].avatar_url ? (
                            <img src={firstThree[2].avatar_url} alt="avatar" />
                            ) : (
                            <CgGhostCharacter className='text-7xl m-auto'/>

                          )}                        
                          </div>
                      <h3 className='text-slate-50 font-bold text-ln'>{firstThree[2].user_name ? firstThree[2].user_name : `Anonymous-${firstThree[2].userId.slice(0,4)}`}</h3>
                      <p className='text-slate-50 text-center text-lg font-semibold bg-gray-400 rounded-2xl bg-opacity-50'>{firstThree[2].points}pts</p> 
                    </div>
                </section> */}
                <article className='bg-gray-200 h-fit p-4 mt-6 mb-10 rounded-2xl m-3 md:w-11/12 md:m-auto md:mb-18'>
                      {restOfTheTable.map((card, index) => (
                        <div className='flex p-2 items-center bg-slate-50 rounded-2xl mb-4 mt-4'>
                          <p className='mr-3 border-gray-300 border-solid border-2 w-6 text-center rounded-full'>{index + 3}</p>
                          {card.avatar_url ? (
                            <img className='w-10 text-6xl mr-3 rounded-full' src={card.avatar_url} alt="avatar" />
                            ) : (
                            <CgGhostCharacter className='w-10 text-6xl mr-3'/>

                          )}                              
                          <div>
                              <p className='font-bold text-lg'>{card.user_name ? card.user_name : `Anonymous-${card.userId.slice(0,4)}`}</p>
                              <p className='text-gray-400 font-semibold'>{card.points}pts</p>
                          </div>
                        </div>
                      ))}
                </article>
                  </>
         ): (
          <h1 className='text-slate-50 text-xl font-semibold ml-12'>loading...</h1>
          )}
        </>
    )
}

export {Pedestal}