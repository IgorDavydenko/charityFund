import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Team from '../Team/index.js'

import './Content.scss'
import backgroundImg from "../../assets/background.jpg";



const Content = () => {
  
  return (
    <div className="content-wrapper"
          style={{ backgroundImage: `url(${backgroundImg})` }}>
      
      <Switch>
          <Route exact path='/team' component={Team}/>
        </Switch>

    </div>
  )
}

export default Content
