import React from 'react'
import './Gratitudes.scss'

const Gratitudes = (props) => {
  return (
    <div className="gratitudes">
      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/zemplyansk_school.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}></div>
        <div className="gratitude__name item_font-red">
          Землянская школа-интернат
        </div>
      </div>
      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/bobrov_school.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}></div>
        <div className="gratitude__name item_font-red">
          Бобровская школа-интернат
        </div>
      </div>
      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/rudny_school.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}></div>
        <div className="gratitude__name item_font-red">
          Руднянская школа-интернат
        </div>
      </div>

      {/* <Card 
          preview="/gratitudes/zemplyansk_school.jpg"
          path="/gratitudes/zemplyansk_school.jpg"
          title="Землянская школа-интернат"/>
      <Card 
          preview="/gratitudes/bobrov_school.jpg"
          path="/gratitudes/bobrov_school.jpg"
          title="Бобровская школа-интернат"/>
      <Card 
          preview="/gratitudes/rudny_school.jpg"
          path="/gratitudes/rudny_school.jpg"
          title="Руднянская школа-интернат"/> */}
      {/* <a href="/files/Licence.pdf" target="_blank">licence</a> */}
    </div>
  )
}

export default Gratitudes
