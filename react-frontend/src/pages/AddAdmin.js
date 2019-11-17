import React, { Component } from 'react';
import './scss/AddAdmin.scss'
import BtnGeneric from '../components/BtnGeneric';

class AddAdmin extends Component {

  state = {
    // these state properties are not set in stone
    // just using these to make a quick mock up
    // Add new user button has been clicked to reveal email input field
    inputMode: false,
    email: '',
    pw: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showEmailInput = e => {
    e.preventDefault();
    this.setState({
      inputMode: true
    })
  }

  isFormInvalid = () => {
    // check if email input is valid
    return !(this.state.email && this.state.inputMode);
  }

  sendEmail = e => {
    e.preventDefault();

    // perform email sending here

    console.log("Email sent! (That's the idea at least)");
    this.props.history.push('/admin/signup');
  }

  render() {
    
    const content = this.state.inputMode ? (
      <form 
        className='add-admin-form'
        onSubmit={this.sendEmail}
      >
        <label htmlFor='add-admin-email'>
          Enter the e-mail address of the person you would like to invite as an admin.
        </label>
        <input
          id='add-admin-email'
          className='add-admin-input'
          type='email'
          value={this.state.email}
          name='email'
          placeholder='Email address'
          onChange={this.handleChange}
        />
        <BtnGeneric
          btnText='save new admin'
          btnType='primary'
          disabled={this.isFormInvalid()}
        />
      </form>
    ) : (
      <form onSubmit={this.showEmailInput}>
        <BtnGeneric
          btnText='add new admin'
          btnType='success'
          disabled={false}
        />
      </form>
    );

    return (
      <div className='AddAdmin'>
        {content}
      </div>
    );
  }
}

export default AddAdmin;