import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";

// import Card from './Card/index.js'

import './Photos.scss'

const Photos = () => {

  const WINDOW_WIDTH = window.innerWidth;

  // const fullScreenView = (e) => {
  //   // console.log(e.target);
  //   console.log(WINDOW_WIDTH);
  // }

  return (
    <div className="photos">
      <div className="album">
      <div className="album__description">
          <p>
            31 августа АНО ПСД «От сердца к сердца» провели благотворительную акцию «Скоро в школу» для Землянской школы-интернат для обучающихся с ограниченными возможностями.<br/>
            Сердечно благодарим каждого партнёра кто принимал участие!<br/>
            Пусть отданное детям сегодня вернётся к вам завтра многократно приумноженным!
          </p>
        </div>
        <SRLWrapper>
          <div className="album__preview">
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_01.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_02.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_03.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_04.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_05.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_06.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_07.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_08.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_09.jpg'/>
            </div>
            <div className="preview__img">
              <img src='/img/albums/zemlyansk/zemlyansk_10.jpg'/>
            </div>
          </div>
        </SRLWrapper>
      </div>
    </div>
  )
}

export default Photos
