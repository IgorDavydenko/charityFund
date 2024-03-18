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
import Anna_30_12_22 from '../Events/anna_30.12.22';
import Anna_2024_03_12 from '../Events/anna.2024-03-12.js';
import BobrovAlbum from '../Events/bobrov.js';
import BobrovAlbum_02_11 from '../Events/bobrov_02.11.js';
import Bobrov_2024_02_07 from '../Events/bobrov.2024-02-07.js';
import ButurlinovkaAlbum from '../Events/buturlinovka.js';
import Concert01Album from '../Events/concert_01.js';
import Gribanovka_2023_08_02 from '../Events/gribanovka.2023-08-02.js'
import Kantemirovka from '../Events/kantemirovka.js';
import Kantemirovka_2023_11_02 from '../Events/kantemirovka.2023-11-02.js';
import Lisky from '../Events/lisky'
import Lisky_2023_12_12 from '../Events/lisky.2023-12-12.js'
import NovayaUsman_2023_10_06 from '../Events/novaya.usman.2023-10-06.js';
import Novoosinovka_2024_01_10 from '../Events/novoosinovka.2024-01-10.js';
import Ostrogozhsk from '../Events/ostrogozhsk.js'
import Ostrogozhsk_09_06_23 from '../Events/ostrogozhsk_2023.06.09.js'
import RudnyAlbum from '../Events/rudny.js';
import RudnyAlbum_06_12 from '../Events/rudny_06.12.js';
import Panino from '../Events/panino.js'; 
import Panino_2023_06_03 from '../Events/panino_2023.06.03';
import Pavlovsk from '../Events/pavlovsk.js';
import Pavlovsk_04_23 from '../Events/pavlovsk_04.23.js';
import Ternovka_2023_07_02 from '../Events/ternovka_2023.07.02.js';
import VerhMamonAlbum from '../Events/verhMamon.js';
import VerhMamon_02_01_23 from '../Events/verhMamon_02.01.23.js';
import ZemlyanskAlbum from '../Events/zemlyansk.js';
import ZemlyanskAlbum_05_23 from '../Events/zemlyansk_10.05.23.js';



const Content = () => {

  return (
    <div className="content-wrapper">
      <Switch>
        <Route path='/about' component={ About } />
        <Route path='/projects' component={ CommonPage(Projects) } />
        <Route path='/partners' component={ CommonPage(Partners) } />
        
        <Route path='/events/anna' component={ CommonPage(AnnaAlbum) } />
        <Route path='/events/anna-30-12-22' component={ CommonPage(Anna_30_12_22) } />
        <Route path='/events/anna-2024-03-12' component={ CommonPage(Anna_2024_03_12) } />
        <Route path='/events/bobrov' component={ CommonPage(BobrovAlbum) } />
        <Route path='/events/bobrov-02-11' component={ CommonPage(BobrovAlbum_02_11) } />
        <Route path='/events/bobrov-2024-02-07' component={ CommonPage(Bobrov_2024_02_07) } />        
        <Route path='/events/buturlinovka' component={ CommonPage(ButurlinovkaAlbum) } />
        <Route path='/events/concert-28-05' component={ CommonPage(Concert01Album) } />
        <Route path='/events/gribanovka-2023-08-02' component={ CommonPage(Gribanovka_2023_08_02) } />
        <Route path='/events/kantemirovka' component={ CommonPage(Kantemirovka) } />
        <Route path='/events/kantemirovka-2023-11-02' component={ CommonPage(Kantemirovka_2023_11_02) } />
        <Route path='/events/lisky' component={ CommonPage(Lisky) } />
        <Route path='/events/liski-2023-12-12' component={ CommonPage(Lisky_2023_12_12) } />
        <Route path='/events/novaya-usman-2023-10-06' component={ CommonPage(NovayaUsman_2023_10_06) } />
        <Route path='/events/novoosinovka-2024-01-10' component={ CommonPage(Novoosinovka_2024_01_10) } />
        <Route path='/events/ostrogozhsk' component={ CommonPage(Ostrogozhsk) } />
        <Route path='/events/ostrogozhsk-2023-06-09' component={ CommonPage(Ostrogozhsk_09_06_23) } />
        <Route path='/events/rudny' component={ CommonPage(RudnyAlbum) } />
        <Route path='/events/rudny-06-12' component={ CommonPage(RudnyAlbum_06_12) } />
        <Route path='/events/panino' component={ CommonPage(Panino) } />
        <Route path='/events/panino-2023-06-03' component={ CommonPage(Panino_2023_06_03) } />
        <Route path='/events/pavlovsk' component={ CommonPage(Pavlovsk) } />
        <Route path='/events/pavlovsk-04-23' component={ CommonPage(Pavlovsk_04_23) } />
        <Route path='/events/ternovka-2023-07-02' component={ CommonPage(Ternovka_2023_07_02) } />
        <Route path='/events/verhniy-mamon' component={ CommonPage(VerhMamonAlbum) } />
        <Route path='/events/verhniy-mamon-02-01-23' component={ CommonPage(VerhMamon_02_01_23) } />
        <Route path='/events/zemlyansk' component={ CommonPage(ZemlyanskAlbum) } />
        <Route path='/events/zemlyansk-05-23' component={ CommonPage(ZemlyanskAlbum_05_23) } />
        <Route path='/events' component={ CommonPage(Events) } />

        <Route path='/' component={ HomePage } />
      </Switch>
    </div>
  )
}

export default Content
