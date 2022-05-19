import React, { useState } from 'react';
import './Form.css';
import FormAdopt from './FormAdopt.js';
import FormSuccessAdopt from './FormSuccessAdopt';
import Welcome from "./signinImages/Welcome.png"

const FormA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
       
      {/*<span className='close-btn'>×</span>*/}
        <div className='form-content-left'>
          <img className="form-img" src={Welcome} alt='Welcome' />
        </div>
        {!isSubmitted ? (
          <FormAdopt submitForm={submitForm} />
        ) : (
          <FormSuccessAdopt />
        )}
      </div>
    </>
  );
};

export default FormA;