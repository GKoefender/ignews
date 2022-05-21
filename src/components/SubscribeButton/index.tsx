import styles from './styles.module.scss'

interface subscribeButtonProps {
  priceId: string
}

function SubscribeButton ({ priceId }: subscribeButtonProps) {
  return (
    <button className={styles.container}>
      <span>Subscribe now</span>
    </button>
  )
}

export { SubscribeButton }
