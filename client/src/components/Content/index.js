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
import Events_2025_12_30 from '../Events/events.2025-12-30.js';

import AnnaAlbum from '../Events/anna.js';
import Anna_30_12_22 from '../Events/anna_30.12.22';
import Anna_2024_03_12 from '../Events/anna.2024-03-12.js';
import Anna_2024_12_05 from '../Events/anna.2024-12-05.js';
import Anna_2025_12_11 from '../Events/anna.2025-12-11.js';
import BobrovAlbum from '../Events/bobrov.js';
import BobrovAlbum_02_11 from '../Events/bobrov_02.11.js';
import Bobrov_2024_02_07 from '../Events/bobrov.2024-02-07.js';
import ButurlinovkaAlbum from '../Events/buturlinovka.js';
import Buturlinovka_2025_07_02 from '../Events/buturlinovka.2025-07-02.js';
import Concert01Album from '../Events/concert_01.js';
import DedMoroz_2024_12_27 from '../Events/ded-mogoz.2024-12-27';
import Gribanovka_2023_08_02 from '../Events/gribanovka.2023-08-02.js'
import Hohol_2025_08_05 from '../Events/hohol.2025-08-05.js'
import Kantemirovka from '../Events/kantemirovka.js';
import Kantemirovka_2023_11_02 from '../Events/kantemirovka.2023-11-02.js';
import Kantemirovka_2024_06_03 from '../Events/kantemirovka.2024-06-03.js';
import Kantemirovka_2025_03_06 from '../Events/kantemirovka.2025-03-06.js';
import Lisky from '../Events/lisky'
import Lisky_2023_12_12 from '../Events/lisky.2023-12-12.js'
import Nizhnedevitsk_2025_05_03 from '../Events/nizhnedevitsk.2025.05.03.js';
import NovayaUsman_2023_10_06 from '../Events/novaya.usman.2023-10-06.js';
import NovayaUsman_2024_10_09 from '../Events/novaya.usman.2024-10-09.js';
import NovayaUsman_2025_09_09 from '../Events/novaya.usman.2025-09-09.js';
import Novoosinovka_2024_01_10 from '../Events/novoosinovka.2024-01-10.js';
import Ostrogozhsk from '../Events/ostrogozhsk.js'
import Ostrogozhsk_09_06_23 from '../Events/ostrogozhsk_2023.06.09.js'
import Ostrogozhsk_2024_11_08 from '../Events/ostrogozhsk.2024-11-08.js'
import RudnyAlbum from '../Events/rudny.js';
import RudnyAlbum_06_12 from '../Events/rudny_06.12.js';
import Rudny_2024_04_11 from '../Events/rudniy.2024-04-11.js';
import Rudny_2025_04_08 from '../Events/rudny.2025-04-08.js';
import Panino from '../Events/panino.js'; 
import Panino_2023_06_03 from '../Events/panino_2023.06.03';
import Panino_2024_08_09 from '../Events/panino.2024-08-09.js';
import Panino_2025_11_06 from '../Events/panino.2025-11-06.js';
import Pavlovsk from '../Events/pavlovsk.js';
import Pavlovsk_2024_05_07 from '../Events/pavlovsk.2024-05-07.js';
import Pavlovsk_2025_04_30 from '../Events/pavlovsk.2025.04.30.js';
import Pavlovsk_04_23 from '../Events/pavlovsk_04.23.js';
import Ternovka_2023_07_02 from '../Events/ternovka_2023.07.02.js';
import Ternovka_2025_02_05 from '../Events/ternovka.2025-02-05.js';
import VerhMamonAlbum from '../Events/verhMamon.js';
import VerhMamon_02_01_23 from '../Events/verhMamon_02.01.23.js';
import VerhMamon_24_07_02 from '../Events/verh-mamon.2024-07-02.js'
import ZemlyanskAlbum from '../Events/zemlyansk.js';
import ZemlyanskAlbum_05_23 from '../Events/zemlyansk_10.05.23.js';
import Zemlyansk_2024_09_05 from '../Events/zemlyansk.2024-09-05.js';


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
        <Route path='/events/anna-2024-12-05' component={ CommonPage(Anna_2024_12_05) } />
        <Route path='/events/anna-2025-12-11' component={ CommonPage(Anna_2025_12_11) } />
        <Route path='/events/bobrov' component={ CommonPage(BobrovAlbum) } />
        <Route path='/events/bobrov-02-11' component={ CommonPage(BobrovAlbum_02_11) } />
        <Route path='/events/bobrov-2024-02-07' component={ CommonPage(Bobrov_2024_02_07) } />        
        <Route path='/events/buturlinovka' component={ CommonPage(ButurlinovkaAlbum) } />
        <Route path='/events/buturlinovka-2025-07-02' component={ CommonPage(Buturlinovka_2025_07_02) } />
        <Route path='/events/concert-28-05' component={ CommonPage(Concert01Album) } />
        <Route path='/events/ded-moroz-2024-12-27' component={ CommonPage(DedMoroz_2024_12_27) } />
        <Route path='/events/event-2025-12-30' component={ CommonPage(Events_2025_12_30) } />
        <Route path='/events/gribanovka-2023-08-02' component={ CommonPage(Gribanovka_2023_08_02) } />
        <Route path='/events/hohol-2025-08-05' component={ CommonPage(Hohol_2025_08_05) } />
        <Route path='/events/kantemirovka' component={ CommonPage(Kantemirovka) } />
        <Route path='/events/kantemirovka-2023-11-02' component={ CommonPage(Kantemirovka_2023_11_02) } />
        <Route path='/events/kantemirovka-2024-06-03' component={ CommonPage(Kantemirovka_2024_06_03) } />
        <Route path='/events/kantemirovka-2025-03-06' component={ CommonPage(Kantemirovka_2025_03_06) } />
        <Route path='/events/lisky' component={ CommonPage(Lisky) } />
        <Route path='/events/liski-2023-12-12' component={ CommonPage(Lisky_2023_12_12) } />
        <Route path='/events/nizhnedevitsk-2025-05-03' component={ CommonPage(Nizhnedevitsk_2025_05_03) } />
        <Route path='/events/novaya-usman-2023-10-06' component={ CommonPage(NovayaUsman_2023_10_06) } />
        <Route path='/events/novaya-usman-2024-10-09' component={ CommonPage(NovayaUsman_2024_10_09) } />
        <Route path='/events/novaya-usman-2025-09-09' component={ CommonPage(NovayaUsman_2025_09_09) } />
        <Route path='/events/novoosinovka-2024-01-10' component={ CommonPage(Novoosinovka_2024_01_10) } />
        <Route path='/events/ostrogozhsk' component={ CommonPage(Ostrogozhsk) } />
        <Route path='/events/ostrogozhsk-2023-06-09' component={ CommonPage(Ostrogozhsk_09_06_23) } />
        <Route path='/events/ostrogozhsk-2024-11-08' component={ CommonPage(Ostrogozhsk_2024_11_08) } />
        <Route path='/events/rudny' component={ CommonPage(RudnyAlbum) } />
        <Route path='/events/rudny-06-12' component={ CommonPage(RudnyAlbum_06_12) } />
        <Route path='/events/rudny-2024-04-11' component={ CommonPage(Rudny_2024_04_11) } />
        <Route path='/events/rudny-2025-04-08' component={ CommonPage(Rudny_2025_04_08) } />
        <Route path='/events/panino' component={ CommonPage(Panino) } />
        <Route path='/events/panino-2023-06-03' component={ CommonPage(Panino_2023_06_03) } />
        <Route path='/events/panino-2024-08-09' component={ CommonPage(Panino_2024_08_09) } />
        <Route path='/events/panino-2025-11-06' component={ CommonPage(Panino_2025_11_06) } />
        <Route path='/events/pavlovsk' component={ CommonPage(Pavlovsk) } />
        <Route path='/events/pavlovsk-04-23' component={ CommonPage(Pavlovsk_04_23) } />
        <Route path='/events/pavlovsk-2024-05-07' component={ CommonPage(Pavlovsk_2024_05_07) } />
        <Route path='/events/pavlovsk-2025-04-30' component={ CommonPage(Pavlovsk_2025_04_30) } />
        <Route path='/events/ternovka-2023-07-02' component={ CommonPage(Ternovka_2023_07_02) } />
        <Route path='/events/ternovka-2025-02-05' component={ CommonPage(Ternovka_2025_02_05) } />

        <Route path='/events/verhniy-mamon' component={ CommonPage(VerhMamonAlbum) } />
        <Route path='/events/verhniy-mamon-02-01-23' component={ CommonPage(VerhMamon_02_01_23) } />
        <Route path='/events/verh-mamon-2024-07-02' component={ CommonPage(VerhMamon_24_07_02) } />
        <Route path='/events/zemlyansk' component={ CommonPage(ZemlyanskAlbum) } />
        <Route path='/events/zemlyansk-05-23' component={ CommonPage(ZemlyanskAlbum_05_23) } />
        <Route path='/events/zemlyansk-2024-09-05' component={ CommonPage(Zemlyansk_2024_09_05) } />
        <Route path='/events' component={ CommonPage(Events) } />

        <Route path='/' component={ HomePage } />
      </Switch>
    </div>
  )
}

export default Content
