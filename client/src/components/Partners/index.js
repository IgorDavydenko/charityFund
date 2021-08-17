import React from 'react'

import Card from './Card/index.js'

import './Partners.scss'

const Partners = () => {

  return (
    <div className="partners">
      <Card
        logoPath='/img/sponsors/myaso_est.jpg'
        name="Мясо есть"
        links={
          {
            url: "https://www.meatisru.com",
            instagram: "https://www.instagram.com/meatisru/"
          }} />
      <Card
        logoPath='/img/sponsors/shindvor.jpg'
        name="Шинный двор"
        links={
          {
            url: "https://shindvor.com/",
          }} />
      <Card
        logoPath='/img/sponsors/smena.jpg'
        name="ООО Смена"
        links={
          {
            url: "https://smena68.ru/",
          }} />
    </div>
  )
}

export default Partners
