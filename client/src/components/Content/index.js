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

import './Content.scss'

const Content = () => {
  
  return (

<div className="content-wrapper">
  <section className="fullscreen">
  <div className="fullscreen__body">
    <h1 className="fullscreen__title">Fullscreen block title</h1>
    <div className="fullscreen__text">Fullscreen text</div>
    <a href="#" className="fullscreen__link">link</a>
  </div>
  </section>
  <div className="content">
    <div className="content__boby">
      <div className="content__text">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet metus eu egestas rutrum. Pellentesque scelerisque gravida nisi, sed auctor tellus ornare eu. Sed arcu risus, laoreet vitae laoreet id, dapibus ut nisi. Vestibulum eget placerat purus. Curabitur metus velit, viverra eget est ac, porta hendrerit dolor. Phasellus eleifend elementum eleifend. Nulla vel dolor at augue vulputate egestas. Quisque finibus lectus vitae risus iaculis, eget bibendum orci lobortis. Morbi nunc nunc, accumsan ac augue a, venenatis rutrum orci. Phasellus sed pretium dolor, at fringilla ligula.
      Praesent vitae hendrerit augue. Nullam facilisis purus a eros dictum porta. Vivamus vestibulum ornare augue, ultrices placerat elit. Vivamus iaculis nulla euismod nibh venenatis, non convallis magna efficitur. Donec viverra maximus metus vitae lobortis. Suspendisse sollicitudin mi in lacus interdum, ut pharetra lorem ultrices. Sed laoreet massa quis lacus posuere, id faucibus orci volutpat. Nunc ac enim ac libero congue sagittis quis non orci.
      Fusce euismod varius ex non fringilla. Praesent consectetur neque eu elementum placerat. Quisque tempus libero id dignissim vestibulum. Mauris vitae iaculis quam. Proin tincidunt ac felis sed iaculis. Quisque pharetra, nunc interdum sagittis convallis, erat massa sagittis libero, non sollicitudin augue ante in magna. Maecenas erat nunc, tristique eu gravida commodo, eleifend id tellus. Cras dictum rhoncus elit ac volutpat. Quisque sem dui, dapibus non tempor sit amet, dictum ut nisl. Maecenas non efficitur sem. In sit amet risus sodales orci tincidunt efficitur.
      Aliquam erat volutpat. Sed vehicula sem quis metus efficitur posuere. Nulla bibendum nulla eget hendrerit aliquet. Duis sem sem, varius in neque nec, fringilla blandit libero. Sed placerat lectus sed commodo malesuada. Pellentesque imperdiet libero justo, at lobortis velit cursus in. Morbi iaculis ipsum non augue venenatis, a ultricies neque pellentesque. Fusce dapibus est velit.
      Sed venenatis ullamcorper dolor sed mollis. Nunc sed rutrum arcu, porttitor aliquet nisl. Aliquam faucibus condimentum risus, sit amet iaculis diam mollis sed. Nullam nisl est, efficitur in egestas sit amet, congue eu ipsum. Fusce pulvinar euismod odio, a volutpat turpis mollis at. Suspendisse eu elit ornare, sagittis purus ut, pharetra nibh. Ut porttitor felis enim, sed porttitor diam ornare at. Duis sagittis pretium tortor consectetur egestas. Donec malesuada gravida enim in suscipit. Etiam scelerisque, ligula eu hendrerit accumsan, sapien dolor tempor sapien, vel vehicula neque odio ut mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dictum ac orci mollis pharetra.
          </p>
        </div>
    </div>
  </div>
</div>

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
    //       <Route exact path='/photos' component={ Photos }/>*/}
    //     </Switch>
    //     </div>
    //   </section>
    // </div>
  )
}

export default Content
