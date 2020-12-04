import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import ScrollspyNav from "react-scrollspy-nav";
import Resume from "../resume.pdf";

const Navbar = ({ menuState, setMenuState }) => {

  const openResume = () => {
    window.open(Resume)
  }

  return (
    <ScrollspyNav
      scrollTargetIds={["home", "about", "experience", "projects", "contact"]}
      offset={-25}
      activeNavClass="active"
      scrollDuration="1000"
      headerBackground="true"
    >
      <div className="navbar-wrapper">
        <div className="navbar-brand">
          <a href="/" title="Ujjawal Chatterjee">
            <Logo title="Ujjawal Chatterjee" />
          </a>
        </div>
        <button
          className={`hamburger mobile-menu-trigger hamburger--spin ${
            menuState ? "is-active" : ""
          }`}
          type="button"
          onClick={() => setMenuState(!menuState)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <nav className={`navbar${menuState ? " is-active" : ""}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link active">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#experience" className="navbar-link">
                Experience
              </a>
            </li>
            <li className="navbar-item">
              <a href="#projects" className="navbar-link">
                Projects
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="resume-link">
            <a href={Resume} className="btn-outlined" title="Resume" onClick={openResume}>
              Resume
            </a>
          </div>
        </nav>
      </div>
    </ScrollspyNav>
  );
};

export default Navbar;
