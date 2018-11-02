import React, { Component } from 'react'
import InputTextField from "../common/InputTextField";
import classNames from "classnames";

class PasswordChange extends Component {
 state = {
    current_password:'',
    new_password:'',
    verify_password:'',
    errors: {}
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {current_password, new_password, errors, verify_password} = this.state
    return (
      <div>
          <div><h4>Change Password</h4></div>
          <InputTextField
              type="text"
              name="current_password"
              value={current_password}
              onChange={this.onChange}
              placeholder="Current Password"
              className={classNames("R-form-data", {
                "is-invalid": errors.current_password
              })}
              error={errors.current_password}
              cLabel="R-form-label"
            />
            <InputTextField
              type="password"
              name="new_password"
              value={new_password}
              onChange={this.onChange}
              placeholder="New Password"
              className={classNames("R-form-data", {
                "is-invalid": errors.new_password
              })}
              error={errors.new_password}
              cLabel="R-form-label"
            />
            <InputTextField
              type="password"
              name="verify_password"
              value={verify_password}
              onChange={this.onChange}
              placeholder="Verify Password"
              className={classNames("R-form-data", {
                "is-invalid": errors.verify_password
              })}
              error={errors.verify_password}
              cLabel="R-form-label"
            />
            <div className="settings-button">
            <div className="btn btn-blue" onClick={this.onSubmit}>
              RESET
            </div>
            </div>
          </div>
    )}}
export default PasswordChange;