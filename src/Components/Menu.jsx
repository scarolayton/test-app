import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import {  NavLink } from 'react-router-dom';
const Menu = () => {
    
        
    return(
            <div  className='fixed h-14 bg-white bottom-0 flex w-screen justify-around items-center rounded-t-2xl'>
                <NavLink className={(navData) => navData.isActive ? 'text-indigo-500' : 'text-black'} to={'/'}><AiOutlineHome className='text-3xl '/></NavLink>
                <NavLink   className={(navData) => navData.isActive ? 'text-indigo-500' : 'text-black'} to={'/Ranking'}><FaRankingStar className='text-3xl '/></NavLink>

                
                
            </div>  
    )
   
}


export {Menu}