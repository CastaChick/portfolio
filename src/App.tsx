import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import Contentbox from './Contentbox';
import About from './About';

const Skills: React.FC = () => <div><p>Skills</p></div>
const Works: React.FC = () => <div><p>Works</p></div>

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="Content Text">
          <Route path='/' exact component={ About }/>
          <Route path='/Skills' exact component={ Skills }/>
          <Route path='/Works' exact component={ Works }/>
        </div>
      </div>
    </Router>
  );
}

export default App;
