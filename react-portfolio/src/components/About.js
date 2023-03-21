import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="secHeader">
        <h2> About Me: </h2>
      </div>
      <div className="selfieContainer">
        <div className="selfieIMG">
          <img
            src="./images/campingSelfie.jpg"
            alt="camping selfie"
            height="300px"
            width="150px"
          />
        </div>
      </div>
      <div className="aboutMeContainer">
        <div className="aboutMe">
          <p>Hi! My name Is Logan Juul and I am a junior software developer!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
