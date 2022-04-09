import { IconArrowDown } from 'static'
import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.content}>
      <img src="/logo.png" alt="Logo da Blizzard" />

      <nav>
        <ul className={styles.navigation}>
          <li>
            Jogos <IconArrowDown />
          </li>
          <li>Esportes</li>
          <li>Loja</li>
          <li>Notícias</li>
          <li>Suporte </li>
        </ul>
      </nav>

      <div className={styles.buttons}>
        <button type="button">Criar conta</button>
        <button type="button">Logar</button>
      </div>
    </div>
  </header>
)
