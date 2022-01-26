import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";

import './Photos.scss'

const Photos = () => {

  return (
    <div className="events">
      <section className="event">
        <div className="event__img">
          <img src='/img/albums/zemlyansk/zemlyansk_01.jpg'/>
        </div>
        <div className="event__description">
          <h3 className="event__title">
            КОУ ВО Землянская школа-интернат для обучающихся с ограниченными возможностями для здоровья
          </h3>
        </div>
        <a href="#" className="event__show-more">
          <span>подробнее</span>
        </a>
      </section>
    </div>
  )
}

export default Photos
