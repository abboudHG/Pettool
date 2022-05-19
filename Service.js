import './Service.css';
import Axios from 'axios'
import { Link } from 'react-router-dom';
import ServicesComponents from './ServicesComponents';
import { useEffect, useState } from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import{Navigate, useNavigate} from 'react-router-dom'
const Service = () => {
    const navigate=useNavigate();
    console.log(localStorage.getItem("loggedUserID"))
const[services,setServices]=useState([]);


    const getService = () => {
        Axios.post("http://localhost:3023/getTraining",{
        } ).then((response) => { 
           
  setServices(response.data)
    });
      }

useEffect(()=>{
    getService();
})
    return (
        
        <section className="plan" >
        
        <Nav class="navbar">
        <Link to="/homePage" className="plan">Home</Link>
        <Link to="/breeder" className="links"> Breeder</Link>
        <Link to="/Profile" className="links"> Profile</Link>
        <Link to="/services" className="links"> Training services</Link>
        <a href="#" className="btn" onClick={()=>{navigate("/signin")}}> Sign out</a>
    </Nav>
   
    <h1 class="heading"> choose a <span>plan</span> </h1>

    <div class="box-container">
{services.map((service,key)=>{
    return  (<ServicesComponents serviceID={service.serviceID} trainingType={service.trainingType} sessionTime={service.sessionTime} price={service.servicePrice} requirements={service.requirements} numberOfSessions={service.nbOfSessions} />)
})}
    

       
    </div>

</section>
    );
};
export default Service;
