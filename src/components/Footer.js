import React from "react";
import { ReactComponent as FooterLogo } from "../images/logo.svg";
import { ReactComponent as Heart } from "../images/heart.svg";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";
import { ReactComponent as LinkedinLogo } from "../images/linkedin.svg";
import { ReactComponent as WhatsappLogo } from "../images/whatsapp.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo-row">
          <FooterLogo title="Ujjawal Chatterjee" />
          <Heart />
        </div>
        <div className="social-row">
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
          </ul>
        </div>
        <a href="mailto:yourdevujjawal@gmail.com" className="footer-mail">
          yourdevujjawal@gmail.com
        </a>
        <div className="footer-copyright">
          Built with Love and Hard-work by Ujjawal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
