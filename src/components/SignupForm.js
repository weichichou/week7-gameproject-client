import React from "react";
import { signup } from "../action/user";
import { connect } from "react-redux";
import "./SignupLogin.css";

class SignupForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.signup(this.state);

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            value={this.state.username}
            required
          />
        </label>
        <label className="label">
          Password:
          <input
            onChange={this.handleChange}
            type="text"
            name="password"
            value={this.state.password}
            required
          />
        </label>
        <button>Sign up</button>
      </form>
    );
  }
}

export default connect(null, { signup })(SignupForm);
