import React from "react";

const Skills = () => {
  const skillset = [
    "React",
    "HTML",
    "CSS, SASS",
    "JavaScript (ES6)",
    "jQuery",
    "Bootstrap",
    "Webpack",
    "GIT, SVN, Github",
    "Photoshop",
    "Illustrator",
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
