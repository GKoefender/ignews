import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

function GithubSignInButton () {
  const [userAuthenticated, setUserAuthenticated] = useState(false)

  return (
    <button type="button" className={styles.githubContainer} onClick={() => setUserAuthenticated(!userAuthenticated)}>
      <FaGithub size={24} color={userAuthenticated ? '#04D361' : '#EBA417'} />
      <span>{userAuthenticated ? 'Gustavo Koefender' : 'Sign in with GitHub'}</span>
      {userAuthenticated && <FiX color="#737380" size={24} className={styles.closeButton} />}
    </button>
  )
}

export { GithubSignInButton }
