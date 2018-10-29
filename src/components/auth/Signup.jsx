import React, { Component } from "react";
import InputTextField from "../common/InputTextField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import NavBar from '../layout/NavBar';

// import { registerUser } from "../../actions/authAction";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  onSubmit = event => {
    event.preventDefault();
    this.props.registerUser(this.state, this.props.history);
  };
  render() {
    const { name, email, password, confirmPassword, errors } = this.state;
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
              name="name"
              value={name}
              onChange={this.onChange}
              placeholder="Name"
              label="Name"
              className={classNames("R-form-data", {
                "is-invalid": errors.name
              })}
              error={errors.name}
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
            <InputTextField
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.onChange}
              placeholder="confirm password"
              label="confirm password"
              className={classNames("R-form-data", {
                "is-invalid": errors.confirmPassword
              })}
              error={errors.confirmPassword}
              cLabel="R-form-label"
            />
            <div className="submit" onClick={this.onSubmit}>
              Create account
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
  // registerUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
 
});
export default connect(
  mapStateToProps,
  { }
)(withRouter(Signup));
