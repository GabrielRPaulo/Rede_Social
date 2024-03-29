import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';



const posts = [

{
  id: 1,
  author: {
    avatarUrl: 'https://github.com/GabrielRPaulo.png',
    name: 'Gabriel Paulo',
    role: 'Web Developer',
  },
  content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto em ReactJs que simula uma página de uma rede social 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2023-07-06 20:00:00')
},
{
  id: 2,
  author: {
    avatarUrl: 'https://github.com/lucaspaulodev.png',
    name: 'Lucas Paulo',
    role: 'Web Developer',
  },
  content: [
      { type: 'paragraph', content: 'Olá Pessoal !'},
      { type: 'paragraph', content: ' Passando aqui para dizer que consegui o meu primeiro emprego na programação.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2023-07-04 20:00:00')
  },
];



export function App() {


  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      
    <Sidebar/>

    <main>
      {posts.map(post => {
        return(
          <Post 
            key={post.id}
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

export default App
