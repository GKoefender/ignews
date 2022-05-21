import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { stripe } from '../services/stripe'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

interface homeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home ({ product }: homeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg"></img>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1IuRPlAs0LkPfR10mTq0Gh6p')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    }
  }
}
