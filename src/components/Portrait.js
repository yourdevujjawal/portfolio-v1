import React from "react";

const Portrait = ({ src, hero, alt }) => {
  return (
    <div className={`portrait${hero ? " hero-portrait" : ""}`}>
      <div className="portrait__frame"></div>
      <img src={src} alt={alt} className="portrait__img" />
    </div>
  );
};

export default Portrait;
