import './App.css'
import HomePage from './Pages/HomePage/HomePage'
// import SingInPage from './Pages/SingInPage/SingInPage.tsx'
import { Header } from './components/Header/Header.tsx'


function App() {

  return (
    <div className='app'>
      <Header/>
      <HomePage/>
      {/* <SingInPage/> */}
    </div>
  )
}

export default App
