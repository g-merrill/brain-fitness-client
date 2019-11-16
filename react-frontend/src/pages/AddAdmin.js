import React, { Component } from 'react';
import './scss/AddAdmin.scss'
import BtnGeneric from '../components/BtnGeneric';

class AddAdmin extends Component {

  state = {
    // these are not set in stone, just using these for a quick mock up
    // Add new user button has been clicked to reveal email input field
    referralInputMode: true,
    email: '',
    pw: '',
  }

  render() {
    return (
      <div className='AddAdmin'>
        <BtnGeneric btnName='add new user' btnType='success' />
      </div>
    );
  }
}

export default AddAdmin;