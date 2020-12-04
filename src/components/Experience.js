import React from "react";
import Heading from "./Heading";
import Company from "./Company";

const Experience = ({ portfolioData }) => {
  return (
    <section id="experience">
      <Heading>Where I've Worked</Heading>
      <div className="timeline">
        <Company portfolioData={portfolioData} />
      </div>
    </section>
  );
};

export default Experience;
