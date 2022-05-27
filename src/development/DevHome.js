import React from "react";
import "../index.css";
import Slider from "./Slider";
import PopularTopics from "../development/PopularTopics";
import PtopicsArr from "../development/PtopicsArr";
const DevHome = () => {
  return (
    <>
      <div className="devnavbar">
        <div className="devnavbarcategory">Development</div>
        <div>Web Development</div>
        <div>Data Science</div>
        <div>Mobile Development</div>
        <div>Programming Language</div>
        <div>Game Development</div>
        <div>Database Design & Development</div>
        <div>Software Designing</div>
      </div>
      <div className="devheading">Development Courses</div>
      <div className="devsubheading">Courses to get you started</div>
      <div className="courseheading">
        {/* <div className="topics"> */}
          <div>Most Popular</div>
          <div>New</div>
          <div>Trending</div>
        {/* </div> */}
      </div>
      <Slider />
      {/* <div className="devheading">Popular Topics</div>
      {PtopicsArr.map((PtopicsArr, i) => (
        <PopularTopics
          key={i}
         name={PtopicsArr.name}
        /> */}
      ))}
    </>
  );
};

export default DevHome;
