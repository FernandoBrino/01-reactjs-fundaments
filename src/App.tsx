import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/FernandoBrino.png",
      name: "Fernando Brino",
      role: "Intern GBM"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa ð'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-18 13:28:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/RodolfoNovo.png",
      name: "Rodolfo Junior",
      role: "Unemployed"
    },
    content: [
      {type: 'paragraph', content: 'Boaaað'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz da Rocket pra aprender sobre HTML ð'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-17 11:28:00')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}   
        </main>
      </div>
    </>
  )
}



