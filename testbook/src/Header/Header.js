import React, {useState} from 'react'
import HeaderLogo from './Header-photos/testbook_64.png'
import './header.css'

function Header() {

    const [active, setActive]= useState('navbar')
    const navToggle = ()=>{
        active === 'navbar' ? 
        setActive('navbar nav-active'): 
        setActive('navbar');
    }
    
  return (
    <div className='header'>
      <div className='header-head'>
        <a href='#'>
            <img src={HeaderLogo} />
        </a>
        <a href='#'>
            <span>testbook.az</span>
        </a>
      </div>
      <div className={active}>
        <ul className='navbar-ul-one'>
            <li><a href='#'><i class="fa-sharp fa-solid fa-house"></i></a></li>
            <li><a href='#'>Testlər</a></li>
            <li><a href='#'>İnşalar</a></li>
            <li><a href='#'>Nağıllar</a></li>
            <li><a href='#'>Atalar sözləri</a></li>
            <li><a href='#'>Aforizmlər</a></li>
            <li><a href='#'>Lətifələr</a></li>
            <li><a href='#'>Tapmacalar</a></li>
            <li><a href='#'>Antonimlər</a></li>
        </ul>
        <ul className='navbar-ul-two'>
            <li><a href='#'>Daxil ol /</a></li>
            <li><a href='#'> Qeydiyyat</a></li>
        </ul>
      </div>
      <div className='res-div' onClick={navToggle}>
      <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Header


