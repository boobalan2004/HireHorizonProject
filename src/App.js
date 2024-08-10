// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Companies from './companies';
import AboutUs from './aboutus';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/companies" component={Companies} />
          <Route path="/login" component={Login} />
          <Route path="/aboutus" component={AboutUs} />
       {/* Add the Programs route */}
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
    </BrowserRouter>
  );
}

export default App;
