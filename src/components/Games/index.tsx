import Link from 'next/link'

import {
  IconBattleNet,
  IconLink,
  IconNintendo,
  IconPlaystation,
  IconXbox
} from 'static'

import styles from './styles.module.scss'

export const Games = () => (
  <section className={styles.container}>
    <div>
      <div className={styles.content}>
        <small>Games</small>
        <h2>Jogos exclusivos</h2>

        <div className={styles.platforms}>
          <IconBattleNet />
          <IconNintendo />
          <IconXbox />
          <IconPlaystation />
        </div>

        <Link href="/games">
          <a>
            <IconLink />
            Ver todos jogos
          </a>
        </Link>
      </div>

      <h1>olar</h1>
    </div>
  </section>
)
