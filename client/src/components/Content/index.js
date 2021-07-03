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
    <div className="content-wrapper" >
      {/* <div className="content__background"
            style={{ backgroundImage: `url(${backgroundImg})` }}/> */}
      
      <img className="content__background" src="/img/background.jpg"/>

      <Switch>
        <Route exact path='/team' component={Team}/>
      </Switch>

    </div>
  )
}

export default Content
