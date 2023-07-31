import React from 'react'

const ProgressBarQuestions = (props) => {
  const percentageBar = ((props.currentQuestion + 1) * 10) + '%';
  console.log(percentageBar);
  return(
    <div className='w-2/4 h-2 rounded-2xl bg-gray-500'>
      <div className='h-2  bg-white rounded-2xl  duration-1000 ' 
        style={{width: percentageBar}}
      >

      </div>
    </div>
  );
}


export {ProgressBarQuestions}