import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment() {

    onDeleteComment(content)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/sirwhod.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Brandão</strong>
              <time title="26 de Setembro ás 10:08h" dateTime="2022-09-26 10:08:00" >Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash  size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}