import { React, useState } from 'react'
import { Navdivnk, NavLink } from 'react-router-dom'

import './Navigation.scss'

const Navigation = () => {

  const [showNavigation, setShowNavigation] = useState(false)

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation)
  }

  return (
    <nav className={`navigation-wrapper ${showNavigation? 'navigation_show':''}`}>
      <div className='navigation'>
        <div className='navigation__item navigation__about'>
          <NavLink 
            to="/"
            activeClassName="active">О нас</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
            to="/projects"
            activeClassName="active">Проекты</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/team"
              activeClassName="active">Команда</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/documents"
              activeClassName="active">Документы</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/requisites"
              activeClassName="active">Реквизиты</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/partners"
              activeClassName="active">Партнёры</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/gratitude"
              activeClassName="active">Нам говорят спасибо</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/photos"
              activeClassName="active">Фотоотчёты</NavLink>
        </div>
      </div>
      <button className="navigation__burger"
            onClick={ handleShowNavigation }>
        <span className="burger-bar"></span>
      </button>
    </nav>
  )
}

export default Navigation