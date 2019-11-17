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

  render() {

    const content = this.state.inputMode ? (
      <>
        <label htmlFor="add-admin-email">
          Enter the e-mail address of the person you would like to invite as an admin.
        </label>
        <input
          id="add-admin-email"
          type='email'
          value={this.state.email}
          name='email'
          placeholder='email address'
          onChange={this.handleChange}
        />
      </>
    ) : (
      <BtnGeneric
        btnText='add new admin'
        btnType='success'
      />
    )

    return (
      <div className='AddAdmin'>
        <form 
          className='add-admin-form' 
          onSubmit={this.showEmailInput}
        >
          {content}
        </form>
      </div>
    );
  }
}

export default AddAdmin;