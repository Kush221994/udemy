import React from "react";

const Course = ({ img, title, subtitle, rating, price }) => {
  return (
    <div className="course">
      <div>
        <img src={img} />
      </div>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{rating}</div>
      <div>{price}</div>
    </div>
  );
};

export default Course;

