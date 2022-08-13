import React from "react";
import {useNavigate} from 'react-router-dom'

const Timer = (props) => {

  const [timerMinutes, setTimerMinutes] = React.useState('00');
  const [timerSeconds, setTimerSeconds] = React.useState('00');
  const navigate = useNavigate();

  let interval = React.useRef();

  const startTimer = () => {
    
    interval.current = setInterval(() => {
      const now = new Date();
      const distance =  props.currentDataObj - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60 )) / 1000);
      if (distance < 0){
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
      <p>{timerMinutes} : {timerSeconds}</p>
  )
}


export {Timer}