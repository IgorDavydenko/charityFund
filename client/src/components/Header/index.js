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
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg> */}
            <div>otserdca36@mail.ru</div>
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
