import React, { useState } from 'react';
import './Form.css';
import FormSignin from './FormSignin.js';
import FormSuccessSignin from './FormSuccessSignin';
import Welcome from "./signinImages/Welcome.png"

const Form2 = () => {
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
          <FormSignin submitForm={submitForm} />
        ) : (
          <FormSuccessSignin />
        )}
      </div>
    </>
  );
};

export default Form2;