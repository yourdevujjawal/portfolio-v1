import React from "react";
import Heading from "./Heading";
import Portrait from "./Portrait";
import AboutPortrait from "../images/myPotrait.jpg";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about">
      <Heading>About Me</Heading>
      <div className="about">
        <div className="about__text">
          <div className="about__desc">
            <p>
              Hi, I am Ujjawal, a Front-end / UI developer.
            </p>
            <p>
              Being a front-end developer, I take care of the responsibility to build beautiful, elegant and functional websites and web applications. I have done my Bachelors in Computer applications. 
            </p>
            <p>
              My passion is to learn and implement new technologies in my work. Although, somewhere at the back of my heart, I am also a singer and musician. So, creativity has been there in me from the beginning.
            </p>
            <p>
              Coming back to programming and web development, here are few
              <span className="accent-text"> technologies and tools </span>that
              I am currently working with:
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
