import Link from 'next/link'

import {
  IconBattleNet,
  IconLink,
  IconNintendo,
  IconPlaystation,
  IconPoints,
  IconXbox
} from 'static'

import games from 'data/games.json'

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

      <div className={styles.games}>
        {games.map(game => (
          <div className={styles.game} key={game.name}>
            <span>
              <img src={game.image} alt={`Imagem do jogo ${game.name}`} />
            </span>
            <strong>{game.name}</strong>
            <p>{game.category}</p>
          </div>
        ))}
        <div className={styles['more-games']}>
          <img src="/logo.png" alt="Logo da blizzard" />
          <a href="">
            <IconPoints />
            Ver todos os jogos
          </a>
        </div>
      </div>
    </div>
  </section>
)
