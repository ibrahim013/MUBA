import React, { Component } from 'react';
import BasicInfromation from './BasicInformation';
import PasswordChange from './PasswordChange';
import Notification from './Notification';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import LanguagePreference from './LanguagePreference';
import Billing from './Billing';
import DeleteAccount from './DeleteAccount';
import { white } from 'ansi-colors';

class ProfileSettings extends Component {
  render() {
    const routes = [
      {
        path: "/dashboard/settings/personal-information",
        exact: true,
        sidebar: () => <div>Basic Information</div>,
        main: () => <BasicInfromation/>
      },
      {
        path: "/dashboard/settings/password",
        sidebar: () => <div>Password</div>,
        main: () => <PasswordChange/>
      },
      {
        path: "/dashboard/settings/notification",
        sidebar: () => <div>Notification</div>,
        main: () => <Notification/>
      },
      {
        path: "/dashboard/settings/language-preference",
        sidebar: () => <div>Language Preference</div>,
        main: () => <LanguagePreference/>
      },
      {
        path: "/dashboard/settings/billing",
        sidebar: () => <div>Billing</div>,
        main: () => <Billing/>
      },
      {
        path: "/dashboard/settings/delete-account",
        sidebar: () => <div>Language Preference</div>,
        main: () => <DeleteAccount/>
      },
    ];
    return (
      <Router>
      <div className="settings-container" >
          <ul  className= "setting-list">
            <li>
              <NavLink activeStyle={{ borderBottom: '2px solid green' }} to="/dashboard/settings/personal-information">Personal Information</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ borderBottom: '2px solid green' }}to="/dashboard/settings/password">Password</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ borderBottom: '2px solid green' }}to="/dashboard/settings/notification">Notification</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ borderBottom: '2px solid green' }} to="/dashboard/settings/language-preference">Language</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ borderBottom: '2px solid green' }} to="/dashboard/settings/billing">Billings</NavLink>
            </li>
          </ul>
          <ul className= "setting-list color-red">
          <li>
              <NavLink  activeStyle={{ borderBottom: '2px solid green' }}to="/dashboard/settings/delete-account">Delete Account</NavLink>
            </li>
          </ul>

        <div className="setting-display">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
    )
  }
}
export default ProfileSettings;