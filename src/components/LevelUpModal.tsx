import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
    const { level, closeLevelUpModel } = useContext(ChallangeContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{ level }</header>

                <strong>Parabéns!</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModel}>
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
        </div>
    )
}