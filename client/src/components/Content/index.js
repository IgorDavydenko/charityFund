import React from 'react'
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import About from '../About/index.js';
import CommonPage from './CommonPage.js'

import Requisites from '../Requisites/index.js'
import Team from '../Team/index.js'
import HomePage from '../HomePage/index.js';
import Footer from '../Footer/index.js'
import Partners from '../Partners/index.js';
import Projects from '../Projects/index.js';
import Gratitude from '../Gratitude/index.js';
import Photos from '../Photos/index.js';

import './Content.scss'

const Content = () => {

  return (
    <div className="content-wrapper">
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/about' component={ CommonPage(About) } />
        <Route exact path='/team' component={ CommonPage(Team) } />
        <Route exact path='/partners' component={ CommonPage(Partners) } />
      </Switch>
      {/* {
        ( useLocation().pathname != '/') ? <Footer /> : ''
      } */}
    </div>
  )
}
/*

    // <div className="content-wrapper" >
    //   <section className="fullscreen">
    //     <div className="fullscreen__body">
    //     <Switch>
    //       <Route exact path='/' component={ HomePage }/>
    //       {/* <Route exact path='/projects' component={ Projects }/>
    //       <Route exact path='/team' component={ Team }/>
    //       <Route exact path='/documents' component={ Documents }/>
    //       <Route exact path='/requisites' component={ Requisites }/>
    //       <Route exact path='/partners' component={ Partners }/>
    //       <Route exact path='/gratitude' component={ Gratitude }/>
    //       <Route exact path='/gratitude' component={ Gratitude }/>
    //       <Route exact path='/photos' component={ Photos }/>
    //     </Switch>
    //     </div>
    //   </section>*/


export default Content
