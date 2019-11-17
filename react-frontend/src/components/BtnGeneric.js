import React from 'react';
import './scss/BtnGeneric.scss'

const BtnGeneric = props => (
  <button className={`BtnGeneric ${props.btnType}`}>
    {props.btnText}
  </button>
);

export default BtnGeneric;