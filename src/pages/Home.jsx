import React, { useContext, useEffect, useState } from 'react'
import { Cards } from '../Components/Cards'
import { Menu } from '../Components/Menu';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';
import { useMyContext } from '../context/themeContext';
import { FaUserAstronaut } from "react-icons/fa";
const Home = () => {
  const navigate = useNavigate()
  const {currentUser, setCurrentUser} = useMyContext();
  const [loading, setLoading] = useState(true)
  const [openLogOutMenu, setOpenLogOutMenu] = useState(false)
  useEffect( ()  => {
  
    const checkTheUser = async () => {
      try {

        const res =    (await supabase.auth.getUser()).data.user
        console.log(res);
        if(res){
          console.log(currentUser);
          setCurrentUser({...res})
          setLoading(false)
        }else{
          navigate('/login')
        }
      }catch (err) {
        console.error(err)
        navigate('/login')
      }
    }
    checkTheUser()
  }, []) 
  return (
    
          <div className='h-screen w-screen bg-gradient-to-b from-indigo-600 to-indigo-300'>
            {!loading ? ( 
              <header className='text-slate-50 text-xl font-semibold flex justify-between p-5 mb-4'>
              {currentUser.user_metadata.provider === 'email'  ?  (
                  <>

                  Welcome Anonymous-{currentUser.id.slice(0,6)}

                    <FaUserAstronaut className='w-6 h-10 mr-3'/>
                  
                  </>
                
                ):
                ( 
                <>
                  Welcome {currentUser.user_metadata.full_name}
                  <button onClick={() => {setOpenLogOutMenu(!openLogOutMenu)}}>
                   <img className='w-14 h-14 rounded-full mr-3' src={currentUser.user_metadata.avatar_url }alt="user-picture" />
                   </button>
                </>

                )
                }
            </header>
            ): (
              <header className='text-slate-50 text-xl font-semibold flex justify-between p-5 mb-4'>

                <h1 className='text-slate-50 text-xl font-semibold'>loading...</h1>
              </header>
            )}
            
            <section className='bg-slate-200 rounded-2xl h-full'>
              <h3 className='font-bold text-xl p-4'>Categories</h3>
            

              <Cards/>
      
            </section>
            <Menu/>
          </div>
  )

}

export {Home}