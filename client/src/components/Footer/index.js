import React from 'react'
import './Footer.scss'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer__slogan">
          Открой своё <span className="item_font-red">сердце</span>! Наполни его <span className="item_font-red">добром</span> и <span className="item_font-red">любовью</span>!
        </div>
        <div className="footer__contacts">
          <div className="contacts__item name item_font-red">
            От сердца к сердцу
          </div>
          <div className="contacts__item phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>          
            <div>+7 <span className="item_font-red">(930)</span> 401-67-57</div>
          </div>
          <div className="contacts__item mail">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            <div>otserdca36@mail.ru</div>
          </div>
          <div className="contacts__item adress">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            <div>г. Воронеж, ул. Хользунова 107 А</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
