import Head from 'next/head'
import {GetServerSideProps} from 'next'


import { CompletedChallange } from "../components/CompletedChallanges";
import { Countdown } from "../components/Coutdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallangeBox } from "../components/ChallangeBox";

import styles from "../styles/pages/Home.module.css";




import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallangesProviders } from '../contexts/ChallangesContext';

interface HomeProps{
  level: number;
  currentExperience: number;
  challangesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallangesProviders level={props.level} currentExperience={props.currentExperience} challangesCompleted={props.challangesCompleted}>
          <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>

 
      <ExperienceBar />

      <CountdownProvider>

      <section>
        <div>
          <Profile />
          <CompletedChallange />
          <Countdown />
        </div>
        <div>
         <ChallangeBox />
        </div>
      </section>

      </CountdownProvider>


    </div>
    </ChallangesProviders>

  )
}

//Funciona so em paginas, nao em componentes

//Executa isso primeiro

//Tudo que eu faço aqui executa no node
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, challangesCompleted} = ctx.req.cookies

  // console.log('Level: ' + level)
  // console.log('currentExperience: ' + currentExperience)
  // console.log('challangesCompleted: ' + challangesCompleted)

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challangesCompleted: Number(challangesCompleted)
    }
  }
}
