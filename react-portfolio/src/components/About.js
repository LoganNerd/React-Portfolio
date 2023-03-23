import React from "react";
import "./About.css";

function About() {
  return (
    <div class="aboutMePage">
      <div class="secHeader">
        <h2>About Me:</h2>
      </div>
      <div class="aboutMeContainer">
        <div class="selfieIMG">
          <img src="./images/seniorpic.jpeg" alt="camping selfie" />
        </div>
        <div class="aboutMe">
          <p>
            Hi, my name is Logan Juul and I'm a junior software developer with a
            passion for technology. I've been teaching myself how to code since
            5th grade, and most recently graduated from a 24-week full stack web
            development bootcamp through Denver University.
          </p>
          <p>
            During the bootcamp, I learned the basics of HTML, CSS, and
            JavaScript, and then broadened my knowledge with SQL/noSQL, React,
            MERN, jQuery, API's, ExpressJS, NodeJS, and Github. I'm excited to
            start my new career in the tech industry and continue learning and
            growing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
