import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import { Header } from './components/Header/Header.tsx'


function App() {

  return (
    <div className='app'>
      <Header/>
      <HomePage/>
    </div>
  )
}

export default App
