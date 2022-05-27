import React from 'react';
import { COURSES } from "../helpers/Courses3";
import DevCourse from "./courses/DevCourse"; 

const Slider = () => {
    return (
<>
{COURSES.map((Courses3, i) => (
        <DevCourse
          key={i}
          img={Courses3.img}
          title={Courses3.title}
          subtile={Courses3.subtitle}
          rating={Courses3.rating}
          price={Courses3.price}
        />
      ))}
</>
    )
}

export default Slider;