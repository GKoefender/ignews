import { GithubSignInButton } from './GithubSignInButton'

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

        <GithubSignInButton />
      </div>
    </header>
  )
}

export { Header }
