import React from 'react'
import './Documents.scss'

const Documents = (props) => {
  return (
    <div className="documents">
      <div className="document">
        <a href="/files/Licence.pdf" target="_blank">
        Свидетельство о регистрации
        </a>
      </div>
      <div className="document">
        <a href="/files/FNS.pdf" target="_blank">
        Свидетельство о постановке на налоговый учет
        </a>
      </div>
      <div className="document">
        <a href="/files/EGR.pdf" target="_blank">
        Выписка ЕГР
        </a>
      </div>
      <div className="document">
        <a href="/files/Ustav.pdf" target="_blank">
        Устав
        </a>
      </div>
    </div>
  )
}

export default Documents
