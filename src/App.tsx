import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import { Header } from './components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingInPage from './Pages/SingInPage/SingInPage.tsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.tsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: 'sing-in',
    element: <SingInPage/>
  }
]);


function App() {

  return (
    <div className='app'>
      <Header/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
