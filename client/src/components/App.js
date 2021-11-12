import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.scss';

import Header from './Header/index.js'
import Content from './Content/index.js'
import Hands from './StyleBlock/Hands';



function App() {
  return (
    <div className="charityApp-wrapper">
      <Router>
          <Header />
          <Content />
      </Router>
      <Hands />
    </div>
  );
}

export default App;
