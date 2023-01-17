import React from 'react'
import FooterLogo from '../Header/Header-photos/testbook_64.png'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-one'>
        <div className='footer-one-head'>
          <span>Faydalı Keçidlər</span>
        </div>
        <div className='footer-one-body'>
          <div className='f-body-left'>
            <ul>
              <li><a href='#'>Əsas səhifə</a></li>
              <li><a href='#'>Antonimlər</a></li>
              <li><a href='#'>Testlər</a></li>
              <li><a href='#'>İnşalar</a></li>
              <li><a href='#'>Atalar sözləri</a></li>
            </ul>
          </div>
          <div className='f-body-center'>
          <ul>
              <li><a href='#'>Yanıtmacalar</a></li>
              <li><a href='#'>İdiomlar</a></li>
              <li><a href='#'>Aforizmlər</a></li>
              <li><a href='#'>Lətifələr</a></li>
              <li><a href='#'>Tapmacalar</a></li>
            </ul>
          </div>
          <div className='f-body-right'>
          <ul>
              <li><a href='#'>İmtahan ballarınım...</a></li>
              <li><a href='#'>Online sınaq imtahanı</a></li>
              <li><a href='#'>Müəllimlərin diaqnostik...</a></li>
              <li><a href='#'>Haqqımizda</a></li>
              <li><a href='#'>Əlaqə</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-two'>
        <a href='#'><img src={FooterLogo}/></a>
        <a href='#'>Testbook</a>
        <a href='#'>Follow Page</a>
        <span>4.4K follows</span>
      </div>
    </div>
  )
}

export default Footer
