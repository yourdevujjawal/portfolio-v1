import React from "react";
import Heading from "./Heading";
import Portrait from "./Portrait";
import ContactPortrait from "../images/myPotrait.jpg";
const Contact = () => {
  return (
    <section id="contact">
      <Heading>Get In Touch</Heading>
      <div className="contact-wrapper">
        <Portrait src={ContactPortrait} alt={"Contact Ujjawal"} />
        <div className="contact-detail">
          <p className="contact__title">Have something to talk about?</p>
          <p className="contact__desc">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll get back to you sooner than you expect.
          </p>
          <a
            href="mailto:yourdevujjawal@gmail.com"
            className="btn btn-outlined"
            title="Say Hello"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
