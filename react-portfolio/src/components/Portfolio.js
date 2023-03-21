import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="secHeader">
        <h2>Portfolio</h2>
      </div>
      <div className="Intro">
        <h3> Below are some examples of the work I have completed!</h3>
      </div>

      <Carousel infiniteLoop autoPlay>
        <div>
          <a href="https://github.com/johndean3326/Baby_journal"> </a>
          <img src="/images/babyJournal.jpg" alt="Baby Journal" />
          <p className="Baby-Journal">Baby Journal</p>
        </div>

        <div>
          <a href="https://alester77.github.io/Project-Camp/"> </a>
          <img src="/images/projectCamp.png" alt="Project Camp" />
          <p className="Project Camp">Project Camp</p>
        </div>

        <div>
          <a href="https://www.youtube.com/watch?v=KtrF90Ge3aI"> </a>
          <img src="/images/youtubeVideo.png" alt="Shipwreck Dive" />
          <p className="youtubeVideo">Shipwreck Dive</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Portfolio;
