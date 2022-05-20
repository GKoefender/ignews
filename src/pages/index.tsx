import React from 'react'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home () {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for R$9,98 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg"></img>
      </main>
    </>
  )
}
