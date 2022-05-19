import React from 'react';
import './Form.css';
import Success from "./signinImages/successfullyCompleted.png"
import { Link } from 'react-router-dom';
const FormSuccessBuy = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Signup successfull! Kindly login <Link to="/trainingservice"> here </Link></h1>
      <img className='form-img-2' src={Success} alt='success-image' />
    </div>
  );
};

export default FormSuccessBuy;