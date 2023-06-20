import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './assets/App.module.css';

import './global.css';

 

function App() {


  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      
    <Sidebar/>

    <main>
      <Post/>

      <Post/>
      
      <h1>  </h1>
    </main>
  </div>

    
   
  </div>
  )
}

export default App
