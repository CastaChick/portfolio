import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Works from './Works';

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
