import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallangesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/ChallangeBox.module.css'

export function ChallangeBox() {
    const { activeChallange, resetChallange, completedChallage } = useContext(ChallangeContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallangeSucceeded(){
        completedChallage()
        resetCountdown()
    }

    function handleChallangeFailed(){
        resetChallange()
        resetCountdown()
    }

    return(
        <div className={styles.challangeBoxContainer}>
            { activeChallange ? (
                <div className={styles.challangeBoxActive}>
                    <header>Ganhe {activeChallange.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallange.type}.svg`}/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallange.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challangeFailedButton} onClick={handleChallangeFailed}>Falhei</button>
                        <button type="button" className={styles.challangSucceededButton} onClick={handleChallangeSucceeded}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challangeBoxNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando os desafios.
                    </p>    
                </div>
            )}
            
        </div>
    )
}