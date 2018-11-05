import React, { Component } from 'react'
import InputTextField from "../common/InputTextField";
import classNames from "classnames";
import { connect } from 'react-redux'
class BasicInformation extends Component {
 state = {
    first_name:'',
    last_name:'',
    email:'',
    phone_number:'',
    errors: {}
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.auth.profile){
      this.setState({
        first_name: nextProps.auth.profile.first_name,
        last_name: nextProps.auth.profile.last_name,
        email: nextProps.auth.profile.email,
        phone_number: nextProps.auth.profile.phone_number
      })
    }
  }
  render() {
    const {first_name, last_name, errors, email, phone_number} = this.state
    const {profile} = this.props.auth
    return (
      <div>
          <div><h4>Basic Information</h4></div>
          <InputTextField
              type="text"
              name="first_name"
              value={first_name}
              onChange={this.onChange}
              placeholder="First Name"
              className={classNames("R-form-data", {
                "is-invalid": errors.first_name
              })}
              error={errors.first_name}
              cLabel="R-form-label"
            />
            <InputTextField
              type="text"
              name="last_name"
              value={last_name}
              onChange={this.onChange}
              placeholder="Last Name"
              className={classNames("R-form-data", {
                "is-invalid": errors.last_name
              })}
              error={errors.last_name}
              cLabel="R-form-label"
            />
            <InputTextField
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="email"
              className={classNames("R-form-data", {
                "is-invalid": errors.email
              })}
              error={errors.email}
              cLabel="R-form-label"
              disabled
            />
            <InputTextField
              type="text"
              name="phone_number"
              value={phone_number}
              onChange={this.onChange}
              placeholder="Phone Number"
              className={classNames("R-form-data", {
                "is-invalid": errors.phone_number
              })}
              error={errors.phone_number}
              cLabel="R-form-label"
            />
            <div className="settings-button">
              <div className="btn btn-blue" onClick={this.onSubmit}>
                CANCEL
              </div>
              <div className="btn btn-green" onClick={this.onSubmit}>
              SAVE
              </div>
            </div>
            
          </div>
    )}}
    const mapStateToProps=(state) => ({
      auth: state.auth
    })
export default connect(mapStateToProps, {})(BasicInformation);