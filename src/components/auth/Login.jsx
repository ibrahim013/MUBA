import React, { Component } from "react";
import InputTextField from "../common/InputTextField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import NavBar from '../layout/NavBar';
import {loginUser} from "../../actions/AuthAction";

// import { registerUser } from "../../actions/authAction";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    this.props.loginUser(this.state, this.props.history);
  };
  render() {
    const { email, password, errors } = this.state;
    const { isLoading } = this.props.auth
    return (
      <div>
        <NavBar/>
        <div className="registration-form">
          <div>
            <h1 className="brand-2">MUBA</h1>
            <p className="side-message">Log into your account</p>
          </div>
          <div className="R-form-main">
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
              name="password"
              value={password}
              onChange={this.onChange}
              placeholder="password"
              label="password"
              className={classNames("R-form-data", {
                "is-invalid": errors.password
              })}
              error={errors.password}
              cLabel="R-form-label"
            />
            <div className="submit" onClick={this.onSubmit}>
              {isLoading ? 'Loading...' : 'Login'}
            </div>
          </div>
          <footer className="footer-content">
            Don't have an account yet?
            <Link to="/signup">&nbsp; Signup &nbsp; </Link>
            instead.
          </footer>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};
const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  {loginUser}
)(withRouter(Login));
