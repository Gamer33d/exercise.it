import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/CompletedChallanges.module.css'

export function CompletedChallange(){
    const {challangesCompleted} = useContext(ChallangeContext)

    return(
        <div className={styles.CompletedChallangesContainer}>
            <span>Desafios completos</span>
            <span>{challangesCompleted}</span>
        </div>
    )
}