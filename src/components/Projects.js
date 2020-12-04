import React from "react";
import Heading from "./Heading";
import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

const Projects = ({ projectsData }) => {
  return (
    <section className="section-projects" id="projects">
      <Heading>Some Things I've Built</Heading>
      <p>
        Being a front end developer, I am continuously improving my skillset and making new projects. So far, I have created more than 25 website and applications.
      </p>
      <p>Here are few of those projects that I have built:</p>
      <div className="featured-projects">
        {projectsData.featuredProjects.map((featuredProject, index) => (
          <FeaturedProjects
            featuredProject={featuredProject}
            key={`featuredproject-${index}`}
            direction={index / 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
      <div className="other-projects">
        <Heading>Other Noteworthy Projects</Heading>
        <div className="other-projects-wrapper">
          {projectsData.otherProjects.map((otherProject, index) => (
            <OtherProjects
              otherProject={otherProject}
              key={`otherProject-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
