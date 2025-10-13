import React from "react";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Our Projects</h1>
      <p className="projects-description">
        Take a look at some of our recent installations and projects.
      </p>

      <div className="projects-grid">
        {/* Example Project Cards */}
        <div className="project-card">
          <img
            src={`${process.env.PUBLIC_URL}/image/modernwindow.png`}
            alt="Project 1"
            className="project-image"
          />
          <div className="project-info">
            <h3>Modern Window Installation</h3>
            <p>
              Completed in 2024, this modern villa features energy-efficient
              windows.
            </p>
          </div>
        </div>

        <div className="project-card">
          <img
            src={`${process.env.PUBLIC_URL}/image/sliding_door.png`}
            alt="Project 2"
            className="project-image"
          />
          <div className="project-info">
            <h3>Sliding Door Upgrade</h3>
            <p>Elegant sliding doors added to a luxury apartment balcony.</p>
          </div>
        </div>

        {/* <div className="project-card">
          <img src="/image/project3.jpg" alt="Project 3" className="project-image" />
          <div className="project-info">
            <h3>Commercial Glass Facade</h3>
            <p>Custom glass facade designed for a corporate building.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
