import React from 'react'
import { BiMath } from "react-icons/bi";
import { RiEnglishInput } from "react-icons/ri";
import { AiOutlineRead } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";  
import { MdOutlineScience } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRandom } from "react-icons/fa";
const Cards = () => {
  const categoriesArray = [{
    'id': 1,
    'name' : 'Math',
    'symbol' : <BiMath className='text-20'/>,
    'color' : '#77EC92'
   },
   {
    'id': 2,
    'name' : 'English',
    'symbol' : <RiEnglishInput/>, 
    'color' : '#A6E0EC'
   },
   {
    'id': 3,
    'name' : 'Spanish',
    'symbol' : <AiOutlineRead/>, 
    'color' : '#C29AEC'
   },{
    'id': 4,
    'name': 'Social Science',
    'symbol' : <BsPerson/>,
    'color' : '#ECA6E1'
   },{
    'id': 5,
    'name': 'Science',
    'symbol' : <MdOutlineScience/>,
    'color' : '#EA7B80'
   },{
    'id': 6,
    'name': 'Random',
    'symbol' : <FaRandom/>,
    'color' : '#E9A089'
   }
  ];
  return (
    <div className='grid h-3/4 gap-6 grid-cols-2  p-4'>
      {categoriesArray.map((categorie) => (
        <div key={categorie.id} className=' flex flex-col rounded-2xl justify-center items-center' style={{background: categorie.color}}>
          <Link to={'/Questions'} className='text-4xl bg-slate-300 p-3 rounded-xl bg-opacity-30 inline-block text-slate-50'>{categorie.symbol}</Link>
          <p className='text-slate-50 font-semibold mt-3'>{categorie.name}</p>
        </div>
      ))}
    </div>
  )
}


export {Cards}