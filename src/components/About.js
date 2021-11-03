import React from "react";
import Heading from "./Heading";
import Portrait from "./Portrait";
import AboutPortrait from "../images/blurred.jpg";
import Skills from "./Skills";

const About = ({ innerRef }) => {
  return (
    <section id="about" ref={innerRef}>
      <Heading>About Me</Heading>
      <div className="about">
        <div className="about__text">
          <div className="about__desc">
            <p>Hi, I am Ujjawal, a UI / Front End developer.</p>
            <p>
              I am responsible for building beautiful, elegant and functional
              web applications. I did my bachelors in Computer Application in
              2018. Being passionate about learning &amp; implementing new tools
              and technologies keeps me motivated.
            </p>
            <p>Interesting fact! I also sing &amp; play guitar &#128512;</p>
            <p>
              Coming back to web development, here are few
              <span className="accent-text"> technologies and tools </span>that
              I am familar with:
            </p>
          </div>
          <Skills />
        </div>
        <div className="about__portrait">
          <Portrait src={AboutPortrait} alt="About Me" />
        </div>
      </div>
    </section>
  );
};

export default About;
