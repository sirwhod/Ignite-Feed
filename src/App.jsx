import { Post } from './Components/Post';
import {Header} from './Components/Header'
import { Sidebar } from './Components/Sidebar';

import styles from './app.module.css'

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />

        </main>
      </div>
      
    </div>
  )
}
