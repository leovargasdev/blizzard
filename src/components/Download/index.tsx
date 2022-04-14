import {
  IconApple,
  IconBuy,
  IconCheckGroup,
  IconDots,
  IconSmartPhone
} from 'static'
import styles from './styles.module.scss'

export const Download = () => (
  <section className={styles.container}>
    <div className={styles['image-ilustration']}>
      <div className={styles.information}>
        <div className={styles.content}>
          <img src="/logo-battle-net.png" alt="" />
          <h2>Baixe agora o battle.net</h2>

          <ul>
            <li>
              <IconCheckGroup /> Seus jogos em um só lugar
            </li>
            <li>
              <IconDots /> Conecte-se aos seus amigos
            </li>
            <li>
              <IconBuy /> Compre jogos e itens digitais
            </li>
          </ul>

          <button>
            <IconApple /> Baixar para o MacOS
          </button>

          <div className={styles['download-mobile']}>
            <IconSmartPhone />
            <p>
              Também disponível como <a href="">aplicativo móvel</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
