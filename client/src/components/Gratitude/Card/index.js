import React from 'react'

import './Card.scss'

{/* <a href="/files/Licence.pdf" target="_blank">licence</a> */}

const Card = (props) => {

  return (
    <div className="gratitude__card">
      <div className="gratitude__card-image">
        <a href={props.path} target="_blank">
          <img src={props.preview}/>
        </a>
      </div>
      <div className="gratitude__card-title">
        {props.title}
      </div>
    </div>
  )
}

export default Card
