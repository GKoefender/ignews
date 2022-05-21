import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

function GithubSignInButton () {
  const { data: session } = useSession()

  return (
    <button type="button" className={styles.githubContainer} onClick={() => session ? signOut() : signIn('github')}>
      <FaGithub size={24} color={session ? '#04D361' : '#EBA417'} />
      <span>{session ? session.user.name : 'Sign in with GitHub'}</span>
      {session && <FiX color="#737380" size={24} className={styles.closeButton} />}
    </button>
  )
}

export { GithubSignInButton }
