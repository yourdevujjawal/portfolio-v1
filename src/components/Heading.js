import React from "react";
const Heading = ({ children }) => {
  return (
    <div className="heading-wrapper" data-aos="fade-up">
      <h2 className="section-heading">{children}</h2>
    </div>
  );
};

export default Heading;
