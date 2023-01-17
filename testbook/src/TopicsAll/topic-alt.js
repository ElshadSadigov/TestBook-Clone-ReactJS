import React from 'react'
import './topic-alt.css'

function TopicAlt(props) {
  return (
    <div className='topic-alt'>
      <img src={props.picture}/>
      <span>{props.head}</span>
    </div>
  )
}

export default TopicAlt
