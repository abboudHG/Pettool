import React from 'react';
import './App.css';
import Form from './Form';
import Form2 from './Form2';
import FormA from './FormA';
import FormB from './FormB';
import Service from './Service';
import Breeder from './Components/Breeder/Breeder';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import Shelter from './Components/Shelter/Shelter';
import BreedPets from './Components/Pets/PetBreed';
import Profile from './Components/profile'

import HomePage from './Components/HomePage/HomePage'
function App() {
  return (
    
    <Router>
      <div>
      
      
      <Routes>
  <Route exact path="/" element={<Form/>}/>
  <Route path="/signin" element={<Form2/>}/>
  <Route path="/adopt" element={<FormA/>}/>
  <Route path="/buy" element={<FormB/>}/>
  <Route path="/homePage" element={<HomePage/>}/>
  <Route path="/trainingservice" element={<Service/>}/>
  <Route path="/shelter" element={<Shelter/>}/>
  <Route path="/breeder" element={<Breeder/>}/>
  <Route path="/services" element={<Service/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/BreedPets" element={<BreedPets/>}/>
  <Route path="/Profile" element={<Profile/>}/>


</Routes>
      </div>



    </Router>

  )
}

export default App;