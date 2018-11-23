import React, { Component } from 'react'
import {connect} from "react-redux";
import {getUpload} from "../../actions/UploadAction";
import back from "../../aserts/ back.mp4";
import CatalogList from "../dashboard/CatalogList";
import {Link} from "react-router-dom";

class Catalog extends Component {

componentDidMount(){
  // this.props.getUpload()
}
  render() {
    const{content} = this.props.upload;
    let displayContent;
    if(!content){
      displayContent = (
        <div>
          <h1>no content to view</h1>
        </div>
      )
    } else {
      console.log('yeah', content.payload)
      displayContent =  content.payload.map((file, index) => {
        return(
        <div key={index}>
          <li >{file.id}</li>
        </div>
        )
      })
    }
    let contentV;
    for(let i=1; i<4; i++){
      contentV =(
       <div>
        <video width="300" height="220" controls>
          <source src={back} type="video/mp4" ></source>
        </video>
       </div>
     )
    }
    return (
      <div>
        <CatalogList
          src={back} 
          level= "Beginner"
          intro="this is just a test of concept this is just a test of concept this is just a test of concept"
        />
          <CatalogList
          src={back} 
          level= "Beginner"
          intro="this is just a test of concept this is just a test of concept this is just a test of concept"
        />
          <CatalogList
          src={back} 
          level= "Intermediate"
          intro="this is just a test of concept this is just a test of concept this is just a test of concept"
        />
          <CatalogList
          src={back} 
          level= "Intermediate"
          intro="this is just a test of concept this is just a test of concept this is just a test of concept"
        />
        <CatalogList
          src={back} 
          level= "Advance"
          intro="this is just a test of concept this is just a test of concept this is just a test of concept"
        />
        <CatalogList
          src={back} 
          level= "Advance"
          intro="this is just a test of concept this is just a test of concept this is just a test of concept"
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
upload: state.upload
})
export default connect(mapStateToProps, {getUpload})(Catalog);