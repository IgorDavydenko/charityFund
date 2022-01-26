import React from 'react'
import './Team.scss'

const Team = () => {

  return (
    <div className="team">
      <div className="teammate"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/img/team/SerezkinaVA_photo_small.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'auto 100%',
      }}>
        <div className="teammate__info">
          <div className="teammate__name">
            Серёжкина Валентина Андреевна
          </div>
          <div className="teammate__role">
            Директор
          </div>
        </div>
      </div>
      <div className="teammate"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/img/team/VelozemcevaOV_photo_small.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'auto 100%',
      }}>
        <div className="teammate__info">
          <div className="teammate__name">
            Везломцева Ольга Валерьевна
          </div>
          <div className="teammate__role">
            Менеджер
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
