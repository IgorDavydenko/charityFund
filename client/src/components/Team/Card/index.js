import React from 'react'

import './Card.scss'

const Card = (props) => {

  return (
    <div className="team__card">
      <div className="card__image">
        <img src={props.avatarPath}/>
      </div>
      <div className="card_member-name">
        {props.name}
      </div>
      <div className="card_member-role">
        {props.role}
      </div>
    </div>
  )
}

export default Card
