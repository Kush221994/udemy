import React from "react";
import TopCategories from "./Components/TopCategories";
import img1 from "../src/Images/F1.jpg";
import img2 from "../src/Images/F2.jpg";
import img3 from "../src/Images/F3.jpg";
import Crousel from "./Crousel";
import BodyBackground from "./Components/BodyBackground";
import Courses from "./Components/Courses";
import Features from "./Components/Features";
import Course from "./Components/course/Course";
import { COURSES } from "./Components/helpers/Courses2";

const Home = () => {
  return (
    <>
      <BodyBackground />
      <div className="body">
        <Courses />
        <Crousel />
        <TopCategories />
        <Features />
        <div>
          <div className="i">
            <img src={img1} className="img1" alt="" />
            <div className="img1-des">Become an Instructor</div>
          </div>
        </div>
      </div>
      {COURSES.map((Courses2, i) => (
        <Course
          key={i}
          img={Courses2.img}
          title={Courses2.title}
          subtile={Courses2.subtitle}
          rating={Courses2.rating}
          price={Courses2.price}
        />
      ))}
    </>
  );
};

export default Home;
