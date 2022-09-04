import React from 'react'
import './Gratitudes.scss'

const Gratitudes = () => {
  return (
    <div className="gratitudes">
      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/lisky_spdp_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/lisky_spdp.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Лискинский социальный приют для детей и подростков
        </div>
      </div>

      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/kantemirovka_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/kantemirovka.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Кантемировский центр помощи детям дошкольного возраста
        </div>
      </div>

      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/panino_srcdn_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/panino_srcdn.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Панинский социально-реабилитационный центр
        </div>
      </div>
      
      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/buturlinovka_school_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/buturlinovka_school.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Бутурлиновская школа-интернат
        </div>
      </div>

      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/pavlovsk_school_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/pavlovsk_school.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Павловская школа-интернат
        </div>
      </div>

      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/anna_school_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/anna_school.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Аннинская специальная общеобразовательная школа
        </div>
      </div>


      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/verhiy_mamon_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/verhiy_mamon.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Верхнемамонская школа-интернат
        </div>
      </div>

      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/rudny_school_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/rudny_school.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Руднянская школа-интернат
        </div>
      </div>

      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/bobrov_school_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/bobrov_school.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Бобровская школа-интернат
        </div>
      </div>
      
      <div className="gratitude">
        <div className="gratitude__img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/gratitudes/zemplyansk_school_preview.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'auto 100%',
        }}>
          <div className="gratitude__img-full">
            <a href="/gratitudes/zemplyansk_school.jpg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
            </a>
          </div>
        </div>
        <div className="gratitude__name item_font-red">
          Землянская школа-интернат
        </div>
      </div>
    </div>
  )
}

export default Gratitudes
