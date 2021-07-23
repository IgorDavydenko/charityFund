import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Documents from '../Documents/index.js';
import Requisites from '../Requisites/index.js'
import Team from '../Team/index.js'

import './Content.scss'
import HomePage from '../HomePage/index.js';

const Content = () => {
  
  return (
    <div className="content-wrapper" >
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/team' component={ Team }/>
        <Route exact path='/documents' component={ Documents }/>
        <Route exact path='/requisites' component={ Requisites }/>
      </Switch> 
    </div>
  )
}

export default Content
