import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Categories from "./Categories";
import Home from "./Home";
import TeachonUdemy from "./TeachonUdemy";
import UdemyBusiness from "./UdemyBusiness";
import Navbar from './Navbar';
import Background from './Background';
import image from '../src/Images/Background.jpg';
import Python from './Python';
import Excel from './Excel';
import WebDevelopment from './WebDevelopment';
import JavaScript from './JavaScript';
import DataScience from './DataScience';
import AWSCertification from './AWSCertification';
import Drawing from './Drawing';
const App = () => {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route exact path = "/" element={<Home />} />
      <Route exact path = "/categories" element={<Categories name="Categories" />} />
      <Route exact path = "/udemybusiness" element={<UdemyBusiness name="UdemyBusiness" />} />
      <Route exact path = "/teachonudemy" element={<TeachonUdemy name="TeachonUdemy" />} />
           <Route exact path="/python" element={<Python name="Python"/>} />
           <Route exact path="/excel" element={<Excel name="Excel"/>} />
           <Route exact path="/webdevelopment" element={<WebDevelopment name="Web Development"/>} />
           <Route exact path="/javascript" element={<JavaScript name="JavaScript"/>} />
           <Route exact path="/datascience" element={<DataScience name="DataScience"/>} />
           <Route exact path="/awscertification" element={<AWSCertification name="AWSCertification"/>} />
           <Route exact path="/drawing" element={<Drawing name="Drawing"/>} />
    </Routes> 
    
  
    
    </>

  )

}

export default App;