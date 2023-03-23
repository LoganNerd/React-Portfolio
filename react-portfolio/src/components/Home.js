import React from "react";
import "./Home.css";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";

function Home() {
  return (
    <div class="grid-container">
      <div class="welcome">
        <h1>Welcome to my Portfolio!</h1>
      </div>
      <div class="introContainer">
        <div class="Introduction">
          <h2>
            I am a junior developer who thrives on collaboration and am always
            eager to expand my knowledge in the field.
          </h2>
        </div>
        <div class="icon-container">
          <DiJavascript1 class="icon-java" />
        </div>
      </div>
      <div class="introContainer">
        <div class="Introduction2">
          <h2>
            As a technology enthusiast, I have a profound passion for developing
            sophisticated websites with an aesthetically pleasing interface.
          </h2>
        </div>
        <div class="icon-container">
          <FaHtml5 class="icon-html" />
        </div>
      </div>
      <div class="introContainer">
        <div class="Introduction3">
          <h2>
            I have gained a ton of knowledge through participation in complex
            projects and solving issues which includes React, SQL and more!
          </h2>
        </div>
        <div class="icon-container">
          <BsFiletypeCss class="icon-css" />
        </div>
      </div>
      <div class="introContainer">
        <div class="Introduction4">
          <h2>Learn more About Me!</h2>
        </div>
        <div class="icon-container"></div>
      </div>
      <div class="introContainer">
        <div class="Introduction5">
          <h2>Check out my Portfolio</h2>
        </div>
        <div class="icon-container"></div>
      </div>
      <div class="introContainer">
        <div class="Introduction6">
          <h2>Check out my Resume!</h2>
        </div>
        <div class="icon-container"></div>
      </div>
    </div>
  );
}

export default Home;
