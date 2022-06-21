import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.css";

import { Avatar } from "./Avatar";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/eadafonso.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Edvaldo Afonso</strong>
              <time dateTime="2022-05-11 08:00:00" title="11 de Maio às 08:00">
                Cerca de 1 hora atrás
              </time>
            </div>

            <button title="Eliminar Comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Ead, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
