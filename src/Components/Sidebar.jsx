import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

import coverSidebar from '../assets/cover-sidebar.png'
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverSidebar} alt="Capa do Perfil na Sidebar" />

      <div className={styles.profile}>

        <Avatar  src="https://github.com/sirwhod.png" />

        <strong>Rodrigo Brandão</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}