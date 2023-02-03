import Head from 'next/head'
import Image from 'next/image'
<<<<<<< HEAD
import styles from '../styles/Home.module.css'
import { getSortedTools } from "../lib/tools";
import CardGrid from '../components/card-grid/card-grid';
=======
import { Inter } from '@next/font/google'
import Card from '../components/card/card'
>>>>>>> ecd599070b3304df09a8db3149890327a24f2918


export async function getStaticProps() {
  const allTools = getSortedTools();
  return {
    props: {
      allTools,
    },
  };
}

export default function Home({ allTools }) {
  return (
    <>
      <Head>
        <title>Web Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <CardGrid props={allTools} />
=======
      <main>
        <Card name="Name"/>
      </main>
>>>>>>> ecd599070b3304df09a8db3149890327a24f2918
    </>
  )
}
