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
    <Router>
      <div className="charityApp">
          <Header />
          <Content />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
