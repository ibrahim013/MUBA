import React, { Component } from 'react'
import SideTab from '../layout/SideTab'
import ProfileSettings from '../settings/ProfileSettings'
import { BrowserRouter as Router, Route} from "react-router-dom";

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
      link: '/catalog'
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
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
      },
      {
        path: "/dashboard/settings/personal-information",
        sidebar: () => <div className="content"><ProfileSettings/></div>,
        main: () => <h2>Settings</h2>
      },
      {
        path: "/dashboard/live-call",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <div ><h2>Shoelaces</h2></div>
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

        <div style={{position: "absolute", top: 0, left:350 }}>
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