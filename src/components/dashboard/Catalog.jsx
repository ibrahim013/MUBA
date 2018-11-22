import React, { Component } from 'react'
import {connect} from "react-redux";
import {getUpload} from "../../actions/UploadAction";
import back from "../../aserts/back.mp4"

class Catalog extends Component {

componentDidMount(){
  this.props.getUpload()
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
        <video width="320" height="240" controls>
          <source src={back} type="video/mp4" ></source>
        </video>
       </div>
     )
    }
    return (
      <div>
        <div className="beginner">
          <h2 className="start">Beginner Intro</h2>
          <div>{contentV}</div>
          <div>{contentV}</div>
        </div>
        <div className="intermediate">
        <h2 className="start">Intermediate Intro</h2>
          <div>{contentV}</div>
          <div>{contentV}</div>
        </div>
        <div className="advance">
        <h2 className="start">Advance Intro</h2>
          <div>{contentV}</div>
          <div>{contentV}</div>
        </div>
       {/* {displayContent} */}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
upload: state.upload
})
export default connect(mapStateToProps, {getUpload})(Catalog);