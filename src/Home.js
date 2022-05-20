import React from 'react';
import Background from './Background';
import image from '../src/Images/Background.jpg';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TopCategories from './TopCategories';
import  category1 from  '../src/Images/category1.jpg';
import  category2 from  '../src/Images/category2.jpg';
import  category3 from  '../src/Images/category3.jpg';
import  category4 from  '../src/Images/category4.jpg';
import  category5 from  '../src/Images/category5.jpg';
import  category6 from  '../src/Images/category6.jpg';
import  category7 from  '../src/Images/category7.jpg';
import  category8 from  '../src/Images/category8.jpg';

const Home = () => {
    return (
       <>
       
       <div>
       <div className="card_home">
       <div className="card width: 18rem;">
  <div className="card-body">
    <h1 className="card-title">Learning that gets you</h1>
    <p className="card-text">Skills for your present (and your future). Get started with us.</p>
  </div>
  </div>
</div>
       <img src={image} className="img-fluid animated col-12" alt="Background"/>
       </div>
       <div className="data">
       <h1> A broad selection of courses</h1>
       <p>Choose from 183,000 online video courses with new additions published every month</p>
       </div>
       <ul className="list-inline">
          <li> <NavLink aria-current="page" to="/python">Python</NavLink></li>
          <li> <NavLink aria-current="page" to="/excel">Excel</NavLink></li>
          <li><NavLink aria-current="page" to="/webdevelopment">WebDevelopment</NavLink> </li>
          <li><NavLink aria-current="page" to="/javascript">JavaScript</NavLink> </li>
          <li> <NavLink aria-current="page" to="/datascience">Data Science</NavLink> </li>
          <li><NavLink aria-current="page" to="/awscertification">AWS Certification</NavLink> </li>
          <li> <NavLink aria-current="page" to="/Drawing">Drawing</NavLink> </li>
           </ul>
           <div className="data">
           <h1> TOP CATEGORIES</h1>
           </div>
         <div className="category">
           <img src={category1}  alt="TopCategories" width="50" height="100"/><div className="cat_des">Design</div></div>
           <div className="category">
           <img src={category2}  alt="TopCategories"/><div className="cat_des">Development</div> </div>
            <div className="category">
            <img src={category3}  alt="TopCategories"/><div className="cat_des">Marketing</div> </div>
            <div className="category">
            <img src={category4}  alt="TopCategories"/><div className="cat_des">IT and Software</div> </div>
            <div className="category">
            <img src={category5}  alt="TopCategories"/><div className="cat_des">Personal Development</div> </div>
            <div className="category">
            <img src={category6}  alt="TopCategories"/><div className="cat_des">Business</div> </div>
            <div className="category">
            <img src={category7}  alt="TopCategories"/><div className="cat_des">Photography</div> </div>
            <div className="category">
            <img src={category8}  alt="TopCategories"/><div className="cat_des">Music</div> </div>
            <div className="data white-space:pre">
       <h1> Featured topics by category</h1>
       </div>
       
       </>

    )
}

export default Home;