import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import './Content.scss'

import About from '../About/index.js'
import CommonPage from './CommonPage.js'
import HomePage from '../HomePage/index.js'
import Partners from '../Partners/index.js';
import Projects from '../Projects/index.js';

import Events from '../Events/index.js';

import AnnaAlbum from '../Events/anna.js';
import BobrovAlbum from '../Events/bobrov.js';
import ButurlinovkaAlbum from '../Events/buturlinovka.js';
import Concert01Album from '../Events/concert_01.js';
import RudnyAlbum from '../Events/rudny.js';
import Panino from '../Events/panino.js';
import Pavlovsk from '../Events/pavlovsk.js';
import VerhMamonAlbum from '../Events/verhMamon.js';
import ZemlyanskAlbum from '../Events/zemlyansk.js';


const Content = () => {

  return (
    <div className="content-wrapper">
      <Switch>
        <Route path='/about' component={ About } />
        <Route path='/projects' component={ CommonPage(Projects) } />
        <Route path='/partners' component={ CommonPage(Partners) } />

        <Route path='/events/anna' component={ CommonPage(AnnaAlbum) } />
        <Route path='/events/bobrov' component={ CommonPage(BobrovAlbum) } />
        <Route path='/events/buturlinovka' component={ CommonPage(ButurlinovkaAlbum) } />
        <Route path='/events/concert-28-05' component={ CommonPage(Concert01Album) } />
        <Route path='/events/rudny' component={ CommonPage(RudnyAlbum) } />
        <Route path='/events/panino' component={ CommonPage(Panino) } />
        <Route path='/events/pavlovsk' component={ CommonPage(Pavlovsk) } />
        <Route path='/events/verhniy-mamon' component={ CommonPage(VerhMamonAlbum) } />
        <Route path='/events/zemlyansk' component={ CommonPage(ZemlyanskAlbum) } />
        <Route path='/events' component={ CommonPage(Events) } />

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
