import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup.js';
import FormSuccess from './FormSuccess';
import Welcome from "./signinImages/Welcome.png"

const Form = () => {
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
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;