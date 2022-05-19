import React from 'react';
import validate from './validateInfoSignin';
import useForm from './useFormSignin';
import './Form.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import{useNavigate} from 'react-router-dom'

function FormSignin(){
  
  const navigate=useNavigate(); 
  const bcrypt = require ('bcryptjs')// bcrypt
const saltRounds = 10// data processing time
  const[email,setEmail]=useState("");
  const[password,setPass]=useState("");
  console.log(email)



  
   
    const Login= ()=> { 
      Axios.post("http://localhost:3023/checkLogB", {
         userEmail: email,
         password: password
      }).then((response) => { 
        console.log(response.data)
          if(response.data){
            console.log(response)

          localStorage.setItem("loggedUserID",response.data[0].userID )
          console.log(localStorage.getItem("loggedUserID"))
          navigate('/homePage')
          window.location.reload(false)
          }else{
          alert("Wrong combination or not Signed up")
          }
})}
     /* const Login= ()=> {
        Axios.post('http://localhost:3021/checkLog', {
           userEmail: email,
        }).then((response) => { 
          bcrypt.compare(password, response.data[0].password, function(err, result) {
            if(result){
            window.localStorage.setItem("loggedUserID",response.data[0].userID )
            window.localStorage.setItem("loggedUserFirst",response.data[0].firstName )
            window.localStorage.setItem("loggedUserLast",response.data[0].lastName )
            console.log(window.localStorage.getItem("loggedUserID"))
            console.log(window.localStorage.getItem("loggedUserFirst"))
            console.log(window.localStorage.getItem("loggedUserLast"))
            navigate('/homePage')
          window.location.reload(false)
            }else{
            console.log("Not signed up or wrong combination")
            }
          })
           })
      }
    
  */





  return (
    <div className='form-content-right'>
    <form  className='form' noValidate>
      <h1>
        Please sign in into your account:
      </h1>
      <div className='form-inputs'>
        <label className='form-label'>Email</label>
        <input
          className='form-input'
          type='text'
          name='email'
          placeholder='Enter your email'
         
          onChange={(e)=>{setEmail(e.target.value)}}
   
        />
       
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
          onChange={(e)=>{setPass(e.target.value)}}
        />
        
      </div>
     
      <button className='form-input-btn'  onClick={()=>{Login()}}>
        Sign in
      </button>
      <span className='form-input-login'>
        Don't have an account? Signup <Link to="/">here</Link>
      </span>
    </form>
  </div>
  );
  }

export default FormSignin;