import React, { Component } from 'react'
import SelectInputField from '../common/SelectInputFiled';
import ReactDropzone from "react-dropzone";
import { connect } from 'react-redux';
import {progress} from '../../actions/UploadAction'

class UploadFile extends Component {
  constructor(){
    super()
    this.state = {
      course_level:"",
      course_type:"",
      course_language:"",
      lesson_number: '1',
      current: '0',
      errors:{},
      files:[]
    }
    console.log(this.state.current, "this is the current state")
  }
  
  onChange = (event) => {
   this.setState({[event.target.name]:event.target.value})
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.progress(this.state.files)
    console.log(this.state)
  }
  onDrop = (files) => {
    this.setState({files})
  };
  onCancel =()=> {
    this.setState({
      files: []
    });
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.progress){
      console.log(nextProps.progress, "=====next props====")
      this.setState({current: nextProps.progress})
    }
  }

  render() {
    const {errors, course_level, course_type, course_language, lesson_number, files, current} = this.state;
    const lessonNumber = []
    for(let i=1; i<40; i++){
      lessonNumber.push(({value: i, label: i}))
    }
    
    const courseOptions =[
      {
        label:" * Select Course Level",
        value: ''
      },
      {
        label:"Beginner",
        value: "beginner"
      },
      {
        label: "Intermediate",
        value: "intermediate"
      },
      {
        label: "Advance",
        value: "advance"
      },
    ]
    const courseType =[
      {
        label:" * Select Material Type",
        value: ''
      },
      {
        label: "video",
        value: "video"
      },
      {
        label:"ebook",
        value: "ebook"
      }, 
      {
        label:"pdf",
        value: "pdf"
      }, 
    ]
    const courseLanguage =[
      {
        label:" * Select Language",
        value: ''
      },
      {
        label:" Arabia",
        value: 'arabic'
      },
      {
        label:"English",
        value: "english"
      },
      {
        label: "Yoruba",
        value: "youruba"
      },
      {
        label: "Hausa",
        value: "hausa"
      },
    ]
  
  
    
    return (
      <div>
        <div className="progress-container"><progress value={current} max="100"></progress></div>
        <h1 className="bottom-space">Coures Upload</h1>
        <div className ="upload-wrapper">
          <SelectInputField
            options={courseOptions}
            name='course_level'
            error={errors.course_level}
            value={course_level}
            onChange={this.onChange}
            info="Select a course level"
          />
          <SelectInputField
            options={courseType}
            name='course_type'
            error={errors.course_type}
            value={course_type}
            onChange={this.onChange}
            info="Select a course type"
          />
          <SelectInputField
            options={courseLanguage}
            name='course_language'
            error={errors.course_language}
            value={course_language}
            onChange={this.onChange}
            info="Select a course language"
          />
          <SelectInputField
            options={lessonNumber}
            name='lesson_number'
            error={errors.lesson_number}
            value={lesson_number}
            onChange={this.onChange}
            info="Select a Lesson Number"
          />
        </div>
        <div>
          <ReactDropzone accept="video/mp4, application/pdf, image/jpeg" onDrop={this.onDrop} onFileDialogCancel={this.onCancel} className="drop-style">
          <p> <i className="fas fa-cloud-upload-alt"></i> Drag and Drop files here</p> 
          </ReactDropzone>
          {files.length > 0 && (
          <div className="upload-btn">
            <div className="btn btn-green" onClick={this.onSubmit}>Upload</div>
          </div>)
          }
          <div>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size}bytes</li>)
            }
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps =(state)=>({
  progress: state.progress
})
export default connect(mapStateToProps, {progress}) (UploadFile)