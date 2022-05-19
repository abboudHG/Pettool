import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'

const FormSignup = ({ submitForm }) => {
  const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[age,setAge]=useState(0);
  const[email,setEmail]=useState("");
  const[password,setPass]=useState("");
  const addUser = ()=> {
    Axios.post('http://localhost:3023/create', {
      firstName: fname, lastName: lname, userAge: age, userEmail: email,
      userPassword: password
    }).then((response) => { alert(response.data); });
  }
  /*const displayInfo=()=>{
    console.log(fname+" "+lname+age+email+password);
  };*/
  

  return (
    <div className='form-content-right'>
      <form  className='form' noValidate>
        <h1>
          Create your account by filling out the
          information below.
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            onChange={(event)=>{
              setFname(event.target.value);
            }}
            name='FirstName'
            placeholder='Enter your first name'
          
            
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            onChange={(event)=>{
              setLname(event.target.value);
            }}
            name='LastName'
            placeholder='Enter your last name'
           
           
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Age</label>
          <input
            className='form-input'
            type='text'
            onChange={(event)=>{
              setAge(event.target.value);
            }}
            name='Age'
            placeholder='Enter your age'
           
            
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            onChange={(event)=>{
              setEmail(event.target.value)}}
            name='email'
            placeholder='Enter your email'
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            onChange={(event)=>{
              setPass(event.target.value);
            }}
            name='password'
            placeholder='Enter your password'
           
            
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            
            
          />
          
        </div>
        <button onClick={()=>{addUser()}} className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login 
          <Link to="/signin"> here </Link>
        </span>
      </form>
    </div>
  );
};


export default FormSignup;