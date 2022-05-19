import React from 'react';
import './Form.css';
import Success from "./signinImages/successfullyCompleted.png"
import { Link } from 'react-router-dom';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Login successfull! Kindly click <Link to="/homePage">here</Link> to start</h1>
      <img className='form-img-2' src={Success} alt='success-image' />
    </div>
  );
};

export default FormSuccess;