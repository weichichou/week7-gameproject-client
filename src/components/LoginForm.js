import React from "react";
import { connect } from "react-redux";
import { login } from "../action/user";

class LoginForm extends React.Component {
  state = {
    email: "",
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              value={this.state.email}
              required
            />
          </label>
          <label>
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
