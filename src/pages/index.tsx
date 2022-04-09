import Head from 'next/head'

import { Games } from 'components/Games'
import { Banner } from 'components/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blizzard</title>
      </Head>
      <Banner />
      <Games />
    </>
  )
}
