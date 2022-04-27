import Head from 'next/head'

import styles from "../styles/Layout.module.css"
import Collage from "../components/Collage";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
        <title>Jtad´s cool art</title>
        <meta name="description" content="Jtad's cool art" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Collage/>
    </div>
  )
}
