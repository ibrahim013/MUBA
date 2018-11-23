import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Main extends Component {
  render() {
    return (
      <div style={{position:'relative', height:'90vh'}}>
        <div className="home-content">
          <h2 className="">Welcome to Muba, You have No active Lesson</h2>
          <Link to="/dashboard/catalog" className="btn btn--brown">Preview Courses</Link>
        </div>
      </div>
    )
  }
}
export default Main;