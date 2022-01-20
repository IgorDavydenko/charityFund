import React from 'react'
import './About.scss'

import Documents from '../Documents/index.js'
import Gratitudes from '../Gratitudes/index.js'
import Projects from '../Projects/index.js'
import Requisites from '../Requisites/index.js'
import Team from '../Team/index.js'

const About = () => {

  return (
    <div className="about-wrapper">
      <section className="about__section about__mission" id="mission">
        <h2>Наша миссия</h2>
        <p>
          Увидев и осознав масштаб проблем детей-сирот, мы поняли, что не сможем закрыть глаза на это и вернутся к прежней размеренной жизни.
          <br/>
          Мы видели и представляли решение этой проблемы одинаково. Так появилась АНО ПСД <span className="item_font-red">«От сердца к сердцу»</span>
        </p>
      </section>

      <section className="about__section about__projects" id="projects">
        <h2>Проекты</h2>
        <Projects/>
      </section>

      <section className="about__section about__team" id="team">
        <h2>Команда</h2>
        <Team/>
      </section>

      <section className="about__section about__thanks" id="gratitudes">
        <h2>Благодарности</h2>
        <Gratitudes/>
      </section>

      <section className="about__section about__requisites" id="requisites">
        <h2>Реквизиты</h2>
        <Requisites/>
      </section>

      <section className="about__section about__documents" id="documents">
        <h2>Документы</h2>
        <Documents/>
      </section>

      <section className="about__section about__documents" id="contacts">
        <h2>Контакты</h2>
      </section>
      
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
