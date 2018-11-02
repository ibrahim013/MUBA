import React from 'react'
import { Link } from 'react-router-dom';


const SideTab = ({optionHeader, optionFooter, ...props}) =>{
  const linkHeader = optionHeader.map((option, index)=> (
    <li key={index}><Link to={option.link}><span><i className={option.icon}></i></span>{option.title}</Link></li>
  ))
  const linkFooter = optionFooter.map((option, index)=> (
  <li key={index}><Link to={option.link}><span> <i className={option.icon}></i></span>{option.title}</Link></li>
  ))
  return (
    <div className="container">
      <div className="side-bar-container">
        <h2 className="brand-3">MUBA</h2>
        <header className="header-link">
          <ul className="dashboard-links">
            {linkHeader}
          </ul>
        </header>
        <footer className="footer-link">
          <ul className="dashboard-links">
            {linkFooter}
          </ul>
        </footer>
      </div>
      <div className="top-bar-container">
        
      </div>
   
    </div>
    
  )
}
export default SideTab