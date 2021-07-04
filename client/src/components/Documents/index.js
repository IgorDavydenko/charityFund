import React from 'react'

import './Documents.scss'
import Card from './Card'

const Documents = (props) => {

  return (
    <div className="documents">
      <Card 
          preview="/img/docs/Licence.jpeg"
          path="/files/Licence.pdf"
          title="licence"/>
      {/* <a href="/files/Licence.pdf" target="_blank">licence</a> */}
    </div>
  )
}

export default Documents
