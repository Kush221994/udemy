import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Courses = () => {
  return (
    <>
      <div className="data">
        <h1> A broad selection of courses</h1>
        <p>
          Choose from 183,000 online video courses with new additions published
          every month
        </p>
      </div>

      <ul className="list-inline">
        <li className="list-items ">
          {" "}
          <NavLink className="asachin" aria-current="page" to="/python">
            Python
          </NavLink>
        </li>
        <li className="list-items">
          {" "}
          <NavLink className="asachin" aria-current="page" to="/excel">
            Excel
          </NavLink>
        </li>
        <li className="list-items">
          <NavLink className="asachin" aria-current="page" to="/webdevelopment">
            WebDevelopment
          </NavLink>{" "}
        </li>
        <li className="list-items">
          <NavLink className="asachin" aria-current="page" to="/javascript">
            JavaScript
          </NavLink>{" "}
        </li>
        <li className="list-items">
          {" "}
          <NavLink className="asachin" aria-current="page" to="/datascience">
            Data Science
          </NavLink>{" "}
        </li>
        <li className="list-items">
          <NavLink
            className="asachin"
            aria-current="page"
            to="/awscertification"
          >
            AWS Certification
          </NavLink>{" "}
        </li>
        <li className="list-items">
          {" "}
          <NavLink className="asachin" aria-current="page" to="/Drawing">
            Drawing
          </NavLink>{" "}
        </li>
      </ul>
    </>
  );
};

export default Courses;
