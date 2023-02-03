import Head from 'next/head'
import styles from '../styles/Home.module.scss'
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
        <title>Web Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Web Tools</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi fugiat asperiores hic animi labore saepe, maiores, maxime illo recusandae rem exercitationem nulla consequatur ea obcaecati, odit laboriosam. Sint, in natus.</p>
      <CardGrid props={allTools} />
    </>
  )
}
