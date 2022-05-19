import React from 'react';
import validate from './validateInfoAdopt';
import useForm from './useFormAdopt';
import './Form.css';
//import { useState } from 'react';
//import { Link } from 'react-router-dom';

const FormAdopt = ({ submitForm }) => {
  /*const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[age,setAge]=useState(0);
  const[email,setEmail]=useState("");
  const[password,setPass]=useState("");*/
  /*const displayInfo=()=>{
    console.log(fname+" "+lname+age+email+password);
  };*/
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Kindly fill up the adoption form below:
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            /*onSubmit={(event)=>{
              setFname(event.target.value);
            }}*/
            name='FirstName'
            placeholder='Enter your first name'
            value={values.FirstName}
            onChange={handleChange}
          />
          {errors.FirstName && <p>{errors.FirstName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            /*onSubmit={(event)=>{
              setLname(event.target.value);
            }}*/
            name='LastName'
            placeholder='Enter your last name'
            value={values.LastName}
            onChange={handleChange}
          />
          {errors.LastName && <p>{errors.LastName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone number</label>
          <input
            className='form-input'
            type='text'
            /*onSubmit={(event)=>{
              setAge(event.target.value);
            }}*/
            name='phoneNb'
            placeholder='Enter your phone number'
            value={values.phoneNb}
            onChange={handleChange}
          />
          {errors.phoneNb && <p>{errors.phoneNb}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            /*onSubmit={(event)=>{
              setEmail(event.target.value);
            }}*/
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Age</label>
          <input
            className='form-input'
            type='text'
            /*onSubmit={(event)=>{
              setAge(event.target.value);
            }}*/
            name='Age'
            placeholder='Enter your age'
            value={values.Age}
            onChange={handleChange}
          />
          {errors.Age && <p>{errors.Age}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Number of previous pets (if none type 0)</label>
          <input
            className='form-input'
            type='text'
            /*onSubmit={(event)=>{
              setAge(event.target.value);
            }}*/
            name='prevsPets'
            placeholder='Enter your previous number of pets'
            value={values.prevsPets}
            onChange={handleChange}
          />
          {errors.prevsPets && <p>{errors.prevsPets}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Profession/occupation</label>
          <input
            className='form-input'
            type='text'
            /*onSubmit={(event)=>{
              setLname(event.target.value);
            }}*/
            name='profession'
            placeholder='Please enter your profession/occupation'
            value={values.professsion}
            onChange={handleChange}
          />
          {errors.profession && <p>{errors.profession}</p>}
        </div>
        <button /*onClick={displayInfo}*/ className='form-input-btn' type='submit'>
          Submit
        </button>
        
      </form>
    </div>
  );
};

export default FormAdopt;