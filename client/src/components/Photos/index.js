import React from 'react'
import { NavLink } from 'react-router-dom'

import './Photos.scss'

const Photos = () => {

  return (
    <div className="photos">
        <NavLink 
            className="photos__item"
            to="/photos/zemlyansk">

          <div className="photos__preview"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/zemlyansk/zemlyansk_09.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: '100% auto',
          }}></div>
          <div className="photos__name">
            КОУ ВО Землянская школа-интернат для обучающихся с ограниченными возможностями для здоровья
          </div>
        </NavLink>
        <NavLink 
            className="photos__item"
            to="/photos/bobrov">

          <div className="photos__preview"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/bobrov/bobrov_02.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: '100% auto',
          }}></div>
          <div className="photos__name">
            КОУ ВО Бобровская специальная школа-интернат для детей-сирот и детей, оставшихся без попечения родителей, с ограниченными возможностями здоровья
          </div>
        </NavLink>
        <NavLink 
            className="photos__item"
            to="/photos/rudny">

          <div className="photos__preview"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/rudny/rudny_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
          <div className="photos__name">
            КОУ ВО "Руднянская школа интернат"
          </div>
        </NavLink>
    </div>
  )
}

export default Photos
