import './footer-mini.css'
import Apple from './Photos/apple-button.png'
import GooglePlay from './Photos/en-play-badgeSmall.png'

import React from 'react'

function FooterMini() {
  return (
    <div className='footer-mini'>
      <span>www.testbook.az © 2023</span>
      <div className='install-div'>
        <a href='#'>
            <img src={GooglePlay}/>
        </a>
        <a href='#'>
            <img src={Apple}/>
        </a>
      </div>
    </div>
  )
}

export default FooterMini
