import React from 'react'
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import About from '../About/index.js'
import CommonPage from './CommonPage.js'
import HomePage from '../HomePage/index.js'
import Partners from '../Partners/index.js';
import Projects from '../Projects/index.js';
import Team from '../Team/index.js'

import Photos from '../Photos/index.js';

import './Content.scss'

const Content = () => {

  return (
    <div className="content-wrapper">
      <Switch>
        <Route path='/about' component={ CommonPage(About) } />
        <Route path='/team' component={ CommonPage(Team) } />
        <Route path='/projects' component={ CommonPage(Projects) } />
        <Route path='/partners' component={ CommonPage(Partners) } />
        <Route path='/' component={ HomePage } />
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
