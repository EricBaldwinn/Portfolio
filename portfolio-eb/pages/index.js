import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import  HomePage  from './homePage'
import  Projects  from './projects'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric Baldwin&apos;s Portfolio</title>
      </Head>
      <Navbar />
      <HomePage />
      <Projects />
    </div>
  )
}
