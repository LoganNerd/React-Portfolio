import React from "react";
import "./Home.css";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { BsFiletypeCss, BsFiletypeSql } from "react-icons/bs";
import { SiApollographql, SiJquery } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

function Home() {
  return (
    <div class="grid-container">
      <div class="welcome">
        <h1>Logan Juul</h1>
      </div>
      <div class="smallIntro">
        <h3>
          Hi, welcome to my portfolio! I am a junior full stack web developer
          who loves making beautiful websites! I have experience in quite a few
          different languages and packages and love solving problems.
        </h3>
      </div>

      <div class="icon-container">
        <BsFiletypeCss class="icon-css" />
      </div>
      <div class="icon-container">
        <FaNodeJs class="icon-node" />
      </div>
      <div class="icon-container">
        <DiJavascript1 class="icon-java" />
      </div>
      <div class="icon-container">
        <FaReact class="icon-react" />
      </div>
      <div class="icon-container">
        <FaHtml5 class="icon-html" />
      </div>
      <div class="icon-container">
        <BsFiletypeSql class="icon-sql" />
      </div>
      <div class="icon-container">
        <SiApollographql class="icon-apollo" />
      </div>
      <div class="icon-container">
        <SiJquery class="icon-query" />
      </div>
      <div class="icon-container">
        <AiFillApi class="icon-api" />
      </div>
      <div class="learn">
        <button className="infoButton">Learn more About me!</button>
      </div>
      <div class="port">
        <button className="infoButton">Check out my Portfolio!</button>
      </div>
      <div class="contact">
        <button className="infoButton">Contact me!</button>
      </div>
    </div>
  );
}

export default Home;
