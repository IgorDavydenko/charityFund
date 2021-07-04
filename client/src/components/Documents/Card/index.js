import React from 'react'

import './Card.scss'

{/* <a href="/files/Licence.pdf" target="_blank">licence</a> */}

const Card = (props) => {

  return (
    <div className="card">
      <div className="card__image">
        <a href={props.path} target="_blank">
          <img src={props.preview}/>
        </a>
      </div>
      <div className="card_title">
        {props.title}
      </div>
    </div>
  )
}

export default Card
