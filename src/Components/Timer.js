import React from "react";
import {useNavigate} from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Timer = (props) => {

  const [timerMinutes, setTimerMinutes] = React.useState('00');
  const [timerSeconds, setTimerSeconds] = React.useState('00');
  
  const percentage = timerMinutes * 10 + (10 / 60 * timerSeconds);
  const navigate = useNavigate();

  let interval = React.useRef();

  const startTimer = () => {
    
    interval.current = setInterval(() => {
      const now = new Date();
      const totalTime =  props.currentDataObj - now;
      // const percentage = (totalTime / props.currentDataObj) * 100;
      // console.log(percentage);
      const minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((totalTime % (1000 * 60 )) / 1000);
      if (totalTime < 0){
        clearInterval(interval)
        setTimeout(() => {navigate('/Results')},1000)
      }else {
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
      
    }, 1000)

  }
  React.useEffect(() =>{
    startTimer();
    return () => {
      clearInterval(interval)
    }
  })

  return (
      <CircularProgressbar className="h-1/6 w-1/6 md:h-32"  value={percentage} text={`${timerMinutes}:${timerSeconds}`}
        strokeWidth={50}

        styles={buildStyles({
          strokeLinecap: "butt",
          textColor: 'white',
          pathColor: 'rgb(99 102 241)',
          textSize: '26px',
        })}
      />
    // <p>{timerMinutes}:{timerSeconds}</p>
  )
}


export {Timer}