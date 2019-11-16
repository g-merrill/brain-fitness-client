import React from 'react';
import './scss/BtnGeneric.scss'

const BtnGeneric = props => (
  <button className='BtnGeneric'>
    {props.btnName}
  </button>
);

export default BtnGeneric;