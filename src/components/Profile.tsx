import { useContext } from "react";
import { ChallangeContext } from "../contexts/ChallangesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){
    const { level } = useContext(ChallangeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Gamer33d.png" alt=""/>
            <div>
                <strong>Guilherme Dalbeni</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>    
                    Level {level}
                </p>
            </div>
        </div>
    )
}