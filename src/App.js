import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layout/LandingPage';
import { Provider } from 'react-redux';
import store from './store/config-store' 
import './App.css';
import Signup from './components/auth/Signup';

import Login from './components/auth/Login'


const  App = () =>  (
  <Provider store={store}>
    <Router>
      <div>
       <Switch>
        <Route exact path='/' component={LandingPage}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)
export default App;
