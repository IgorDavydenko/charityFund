import React from 'react'
import './Requisites.scss'

const Requisites = () => {

  return (
    <div className="requisites-wrapper">
      <div className="requisites__item requisites__name">
        АНО ПСД «От сердца к сердцу»
      </div>
      <div className="requisites__item requisites__adress">
        Юридический адрес: г. Воронеж, ул. Владимира Невского, д.25/5, помещ.3<br/>
        Фактический адрес: г. Воронеж, ул. Хользунова 107 А<br/>
      </div>
      <div className="requisites__item requisites__adress">
        ИНН/ КПП 3662294982/366201001<br/>
        ОГРН 1213600020237<br/>
        Р/С 40703 810 8 0206 0000022 АО «АЛЬФА-БАНК<br/>
        БИК 044525593<br/>
        К/С 30101 810 2 0000 0000593<br/>
        e-mail: Otserdca36@mail.ru<br/>
      </div>
      <div className="requisites__item requisites__phone">
        телефон: <a className="item_font-red" href="tel:+79304016757">+7 (930) 401-67-57</a>
      </div>
      <div className="requisites__item requisites__card">
        Карта сбербанка: 2202 2004 7999 9375 Валентина Андреевна С
      </div>
    </div>
  )
}

export default Requisites

/*



*/