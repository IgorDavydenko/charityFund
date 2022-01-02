import React from 'react'
import './About.scss'

import Team from '../Team/index.js'


const About = () => {

  return (
    <div className="about-wrapper">
      <div className="about__mission">
        <h2>Наша миссия</h2>
        <p>
          Увидев и осознав масштаб проблем детей-сирот, мы поняли, что не сможем закрыть глаза на это и вернутся к прежней размеренной жизни.
          <br/>
          Мы видели и представляли решение этой проблемы одинаково. Так появилась АНО ПСД «<span className="item_font-red">От сердца к сердцу»</span>
        </p>
      </div>

      <div className="about__projects">
        <h2>Проекты</h2>
        {/* <Team/> */}
      </div>

      <div className="about__team">
        <h2>Команда</h2>
        <Team/>
      </div>
      
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


export default About
