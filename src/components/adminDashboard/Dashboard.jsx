import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SideTab from '../layout/SideTab';
import UploadFile from './UploadFile';


class Dashboard extends Component {

  render() {
    const optionHearder = [{
      title: 'Home',
      icon:'fas fa-home',
      link: '/admin/dashboard'
    },
    {
      title: 'Upload',
      icon:'far fa-compass',
      link: '/admin/dashboard/upload'
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
        sidebar: () => <div className="content">hello 3</div>,
        main: () => <h2>Home</h2>
      },
      {
        path: "/admin/dashboard/upload",
        sidebar: () => <div className="content"><UploadFile/></div>,
        main: () => <h2>Upload</h2>
      },
      {
        path: "/dashboard/live-call",
        sidebar: () => <div className="content">hello 2</div>,
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