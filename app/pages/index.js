import Head from 'next/head'
import Link from 'next/link'

import colors from '../data/colors.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colors!</title>
        <meta name="description" content="App that displays pretty colors to learn Next!" />
      </Head>
      {colors.map}
    </div>
  )
}
