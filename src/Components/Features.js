import React from "react";
import { NavLink } from "react-router-dom";

const Features =()=>{
    return (
<>
<div className="topics-bckgrnd">
          <div className="topic-features">Featured topics by category</div>
          <div className="topics">
            <div className="topic-dev">
              <div className="development">Development</div>
              <div>
                <NavLink aria-current="page" to="/python">
                  Python
                </NavLink>
              </div>

              <div>34,963,846 students</div>
              <div className="padding">
                <NavLink aria-current="page" to="/webdevelopment">
                  WebDevelopment
                </NavLink>{" "}
              </div>
              <div>10,964,794 students</div>
              <div className="padding">
                <NavLink aria-current="page" to="/machinelearning">
                  Machine Learning
                </NavLink>
              </div>

              <div>6,889,330 students</div>
              <div className="padding">
                <div className="box">Explore more topics</div>
              </div>
            </div>
            <div className="topic-bus">
              <div className="business">Business</div>
              <div>
                <NavLink aria-current="page" to="/financialanalysis">
                  Financial Analysis
                </NavLink>
              </div>
              <div>1,173,918 students</div>
              <div className="padding">
                <NavLink aria-current="page" to="/sql">
                  SQL
                </NavLink>
              </div>
              <div>5,608,264 students</div>
              <div className="padding">
                <NavLink aria-current="page" to="/pmp">
                  PMP
                </NavLink>
              </div>
              <div>1,655,518 students</div>
            </div>
            <div className="topic-itandsoft">
              <div className="itandsoft">IT and Software</div>
              <div>
                <NavLink aria-current="page" to="/awscertification">
                  AWS Certification
                </NavLink>
              </div>
              <div>5,587,052 students</div>
              <div className="padding">
                <NavLink aria-current="page" to="/ethicalhacking">
                  Ethical Hacking<br></br>
                </NavLink>
              </div>
              <div>10,542,092 students</div>
              <div className="padding">
                <NavLink aria-current="page" to="/cybersecurity">
                  Cyber Security
                </NavLink>
              </div>

              <div>3,840,282 students</div>
            </div>
            <div className="topic-des">
              <div className="design">Design</div>
              <div>
                <NavLink aria-current="page" to="/photoshop">
                  Photoshop
                </NavLink>
              </div>
              <div>10,635,378 students</div>
              <div className="padding">
                <NavLink aria-current="page" to="/graphicdesign">
                  Graphic Design
                </NavLink>
              </div>

              <div>3,262,449 students</div>
              <div className="padding">
                <NavLink aria-current="page" to="/Drawing">
                  Drawing
                </NavLink>
              </div>
              <div>2,403,930 students</div>
            </div>
          </div>
        </div>
        
      
</>
    )
}

export default Features;