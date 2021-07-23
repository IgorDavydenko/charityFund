import React from 'react'

import Card from './Card/index.js'

import './Team.scss'

const Team = () => {

  return (
    <div className="team">
      <Card
        avatarPath='/img/team/SerezkinaVA.jpg'
        name="Серёжкина Валентина Андреевна"
        role="Директор" />
      <Card
        avatarPath='/img/team/VelozemcevaOV.jpg'
        name="Везломцева Ольга Валерьевна"
        role="Менеджер" />
    </div>
  )
}

export default Team
