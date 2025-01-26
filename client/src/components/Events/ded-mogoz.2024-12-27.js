
import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import { NavLink } from 'react-router-dom';

import './Events.scss'

const DedMoroz = () => {

  return (
    <div className="album">
      <NavLink className="album__back"
        to="/events">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.151 219.151"><path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575 C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575 c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"/><path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"/></svg>
        <div className="">назад к событиям</div>
      </NavLink>
      <div className="album__description">
        <p>
        27 декабря 2024 г. АНО ПСД "От сердца к сердцу" провели сразу две благотворительных акции «Волшебный мешок Деда мороза» для КУ ВО «Семилукского социально-реабилитационного центра для несовершеннолетних» и «А я сегодня Дед мороз» для КОУ ВО «Верхнемамонской школы-интернат для обучающихся с ограниченными возможностями здоровья».
        <br/>Мы проводили 2024 год! И мы с гордостью можем сказать, что мы вместе справились со всеми испытаниями! 
        <br/>Несмотря на трудности, Вы не оставили детей в беде, Вы продолжали им помогать! Это самое ценное!
        <br/>Твёрдая вера в то, что если мы вместе будем действовать ради добра, сделала возможными множество счастливых историй и побед!
        <br/>Дети получили помощь-для нас это лучшая награда!
        <br/>С Новым 2025 годом и Рождеством!🙏🎄🎈
        </p>
      </div>
      <SRLWrapper>
        <div className="album__photos">
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/01.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/02.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/03.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/04.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/05.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/06.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/07.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/08.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/09.jpg'/>
          </div>
          <div className="photo__item">
            <img src='/img/albums/ded-moroz/2024-12-27/10.jpg'/>
          </div>
        </div>
      </SRLWrapper>
    </div>
  )
}

export default DedMoroz
