import React from "react";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import { ReactComponent as LinkLogo } from "../images/link.svg";

const OtherProjects = ({ otherProject }) => {
  return (
    <div className="other-project">
      <img
        src={require(`../images/${otherProject.thumbnail}`).default}
        alt={otherProject.name}
        className="other-project__bg"
      />
      <div className="other-project__title">{otherProject.name}</div>
      <div className="other-project__desc">{otherProject.description}</div>
      <div className="project__links">
      {
        otherProject.links.github !== '' && (
          <a
          href={`${otherProject.links.github}`}
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
          href={`${otherProject.links.live}`}
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
  );
};

export default OtherProjects;
