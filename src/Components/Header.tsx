import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Header() {
  const [currentMode, setCurrentMode] = useState('light');

  const changeAppMode = () => {
    const bodyTag = document.getElementsByTagName("body")[0];
    bodyTag.classList.toggle("darkMode");
    setCurrentMode((bodyTag.classList.contains("darkMode") ? 'dark' : 'light'))
  }
  return (
    <>
      <nav className= {`navbar navbar-expand-sm fixed-top navbar-${currentMode} bg-${currentMode}`}>
        <div className="container-fluid">
          <div className='col-3'>
            <NavLink className="navbar-brand mb-0 h1" to={'/'}>Countries</NavLink>
          </div>
          <div className='col menubar'>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ms-auto me-2'>
                <li className='nav-item'><NavLink className='nav-link' to={'/'}>Home</NavLink></li>
                <li className='nav-item'><NavLink className='nav-link' to={'/Country'}>Country</NavLink></li>
                <li className='nav-item'><NavLink className='nav-link' to={'/About'}>About</NavLink></li>
              </ul>
            </div>
            <span className="navbar-text modeLabel" onClick={changeAppMode}>
              {
                currentMode == "light" ? <><FaMoon /> Dark Mode</> : <><FaSun /> Light Mode</>
              }
            </span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
