import React, { Component } from 'react';
import './scss/AddAdmin.scss'
import BtnGeneric from '../components/BtnGeneric';

class AddAdmin extends Component {

  state = {
    // these are not set in stone, just using these for a quick mock up
    // indicates if user is logged in
    isAuthenticated: true,
    // ensure that the type of user is Admin, otherwise redirect user
    userType: 'Admin',
    // Add new user button has been clicked to reveal email input field
    referralInputMode: true,
    email: '',
    pw: ''
  }

  render() {
    return (
      <div className='AddAdmin'>
        AddAdmin
        <BtnGeneric btnName='add new user' />
      </div>
    );
  }
}

export default AddAdmin;