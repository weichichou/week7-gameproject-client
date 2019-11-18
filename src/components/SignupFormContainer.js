import React from 'react'
import {signup} from '../action/user'
import {connect} from 'react-redux'

class SignupFormContainer extends React.Component {
    state = {
        email: '',
        password: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        
        this.props.signup(this.state)

        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username: 
                    <input onChange={this.handleChange} type='text' name='username' value={this.state.username} required/>
                </label>
                <label>Email: 
                    <input onChange={this.handleChange} type='text' name='email' value={this.state.email} required/>
                </label>
                <label>Password: 
                    <input onChange={this.handleChange} type='text' name='password' value={this.state.password} required/>
                </label>
                <button>Sign up</button>
            </form>
        )
    }
}

export default connect(null, {signup})(SignupFormContainer)