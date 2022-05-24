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
import image from '../src/Images/Background.png';
import Python from './Python';
import Excel from './Excel';
import WebDevelopment from './WebDevelopment';
import JavaScript from './JavaScript';
import DataScience from './DataScience';
import AWSCertification from './AWSCertification';
import Drawing from './Drawing';
import MachineLearning from './MachineLearning';
import FinancialAnalysis from './FinancialAnalysis';
import SQL from './SQL';
import PMP from './PMP';
import EthicalHacking from './EthicalHacking';
import CyberSecurity from './CyberSecurity';
import Photoshop from './Photoshop';
import GraphicDesign from './GraphicDesign';
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
           <Route exact path="/machinelearning" element={<MachineLearning name="Machine Learning"/>} />
           <Route exact path="/financialanalysis" element={<FinancialAnalysis name="Financial  Analysis"/>} />
           <Route exact path="/sql" element={<SQL name="SQL"/>} />
           <Route exact path="/pmp" element={<PMP name="PMP"/>} />
           <Route exact path="/ethicalhacking" element={<EthicalHacking name="EthicalHacking"/>} />
           <Route exact path="/cybersecurity" element={<CyberSecurity name="CyberSecurity"/>} />
           <Route exact path="/photoshop" element={<Photoshop name="Photoshop"/>} />
           <Route exact path="/graphicdesign" element={<GraphicDesign name="GraphicDesign"/>} />
    </Routes> 
    
  
    
    </>

  )

}

export default App;