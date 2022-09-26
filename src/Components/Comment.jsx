import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/sirwhod.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Brandão</strong>
              <time title="26 de Setembro ás 10:08h" dateTime="2022-09-26 10:08:00" >Cerca de 1h atrás</time>
            </div>

            <button title="Excluir"></button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          Aplaudir
        </footer>
      </div>
    </div>
  )
}