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

        <div class="slide">
          <a href="https://kill-all-tires.herokuapp.com/">
            <img src="./images/KillAllTires.png" alt="Kill All Tires" />
            <div class="project-description">
              <p>Kill All Tires</p>
              <p>An ecommerce site for a fictional mechanic shop</p>
            </div>
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default Portfolio;
