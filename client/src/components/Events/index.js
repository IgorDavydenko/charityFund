import React from 'react'
import { NavLink } from 'react-router-dom'

import './Events.scss'

const Events = () => {

  return (
    <div className="events">
      
      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/anna/2024-03-12/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Аннинская специальная общеобразовательная школа
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/anna-2024-03-12">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/bobrov/2024-02-07/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Бобровская школа-интернат для детей-сирот и детей, оставшихся без попечения родителей, с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/bobrov-2024-02-07">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/novoosinovka/2024-01-10/03.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Новоосиновская школа-интернат для обучающихся с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/novoosinovka-2024-01-10">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/lisky/2023-12-12/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Лискинский социальный приют для детей и подростков
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/liski-2023-12-12">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/kantemirovka/2023-11-02/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Кантемировский центр помощи детям дошкольного возраста
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/kantemirovka-2023-11-02">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/novaya_usman/2023-10-06/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Новоусманская школа-интернат для обучающихся с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/novaya-usman-2023-10-06">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/gribanovka/2023-08-02/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Грибановский социально-реабилитационный центр для несовершеннолетних
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/gribanovka-2023-08-02">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/ternovka/2023-07-02/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Терновский социально-реабилитационный центр для несовершеннолетних
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/ternovka-2023-07-02">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/panino/2023-06-03/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Панинский социально-реабилитационный центр для несовершеннолетних
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/panino-2023-06-03">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/ostrogozhsk/2023-09-06/02.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Острогожский центр психолого-педагогической, медицинской и социальной помощи детям дошкольного возраста
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/ostrogozhsk-2023-06-09">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/zemlyansk/10.05.23/preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Землянская школа-интернат<br/>
            для обучающихся с ограниченными возможностями для здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/zemlyansk-05-23">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/pavlovsk/04.23/01.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Павловская школа-интернат №1 для обучающихся с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/pavlovsk-04-23">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/verh_mamon/02.01.23/02.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Верхнемамонская школа-интернат для обучающихся с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/verhniy-mamon-02-01-23">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/anna/30.12.22/01.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Аннинская специальная общеобразовательная школа
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/anna-30-12-22">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/rudny_06.12/01.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Руднянская школа-интернат для обучающихся с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/rudny-06-12">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/bobrov_02.11/01.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Бобровская специальная школа-интернат<br/>
            для детей-сирот и детей, оставшихся без попечения родителей, с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/bobrov-02-11">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/ostrogozhsk/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: '100% auto',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Острогожский специальный детский дом для воспитанников с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/ostrogozhsk">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/lisky/lisky_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Лискинский социальный приют для детей и подростков
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/lisky">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/kantemirovka/kantemirovka_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Кантемировский центр помощи детям дошкольного возраста
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/kantemirovka">
          <span>подробнее</span>
        </NavLink>
      </section>
      
      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/panino/panino_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Панинский социально-реабилитационный центр для несовершеннолетних
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/panino">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/concert-28-05/03.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Благотворительный концерт сбор на лечение детей с онкологическими заболеваниями и ограниченными возможностями
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/concert-28-05">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/buturlinovka/buturlinovka_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Бутурлиновская школа-интернат для обучающихся с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/buturlinovka">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/pavlovsk/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Павловская школа-интернат №1 для обучающихся с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/pavlovsk">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/verh_mamon/01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Верхнемамонская школа-интернат для обучающихся с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/verhniy-mamon">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/anna/01/anna_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Аннинская специальная общеобразовательная школа
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/anna">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/zemlyansk/01/zemlyansk_09.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Землянская школа-интернат<br/>
            для обучающихся с ограниченными возможностями для здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/zemlyansk">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
      <div className="event__img"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/bobrov/bobrov_02.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Бобровская специальная школа-интернат<br/>
            для детей-сирот и детей, оставшихся без попечения родителей, с ограниченными возможностями здоровья
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/bobrov">
          <span>подробнее</span>
        </NavLink>
      </section>

      <section className="event">
        {/* <div className="event__img"> */}
          {/* <img src='/img/albums/rudny/rudny_01.jpg'/> */}
        {/* </div> */}
        <div className="event__img"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/albums/rudny/rudny_01.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'auto 100%',
          }}></div>
        <div className="event__description">
          <h3 className="event__title">
            Руднянская школа интернат
          </h3>
        </div>
        <NavLink className="event__show-more"
          to="/events/rudny">
          <span>подробнее</span>
        </NavLink>
      </section>

    </div>
  )
}

export default Events
