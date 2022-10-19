import React from "react";
import { ReactComponent as HeroPortrait } from "../images/hero-portrait.svg";

const Header = ({ scrollToAbout }) => {
  const onCtaClick = (e) => {
    e.preventDefault();
    scrollToAbout();
  };

  return (
    <section id="home">
      <div className="hero">
        <div className="hero__text">
          <p className="small">Hi, my name is</p>
          <h1 className="h1">Ujjawal Chatterjee</h1>
          <p className="subtitle">I build things for the web 🌐</p>
          <a
            id="headerCta"
            href="#about"
            className="btn btn-outlined"
            title="Know More About Me"
            onClick={onCtaClick}
          >
            Know More
          </a>
        </div>
        <div className="hero__portrait">
          <HeroPortrait title="Ujjawal Chatterjee" />
        </div>
      </div>
    </section>
  );
};

export default Header;
