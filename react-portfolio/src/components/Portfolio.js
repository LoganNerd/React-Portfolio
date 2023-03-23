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

      <Carousel infiniteLoop autoPlay>
        <div>
          <a href="https://github.com/johndean3326/Baby_journal"> </a>
          <img src="/images/babyJournal.jpg" alt="Baby Journal" />
          <h1 className="babyJournal">Baby Journal</h1>
        </div>

        <div>
          <a href="https://alester77.github.io/Project-Camp/"> </a>
          <img src="/images/projectCamp.png" alt="Project Camp" />
          <p className="projectCamp">Project Camp</p>
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
