import React, { useState } from 'react';
import './Form.css';
import FormBuy from './FormBuy.js';
import FormSuccessBuy from './FormSuccessBuy';
import Welcome from "./signinImages/Welcome.png"

const FormB = () => {
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
          <FormBuy submitForm={submitForm} />
        ) : (
          <FormSuccessBuy />
        )}
      </div>
    </>
  );
};

export default FormB;