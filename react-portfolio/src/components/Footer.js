import React from "react";
import "./Footer.css";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="iconContainer">
      <a href="https://www.youtube.com/channel/UC_Sgy7R9cDc9DUqz4XyH_tA">
        <FaYoutube className="icon-youtube" />
      </a>
      <a href="https://github.com/LoganNerd">
        <FaGithub className="icon-github" />
      </a>
      <a href="https://www.linkedin.com/in/logan-juul-703b20257/">
        <FaLinkedin className="icon-linkedin" />
      </a>
    </div>
  );
}
export default Footer;
