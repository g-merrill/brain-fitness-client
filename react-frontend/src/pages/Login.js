import React, { Component } from 'react';
import './scss/Login.scss'
import BtnGeneric from '../components/BtnGeneric';

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isInvalid = () => {
    return !(this.state.email.length > 5 && this.state.password);
  }

  handleSubmit = async e => {
    e.preventDefault();

    // perform log in process

    console.log('logged in!')
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='Login'>
        <h1>Login</h1>
        <form 
          className='login-form' 
          onSubmit={this.handleSubmit}
        >
          <input 
            className='login-input' 
            type="email" 
            name="email" 
            placeholder='Enter email here'
            onChange={this.handleChange} 
          />
          <input 
            className='login-input' 
            type="password" 
            name="password" 
            placeholder='Enter password here'
            onChange={this.handleChange} 
          />
          <BtnGeneric 
            btnText='log in'
            btnType='primary'
            disabled={this.isInvalid()}
          />
        </form>
      </div>
    );
  }
}

export default Login;