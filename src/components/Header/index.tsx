
import styles from './styles.module.scss'

function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div>
          <img src="/images/logo.svg" alt="logo" />
          <nav>
            <a className={styles.active}>Home</a>
            <a>Posts</a>
          </nav>
        </div>

        <div className={styles.githubContainer}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
          <span>Sign in with GitHub</span>
        </div>
      </div>
    </header>
  )
}

export { Header }
