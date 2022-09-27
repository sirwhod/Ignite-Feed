import { Post } from './Components/Post';
import {Header} from './Components/Header'
import { Sidebar } from './Components/Sidebar';

import styles from './app.module.css'

import './global.css';


// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: { 
      avatarURL: 'https://github.com/sirwhod.png',
      name: 'Rodrigo Brandão',
      role: 'Web Developer'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉jane.design/doctorcare' }
        
    ],
    publishedAt: new Date('2022-09-27 09:25:00'),
  },
  {
    id: 2,
    author: { 
      avatarURL: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉jane.design/doctorcare' }
        
    ],
    publishedAt: new Date('2022-09-10 09:25:00'),
  },
  {
    id: 3,
    author: { 
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉jane.design/doctorcare' }
        
    ],
    publishedAt: new Date('2022-09-17 09:25:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}
