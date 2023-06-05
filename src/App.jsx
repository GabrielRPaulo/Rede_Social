import { Header } from './components/Header';
// import { Post } from './Post'

import styles from './assets/App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';
 

function App() {


  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      
    <Sidebar/>

    <main>
      <h1> Hello World </h1>
    </main>
  </div>

    
   
  </div>
  )
}

export default App
