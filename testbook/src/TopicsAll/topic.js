import React from 'react'
import TopicAlt from './topic-alt'
import './topic.css'
import Antonym from './Photos/antonym.jpeg'
import Aphorism from './Photos/aphorism.jpg'
import AtalarSoz from './Photos/atalar_sozleri.jpg'
import DimLogo from './Photos/dim_logo.jpg'
import Idiom from './Photos/idiom.jpg'
import Insha from './Photos/insha.jpg'
import Kurukulum from './Photos/kurikulum.png'
import Letife from './Photos/letifeler3.jpg'
import Mdq from './Photos/MDQ.jpg'
import Nagil from './Photos/nagil.jpg'
import Sinaq from './Photos/Sinaq.jpg'
import Tapmaca from './Photos/tapmaca.png'
import TestLow from './Photos/TestsLow.jpg'
import TQDKLogo from './Photos/TQDKLogo.png'
import WordCounter from './Photos/word-counter.jpg'
import Yaniltmaca from './Photos/Yaniltmaca.jpg'

function Topic() {
  return (
    <div className='topic'>
      <TopicAlt
      picture={WordCounter}
      head='İngilis dilində ən çox 5000 söz'
      />
      <TopicAlt
      picture={Antonym}
      head='Antonimlər'
      />
      <TopicAlt
      picture={Idiom}
      head='İdiomlar'
      />
      <TopicAlt
      picture={Yaniltmaca}
      head='Yanıtmacalar'
      />
      <TopicAlt
      picture={Tapmaca}
      head='Tapmacalar'
      />
      <TopicAlt
      picture={TestLow}
      head='Testlər'
      />
      <TopicAlt
      picture={Insha}
      head='İnşalar'
      />
      <TopicAlt
      picture={Nagil}
      head='Nağıllar'
      />
      <TopicAlt
      picture={AtalarSoz}
      head='Atalar Sözləri'
      />
      <TopicAlt
      picture={Aphorism}
      head='Aforizimlər'
      />
      <TopicAlt
      picture={Letife}
      head='Lətifələr'
      />
      <TopicAlt
      picture={Sinaq}
      head='Online sınaq imtahanı'
      />
      <TopicAlt
      picture={TQDKLogo}
      head='TQDK qebul sualları'
      />
      <TopicAlt
      picture={Kurukulum}
      head='Kurikulum'
      />
      <TopicAlt
      picture={Mdq}
      head='MDQ'
      />
      <TopicAlt
      picture={DimLogo}
      head='DİM'
      />
    </div>
  )
}

export default Topic
