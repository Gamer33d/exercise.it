import { useState, useEffect, useContext} from "react";
import { CountdownContext } from '../contexts/CountdownContext'
import style from "../styles/components/Coutdown.module.css";


export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)
   

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    
  return (
    <div>
      <div className={style.coutdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button disabled className={style.CountdownButton} >
          Ciclo Encerrado
        </button>
      ) : (
        <>
        { isActive ? (
          <button type="button" className={`${style.CountdownButton} ${style.CountdownButtonActive}`} onClick={resetCountdown}>
            Abandonar Ciclo
          </button>
  
        ) : (
          <button type="button" className={style.CountdownButton} onClick={startCountdown}>
            Iniciar Ciclo
          </button>
        )}
        </>
      )}

      
        

      
    </div>
  );
}
