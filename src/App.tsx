import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5 pt-4 text-start">
        <Outlet />
      </div>
    </>
  )
}

export default App
