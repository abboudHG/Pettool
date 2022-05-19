import {React,useState} from 'react'
import './Service.css'
import Axios from 'axios'
 export default function ServicesComponents(props){
     const[trainingType,setTrainingType]=useState(props.trainingType);
     const[sessionTime,setTime]=useState(props.sessionTime);
     const[price,setPrice]=useState(props.price);
     const [requirements,setRequirements]=useState(props.requirements);
     const[numberOfSessions,setNumber]=useState(props.number);
     const[serviceID,setID]=useState(props.serviceID)
     const[rating,setRate] =useState(0);
     const[input,setInput] = useState(0)
     var count =2

    var today = new Date()
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const fullDate = date+' '+time;
const partDate = date
console.log(localStorage.getItem("loggedUserID"))


    const Register = () => {
        Axios.post("http://localhost:3023/addTraining", {
       userID : localStorage.getItem("loggedUserID"),
       serviceID : serviceID,
       partDate : fullDate

    
        }).then((response) => {console.log("Registered") });
      };
      if(count >= 0){
        Axios.post("http://localhost:3023/getAverageRateTrainer",{
            serviceID : serviceID
        }).then((response) => { 
           
    setRate(response.data) })
            count = count -1;
        }
    const sendRate=()=>{
        Axios.post("http://localhost:3023/addRatingTrainer",{
            userID : localStorage.getItem("loggedUserID"),
            serviceID : serviceID,
            fullDate: fullDate,
            rating: input
        }).then((response) => { 
           
    alert("Rating sent") })
    
    }



     return(
         <div>
              <div className="box">
            <h3 className="title">{trainingType}</h3>
            <h3 className="day"> {numberOfSessions} </h3>
            <input onChange={(e)=>{setInput(e.target.value)}}></input>
            <a href="#"  onClick={()=>{sendRate()}}> Send Rating</a>
            <i className="fas fa-bicycle icon"></i>
            <div className="list">
                <p> {sessionTime} <span className="fas fa-check"></span> </p>
                <p> {requirements} <span className="fas fa-check"></span> </p>
                
            </div>
            <div className="amount"><span> Average rating: </span>{JSON.stringify(rating)}</div>
            <div className="amount"><span>$</span>{price}</div>
            <a href="#" className="btn" onClick={(e)=>{Register()}}> Register</a>
        </div>
         </div>
     )
 }