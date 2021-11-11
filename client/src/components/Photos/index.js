import React from 'react'
import { NavLink } from 'react-router-dom'
import { SRLWrapper } from "simple-react-lightbox";


import './Photos.scss'
import ZemlyanskPhotos from './ZemlyanskPhotos';

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
    </div>
  )
}

export default Photos
