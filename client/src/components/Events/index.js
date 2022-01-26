import React from 'react'
import { NavLink } from 'react-router-dom'

import './Events.scss'

const Events = () => {

  return (
    <div className="events">

      <section className="event">
        <div className="event__img">
          <img src='/img/albums/zemlyansk/zemlyansk_09.jpg'/>
        </div>
        <div className="event__description">
          <h3 className="event__title">
            КОУ ВО Землянская школа-интернат для обучающихся с ограниченными возможностями для здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/zemlyansk">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img">
          <img src='/img/albums/bobrov/bobrov_02.jpg'/>
        </div>
        <div className="event__description">
          <h3 className="event__title">
            КОУ ВО Бобровская специальная школа-интернат для детей-сирот и детей, оставшихся без попечения родителей, с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/bobrov">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img">
          <img src='/img/albums/rudny/rudny_01.jpg'/>
        </div>
        <div className="event__description">
          <h3 className="event__title">
            КОУ ВО "Руднянская школа интернат"
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/rudny">
          <span>подробнее</span>
        </NavLink>
      </section>

    </div>
  )
}

export default Events
