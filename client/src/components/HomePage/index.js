import React from 'react'
import './HomePage.scss';

import { YMaps, Map, Placemark } from "react-yandex-maps";

const HomePage = () => {
  
  const mapData = {
    center: [51.700592, 39.149784],
    zoom: 17,
  };
  
  const coordinates = [
    [51.700592, 39.149784]
  ];

  return (
    <div className="home-page-wrapper">
        <div className="home-page__description">
          <h2>Наша миссия.</h2>
          &emsp;Увидев и осознав масштаб проблем детей-сирот, мы поняли, что не сможем закрыть глаза на это и вернутся к прежней размеренной жизни.<br/>
          &emsp;Мы видели и представляли решение этой проблемы одинаково. Так появилась АНО ПСД «От сердца к сердцу»<br/>
        </div>
        <div className="home-page__contacts">
          <div className="contacts__item contacts__phone">
            +7 <span className="item_font-red">(930)</span> 401-67-57
          </div>
          <div className="contacts__item contacts__email">
            otserdcakcerdcy36@mail.ru
          </div>
          <div className="contacts__item contacts__adress">
            г. Воронеж, ул. Хользунова 107 Е
          </div>
        </div>
        <div className="home-page__map">
          <YMaps>
            <Map height='300px' defaultState={mapData}>
              {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
            </Map>
          </YMaps>
        </div>
    </div>
  )
}

export default HomePage
