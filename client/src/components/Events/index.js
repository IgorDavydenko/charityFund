import React from 'react'
import { NavLink } from 'react-router-dom'

import './Events.scss'

const Events = () => {

  return (
    <div className="events">

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/anna/anna_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Аннинская специальная общеобразовательная школа
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/anna">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/zemlyansk/zemlyansk_09.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Землянская школа-интернат<br/>
            для обучающихся с ограниченными возможностями для здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/zemlyansk">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
      <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/bobrov/bobrov_02.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Бобровская специальная школа-интернат<br/>
            для детей-сирот и детей, оставшихся без попечения родителей, с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/bobrov">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        {/* <div className="event__img"> */}
          {/* <img src='/img/albums/rudny/rudny_01.jpg'/> */}
        {/* </div> */}
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/rudny/rudny_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Руднянская школа интернат
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
