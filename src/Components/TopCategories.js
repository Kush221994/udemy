import React from 'react';
import category1 from "../Images/category1.jpg";
import category2 from "../Images/category2.jpg";
import category3 from "../Images/category3.jpg";
import category4 from "../Images/category4.jpg";
import category5 from "../Images/category5.jpg";
import category6 from "../Images/category6.jpg";
import category7 from "../Images/category7.jpg";
import category8 from "../Images/category8.jpg";
import "../index.css";

const TopCategories = () => {
    return (
        <>
        
<div className="data">
          <h1> TOP CATEGORIES</h1>
        </div>
        <div className="category">
          <img src={category1} alt="TopCategories" width="50" height="100" />
          <div className="cat_des">Design</div>
        </div>
        <div className="category">
          <img src={category2} alt="TopCategories" />
          <div className="cat_des">Development</div>{" "}
        </div>
        <div className="category">
          <img src={category3} alt="TopCategories" />
          <div className="cat_des">Marketing</div>{" "}
        </div>
        <div className="category">
          <img src={category4} alt="TopCategories" />
          <div className="cat_des">IT and Software</div>{" "}
        </div>
        <div className="category">
          <img src={category5} alt="TopCategories" />
          <div className="cat_des">Personal Development</div>{" "}
        </div>
        <div className="category">
          <img src={category6} alt="TopCategories" />
          <div className="cat_des">Business</div>{" "}
        </div>
        <div className="category">
          <img src={category7} alt="TopCategories" />
          <div className="cat_des">Photography</div>{" "}
        </div>
        <div className="category">
          <img src={category8} alt="TopCategories" />
          <div className="cat_des">Music</div>{" "}
        </div>
    
        </>
    )
}

export default TopCategories;