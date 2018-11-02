import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layout/LandingPage';
import { Provider } from 'react-redux';
import store from './store/config-store' 
import './App.css';

//actions
import {loginUserSuccess} from './actions/AuthAction';

//helpers
import isEmpty from './helper/isEmpty';
import authCheck from './utilities/authCheck'

//
import PrivateRoute from './components/common/PrivateRoute';
import Signup from './components/auth/Signup';
import EmailConfirm from './components/common/EmailConfirm';
import Login from './components/auth/Login'
import Dashboard from './components/dashboard/Dashboard';
import ProfileSettings from './components/settings/ProfileSettings';
import SidebarExample from './components/common/sidetest';

if (!isEmpty(authCheck())) {
  store.dispatch(loginUserSuccess(authCheck()));
}
const  App = () =>  (
  <Provider store={store}>
    <Router>
      <div>
       <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path ='/dashboard' component={Dashboard}/>
        <Route exact path='/email-confirmation' component={EmailConfirm}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/dashboard/setting' component={ProfileSettings}/>
        <Route path='/sidebar' component={SidebarExample}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)
export default App;
