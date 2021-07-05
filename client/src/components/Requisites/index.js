import React from 'react'
import './Requisites.scss'

import { YMaps, Map, Placemark } from "react-yandex-maps";

const Requisites = () => {

  const mapData = {
    center: [51.700592, 39.149784],
    zoom: 16,
  };
  
  const coordinates = [
    [51.700592, 39.149784]
  ];

  return (
    <div className="requisites-wrapper">
      <div>

      </div>
      <div>
        <YMaps>
          <Map width='600px' height='600px' defaultState={mapData}>
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
          </Map>
        </YMaps>
      </div>
    </div>
  )
}

export default Requisites
