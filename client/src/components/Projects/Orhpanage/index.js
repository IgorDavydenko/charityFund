import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import './Orhpanage.scss'

const Orhpanage = () => {
  
  return (
    <div className="orhpanage-wrapper" >
      <div className="orhpanage">
        <h2 className="orhpanage__title item_font-red">
          Детские учреждения
        </h2>
        <div className="orhpanage__content">
          <p className="orhpanage__description">
            Главная цель создания Автономной некоммерческой организации помощи семьи и детям «От сердца к сердцу» - jбъединить добрых и отзывчивых людей, способных помочь. И вместе оказать помощь детским учреждениям, которые нуждаются в нашей поддержке.<br/>
            В России много волонтёрских движений, направленных на помощь нуждающихся и обездоленных. К сожалению, в нашем обществе есть проблемы (и их не мало), которые решаются долгое время, и справиться с ними каждому отдельному человеку своими силами не возможно.<br/>
            Практически все детские дома нуждаются в конкретной адресной помощи. И чем дальше от Воронежа находится учреждение, тем больше оно нуждается в нашей помощи. Это и вещи, и спортивный инвентарь, и бытовые приборы, и медицинское оборудование и многое другое необходимое в нашей повседневной жизни.<br/>
          </p>
          <p className="orhpanage__slogan item_font-red">
            Только вместе мы сможем больше!
          </p>
        </div>
        <div className="orhpanage__img">
          <div class="img__primary">
            <img src="/img/projects/orphanage/Kiev_172667-mini.jpg"></img>
          </div>
          <div class="img__secondary">
            <div  class="secondary__item">
              <img src="/img/projects/orphanage/i.jpg"></img>
            </div>
            <div class="secondary__item">
              <img src="/img/projects/orphanage/scale_1200.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orhpanage
