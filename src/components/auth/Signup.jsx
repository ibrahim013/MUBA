import React, { Component } from "react";
import InputTextField from "../common/InputTextField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import NavBar from '../layout/NavBar';
import { signUpUser } from '../../actions/AuthAction'

// import { registerUser } from "../../actions/authAction";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: "",
      first_name: "",
      last_name:"",
      errors: {}
    };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.signUpUser(this.state, this.props.history);
  };
  render() {
    const { username, email, password1, password2, first_name, last_name, errors } = this.state;
    const { isLoading } = this.props.auth;
    return (
      <div>
        <NavBar/>
        <div className="registration-form">
          <div>
            <h1 className="brand-2">MUBA</h1>
            <p className="side-message">Create your account</p>
          </div>
          <div className="R-form-main">
            <InputTextField
              type="text"
              name="username"
              value={username}
              onChange={this.onChange}
              placeholder="User Name"
              label="Name"
              className={classNames("R-form-data", {
                "is-invalid": errors.username
              })}
              error={errors.username}
              cLabel="R-form-label"
            />
            <InputTextField
              type="text"
              name="first_name"
              value={first_name}
              onChange={this.onChange}
              placeholder="First Name"
              label="First Name"
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
              label="Last Name"
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
              placeholder="email or phone number"
              label="email"
              className={classNames("R-form-data", {
                "is-invalid": errors.email
              })}
              error={errors.email}
              cLabel="R-form-label"
            />
            <InputTextField
              type="password"
              name="password1"
              value={password1}
              onChange={this.onChange}
              placeholder="password"
              label="password"
              className={classNames("R-form-data", {
                "is-invalid": errors.password1
              })}
              error={errors.password1}
              cLabel="R-form-label"
            />
            <InputTextField
              type="password"
              name="password2"
              value={password2}
              onChange={this.onChange}
              placeholder="confirm password"
              label="confirm password"
              className={classNames("R-form-data", {
                "is-invalid": errors.password2
              })}
              error={errors.password2}
              cLabel="R-form-label"
            />
            <div className="submit" onClick={this.onSubmit}>
            {isLoading ? 'Loading...' : 'Create account'} 
            </div>
          </div>
          <footer className="footer-content">
            Already have an account with us?
            <Link to="/login">&nbsp; Login &nbsp; </Link>
            instead.
          </footer>
        </div>
      </div>
    );
  }
}
Signup.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  errors: PropTypes.object,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({ 
  errors: state.errors,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { signUpUser}
)(withRouter(Signup));
