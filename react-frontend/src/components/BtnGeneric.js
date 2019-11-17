import React from 'react';
import './scss/BtnGeneric.scss'

const BtnGeneric = props => (
  <button className={`BtnGeneric ${props.btnType}`} disabled={props.disabled}>
    {props.btnText}
  </button>
);

export default BtnGeneric;