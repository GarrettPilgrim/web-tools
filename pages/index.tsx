import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Card from '../components/card/card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card name="Name"/>
      </main>
    </>
  )
}
