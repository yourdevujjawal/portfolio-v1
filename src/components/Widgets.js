import React from "react";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";
import { ReactComponent as LinkedinLogo } from "../images/linkedin.svg";
import { ReactComponent as WhatsappLogo } from "../images/whatsapp.svg";
const Widgets = () => {
  return (
    <div className="widget">
      <div className="social-widget">
        <ul className="social-ul">
          <li className="social-li">
            <a
              href="https://github.com/yourdevujjawal"
              title="Github"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </li>
          <li className="social-li">
            <a
              href="https://www.linkedin.com/in/yourdevujjawal"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo />
            </a>
          </li>
          <li className="social-li">
            <a
              href="https://wa.me/919708203477?text=Hi Ujjawal,%20I%20just%20visited%20your%20portfolio%20website."
              title="Whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappLogo />
            </a>
          </li>
          <li className="social-li">
            <a
              href="http://instagram.com/yourdevujjawal"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo />
            </a>
          </li>

          <li className="widget-line"></li>
        </ul>
      </div>
      <div className="mail-widget">
        <a href="mailto:yourdevujjawal@gmail.com">yourdevujjawal@gmail.com</a>
        <div className="widget-line"></div>
      </div>
    </div>
  );
};

export default Widgets;
