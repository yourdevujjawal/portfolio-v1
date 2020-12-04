import React from "react";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import { ReactComponent as LinkLogo } from "../images/link.svg";

const FeaturedProjects = ({ featuredProject, direction }) => {
  return (
    <div className={`featuredProject ${direction}`}>
      <a
        href={`${featuredProject.links.live}`}
        rel="noreferrer"
        target="_blank"
        className="featuredProject__img"
        title={featuredProject.name}
      >
        <img
          src={require(`../images/${featuredProject.thumbnail}`).default}
          alt={featuredProject.name}
        />
      </a>
      <div className="featuredProject__detail">
        <div className="featuredProject__name">{featuredProject.name}</div>
        <div className="featuredProject__desc">
          {featuredProject.description}
        </div>
        <div className="project__links">
        {
          featuredProject.links.github !== '' && (
            <a
            href={`${featuredProject.links.github}`}
            rel="noreferrer"
            target="_blank"
            className="project-link"
          >
            <span className="link-img">
              <GithubLogo />
            </span>
            <span className="link-text">Github</span>
          </a>
          )
        }
          
          <a
            href={`${featuredProject.links.live}`}
            rel="noreferrer"
            target="_blank"
            className="project-link"
          >
            <span className="link-img">
              <LinkLogo />
            </span>
            <span className="link-text">Live Site</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
