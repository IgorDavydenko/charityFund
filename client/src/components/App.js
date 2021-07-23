import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';

import Header from './Header/index.js'
import Content from './Content/index.js'
import Footer from './Footer/index.js'

function App() {
  return (
    <div>
      <Router>
        <div className="charityApp">
          <img className="content__background" src="/img/background.jpg"/>
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
