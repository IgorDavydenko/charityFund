import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header/index.js'
import Content from './components/Content/index.js'
import Hands from './components/StyleBlock/Hands'

import './style.scss'

ReactDOM.render(
    <React.StrictMode>
        <div className="charityApp-wrapper">
            <Router>
                <Header />
                <Content />
            </Router>
            <Hands />
        </div>
    </React.StrictMode>
  , document.getElementById('charityFundApp'));
