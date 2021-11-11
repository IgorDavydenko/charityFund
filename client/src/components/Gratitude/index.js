import React from 'react'

import './Gratitude.scss'
import Card from './Card'

const Gratitude = (props) => {

  return (
    <div className="gratitudes">
      <Card 
          preview="/gratitudes/zemplyansk_school.jpg"
          path="/gratitudes/zemplyansk_school.jpg"
          title="Землянская школа-интернат"/>
      <Card 
          preview="/gratitudes/bobrov_school.jpg"
          path="/gratitudes/bobrov_school.jpg"
          title="Бобровская школа-интернат"/>
      {/* <a href="/files/Licence.pdf" target="_blank">licence</a> */}
    </div>
  )
}

export default Gratitude
