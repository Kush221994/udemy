import React from 'react';
import image from "../Images/Background.png";
import "../index.css";

const BodyBackground=() => {
return (
<>
<div>
        <div className="card_home">
          <div className="card width: 18rem;">
            <div className="card-body">
              <h1 className="card-title">Our biggest sale of the season</h1>
              <p className="card-text">
                Stock up on courses from ₹385. From coding to leadership to
                photography, you can learn almost anything. Ends May 25.
              </p>
            </div>
          </div>
        </div>
        <img
          src={image}
          className="img-fluid animated col-12"
          alt="Background"
        />
      </div> 
</>
)
}
export default BodyBackground;
