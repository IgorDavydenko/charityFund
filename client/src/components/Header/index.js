import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss' 

import Navigation from '../Navigation/index.js'

const Header = () => {

  return (
    <header className="header-wrapper">
      <div className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img src="/img/logo.jpg" alt=""/></NavLink>
        </div>
        <div className="fund">
          <div className="fund__item fund__status">
            Автономная некоммерческая организация помощи семьи и детям
          </div>
          <div className="fund__item fund__name">
            От сердца к сердцу
          </div>
        </div>
        <div className="contacts">
          <div className="contacts__phone">
           <a href="tel:+79304016757">
            +7 <span className="item_font-red">(930)</span> 401-67-57
           </a>
          </div>
          <div className="contacts__email">
            otserdcakcerdcy36@mail.ru
          </div>
          <div className="contacts__adress">
            г. Воронеж, Ул. Хользунова 107 E
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
  )
}

export default Header
