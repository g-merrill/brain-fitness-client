import React, { Component } from 'react';
import './scss/SignupAdmin.scss'
import BtnGeneric from '../components/BtnGeneric';

class SignupAdmin extends Component {

  state = {
    email: '',
    password: '',
    passwordConf: '',
  }

  async componentDidMount() {

    // retrieve email address from link that potential admin got in their email
    // load it into state with this.setState({ email: })

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();

    // new admin post request to api
    // could look something like:
    // await *importedAdminServiceFile*.signup(this.state);

    console.log('Admin account created!');
    this.props.history.push('/login');
  }

  isFormInvalid() {
    return !(this.state.password && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className='SignupAdmin'>
        <p>Welcome to Teacher Brain Fitness!</p>
        <p>To complete your admin profile for:</p>
        <p><span>*insert email address here*</span></p>
        <form onSubmit={this.handleSubmit}>
          <p>Please create a password for your account.</p>
          <input 
            className='signup-admin-input'
            type='password' 
            name='password' 
            placeholder='Enter password' 
            onChange={this.handleChange} 
          />
          <p>Re-enter password to confirm.</p>
          <input 
            className='signup-admin-input'
            type='password' 
            name='passwordConf' 
            placeholder='Confirm password' 
            onChange={this.handleChange} 
          />
          <br/>
          <BtnGeneric 
            btnType='primary' 
            btnText='sign up' 
            disabled={this.isFormInvalid()} 
          />
        </form>
      </div>
    );
  }
}

export default SignupAdmin;