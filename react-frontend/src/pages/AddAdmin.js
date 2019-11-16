import React, { Component } from 'react';
import './scss/AddAdmin.scss'
import BtnGeneric from '../components/BtnGeneric';

class AddAdmin extends Component {
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