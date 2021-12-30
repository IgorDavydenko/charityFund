import React from 'react'

import Card from './Card/index.js'
import './Partners.scss'

const partnersList = [
  {
    name: 'Мясо есть',
    logoPath: '/img/sponsors/myaso_est.jpg',
    links: {
      url: "https://www.meatisru.com",
      instagram: "https://www.instagram.com/meatisru/"
    }
  }
]

const Partners = () => {

  return (
    <div className="partners">
      <div className="partner">
        <img className="parnter__logo" src="/img/sponsors/myaso_est.jpg" />
        <div className="partner__name">
          Мясо есть
        </div>
      </div>
      {/* <Card
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
      <Card
        logoPath='/img/sponsors/vkus_chernozemya.png'
        name="Вкус Черноземья"
        links={
          {
            url: "http://vkusvrn.ru/",
          }} /> */}
    </div>
  )
}

export default Partners
