import React, { Component } from 'react'
import SelectInputField from '../common/SelectInputFiled';
import ReactDropzone from "react-dropzone";
import { connect } from 'react-redux';
import {uploadData} from '../../actions/UploadAction'

class UploadFile extends Component {
  constructor(){
    super()
    this.state = {
      level:"",
      type:"",
      language:"",
      lesson_number: '1',
      upload: {},
      errors:{},
      file:[]
    }
  }
  
  onChange = (event) => {
   this.setState({[event.target.name]:event.target.value})
  }
  onSubmit = (event) => {
    event.preventDefault();
    let data = {
      level: this.state.level,
      type: this.state.type,
      language: this.state.language,
    }
    this.props.uploadData(data, this.state.file)
  }

  onDrop = (file) => {
    this.setState({file})
  };
  onCancel =()=> {
    this.setState({
      file: []
    });
  }
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(nextProps.upload){
      this.setState({upload: nextProps.upload})
    }
  }

  render() {
    const {errors, level, type, language, lesson_number, file, upload} = this.state;
    console.log(upload, "this is a upload")
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
        value: 1
      },
      {
        label: "Intermediate",
        value: 2
      },
      {
        label: "Advance",
        value: 3
      },
    ]
    const courseType =[
      {
        label:" * Select Material Type",
        value: ''
      },
      {
        label: "video",
        value: 1
      },
      {
        label:"ebook",
        value: 2
      }, 
      {
        label:"pdf",
        value: 3
      }, 
    ]
    const courseLanguage =[
      {
        label:" * Select Language",
        value: ''
      },
      {
        label:" Arabia",
        value: 1
      },
      {
        label:"English",
        value: 2
      },
      {
        label: "Yoruba",
        value: 3
      },
      {
        label: "Hausa",
        value: 4
      },
    ]
    

    return (
      <div>
        {/* <div className="progress-container"><progress value={current} max="100"></progress></div> */}
        <h1 className="bottom-space">Coures Upload</h1>
        <div className ="upload-wrapper">
          <SelectInputField
            options={courseOptions}
            name='level'
            error={errors.level}
            value={level}
            onChange={this.onChange}
            info="Select a course level"
          />
          <SelectInputField
            options={courseType}
            name='type'
            error={errors.type}
            value={type}
            onChange={this.onChange}
            info="Select a course type"
          />
          <SelectInputField
            options={courseLanguage}
            name='language'
            error={errors.language}
            value={language}
            onChange={this.onChange}
            info="Select a course language"
          />
          <SelectInputField
            options={lessonNumber}
            name='number'
            error={errors.lesson_number}
            value={lesson_number}
            onChange={this.onChange}
            info="Select a Lesson Number"
          />
        </div>
        <div>
          <ReactDropzone  onDrop={this.onDrop} onFileDialogCancel={this.onCancel} className="drop-style">
          <p> <i className="fas fa-cloud-upload-alt"></i> Drag and Drop files here</p> 
          </ReactDropzone>
          {file.length > 0 && (
          <div className="upload-btn">
            <div className="btn btn-green" onClick={this.onSubmit}>Upload</div>
          </div>)
          }
          <div>
          <ul>
            {
              this.state.file.map(f => <li key={f.name}>{f.name} - {f.size}bytes</li>)
            }
          </ul>
          <ul>
            <h3>Preview</h3>
            {upload.length > 0 &&(
              <div>
                <video>
                <source source={upload.payload.file_url}></source>
                </video>
              </div>
            )
              
            }
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps =(state)=>({
  upload: state.upload.upload
})
export default connect(mapStateToProps, {uploadData}) (UploadFile)