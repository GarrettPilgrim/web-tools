import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getSortedTools } from "../lib/tools";
import CardGrid from '../components/card-grid/card-grid';


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
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardGrid props={allTools} />
    </>
  )
}
