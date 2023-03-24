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
        <div class="slide">
          <a href="https://baby-journal.herokuapp.com/login">
            <img src="./images/babyJournal.jpg" alt="Baby Journal" />

            <div class="project-description">
              <p>Baby Journal</p>
              <p>
                A journal for keeping track of your baby's milestones and
                memories.
              </p>
            </div>
          </a>
        </div>

        <div class="slide">
          <a href="https://alester77.github.io/Project-Camp/">
            <img src="./images/projectCamp.png" alt="Project Camp" />
            <div class="project-description">
              <p>Project Camp</p>
              <p>A website for finding and booking campsites.</p>
            </div>
          </a>
        </div>

        <div class="slide youtubeVideo">
          <a href="https://www.youtube.com/watch?v=KtrF90Ge3aI">
            <img src="./images/youtubeVideo.png" alt="Shipwreck Dive" />
            <div class="project-description">
              <p>Shipwreck Dive</p>
              <p>A video of a dive to a shipwreck off the coast of Florida.</p>
            </div>
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default Portfolio;
