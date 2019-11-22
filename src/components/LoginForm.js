import React from "react";
import { connect } from "react-redux";
import { login } from "../action/user";
import "./SignupLogin.css";

class LoginForm extends React.Component {
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
    console.log("login action?");
    this.props.login(this.state);
  };

  render() {
    return (
      <div>
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
              type="password"
              name="password"
              value={this.state.password}
              required
            />
          </label>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(LoginForm);
