import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import SimpleReactLightbox from 'simple-react-lightbox'

import Header from './components/Header/index.js'
import Content from './components/Content/index.js'
import Hands from './components/StyleBlock/Hands'

import './style.scss'

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <div className="charityApp-wrapper">
                <BrowserRouter>
                    <Header />
                    <Content />
                </BrowserRouter>
                <Hands />
            </div>
        </SimpleReactLightbox>
    </React.StrictMode>
  , document.getElementById('charityFundApp'));
