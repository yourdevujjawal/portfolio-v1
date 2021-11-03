import React from "react";

const Skills = () => {
  const skillset = [
    "JavaScript",
    "CSS, SCSS, Bootstrap",
    "React",
    "Redux",
    "Styled Components",
    "HTML",
    "jQuery",
    "Google AMP",
    "Webpack",
    "GIT, SVN, Github, JIRA",
    "Adobe Photoshop",
    "And More!",
  ];

  return (
    <ul className="skills-list">
      {skillset.map((skill, index) => (
        <li className="skill-item" key={index}>
          <span className="skill-arrow"></span>
          <span className="skill-name">{skill}</span>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
