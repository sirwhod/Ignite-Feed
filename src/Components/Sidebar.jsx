import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

import coverSidebar from '../assets/cover-sidebar.png'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverSidebar} alt="Capa do Perfil na Sidebar" />

      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/61847070?v=4" 
        />

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