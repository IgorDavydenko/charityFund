import React from 'react'
import './Projects.scss'

const Projects = () => {
  
  return (
    <div className="projects-wrapper" >
      <div className="projects" >

        <div className="project">
          <div className="orhpanage">
            <div className="project__content">
              <h3 className="project__title">
                Детские учреждения
              </h3>
              <p className="project__description">
                Главная цель создания Автономной некоммерческой организации помощи семьи и детям «От сердца к сердцу» - объединить добрых и отзывчивых людей, способных помочь. И вместе оказать помощь детским учреждениям, которые нуждаются в нашей поддержке.<br/>
                В России много волонтёрских движений, направленных на помощь нуждающихся и обездоленных. К сожалению, в нашем обществе есть проблемы (и их не мало), которые решаются долгое время, и справиться с ними каждому отдельному человеку своими силами не возможно.<br/>
                Практически все детские дома нуждаются в конкретной адресной помощи. И чем дальше от Воронежа находится учреждение, тем больше оно нуждается в нашей помощи. Это и вещи, и спортивный инвентарь, и бытовые приборы, и медицинское оборудование и многое другое необходимое в нашей повседневной жизни.<br/>
              </p>
              <p className="project__slogan">
                Только вместе мы сможем больше!
              </p>
            </div>
            <div className="orhpanage__imgs">
              <div class="orhpanage__img orhpanage__img_primary">
                <img src="/img/projects/orphanage/Kiev_172667-mini.jpg"></img>
              </div>
              <div class="orhpanage__img orhpanage__img_secondary">
                  <img src="/img/projects/orphanage/i.jpg"></img>
                </div>
                <div class="orhpanage__img orhpanage__img_secondary">
                  <img src="/img/projects/orphanage/scale_1200.jpg"></img>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
