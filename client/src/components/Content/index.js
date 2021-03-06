import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Documents from '../Documents/index.js';
import Requisites from '../Requisites/index.js'
import Team from '../Team/index.js'
import HomePage from '../HomePage/index.js';
import Partners from '../Partners/index.js';
import Projects from '../Projects/index.js';
import Gratitude from '../Gratitude/index.js';
import Photos from '../Photos/index.js';
import ZemlyanskPhotos from '../Photos/ZemlyanskPhotos/index.js'
import BobrovPhotos from '../Photos/BobrovPhotos/index.js'
import RudnyPhotos from '../Photos/RudnyPhotos/index.js'


import './Content.scss'

const Content = () => {
  
  return (
    <div className="content-wrapper" >
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/projects' component={ Projects }/>
        <Route exact path='/team' component={ Team }/>
        <Route exact path='/documents' component={ Documents }/>
        <Route exact path='/requisites' component={ Requisites }/>
        <Route exact path='/partners' component={ Partners }/>
        <Route exact path='/gratitude' component={ Gratitude }/>
        <Route exact path='/photos' component={ Photos }/>
        <Route exact path='/photos/zemlyansk' component={ ZemlyanskPhotos }/>
        <Route exact path='/photos/bobrov' component={ BobrovPhotos }/>
        <Route exact path='/photos/rudny' component={ RudnyPhotos }/>
      </Switch> 
    </div>
  )
}

export default Content
