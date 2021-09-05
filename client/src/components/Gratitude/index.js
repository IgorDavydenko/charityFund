import React from 'react'

import './Gratitude.scss'
import Card from './Card'

const Gratitude = (props) => {

  return (
    <div className="gratitudes">
      <Card 
          preview="/gratitudes/zemplyansk_school.jpeg"
          path="/gratitudes/zemplyansk_school.jpeg"
          title="Землянская школа-интернат"/>
      {/* <a href="/files/Licence.pdf" target="_blank">licence</a> */}
    </div>
  )
}

export default Gratitude
