import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SideTab from '../layout/SideTab';
import Main from './Main';
import ProfileSettings from '../settings/ProfileSettings';
import Catalog from './Catalog';
import LiveCall from './LiveCall';

class Dashboard extends Component {

  render() {

    const optionHearder = [{
      title: 'Home',
      icon:'fas fa-home',
      link: '/dashboard'
    },
    {
      title: 'Catalog',
      icon:'far fa-compass',
      link: '/dashboard/catalog'
    },
    {
      title: 'Live Call',
      icon:'fas fa-video',
      link: '/dashboard/live-call'
    }]
    const optionFooter =[{
      title: 'Setting',
      icon:'fas fa-cog',
      link: '/dashboard/settings/personal-information'
    },
    {
      title: 'Logout',
      icon:'fas fa-sign-out-alt',
      link: '/logout'
    }]

    const routes = [
      {
        path: "/dashboard",
        exact: true,
        sidebar: () => <div className="content"><Main/></div>,
        main: () => <h2>Home</h2>
      },
      {
        path: "/dashboard/catalog",
        sidebar: () => <div className="content content-more"><Catalog/></div>,
        main: () => <h2>Catalog</h2>
      },
      {
        path: "/dashboard/settings/personal-information",
        sidebar: () => <div className="content"><ProfileSettings/></div>,
        main: () => <h2>Settings</h2>
      },
      {
        path: "/dashboard/live-call",
        sidebar: () => <div className="content"><LiveCall/></div>,
        main: () =><h2>Live Call</h2>
      }
    ];
    return (
      <Router>
      <div>
        <div>
          <div className="container">
            <SideTab optionHeader={optionHearder} optionFooter={optionFooter}/>
          </div>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div style={{position: "absolute", top: 4, left:350 }}>
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
 )}
}
export default Dashboard