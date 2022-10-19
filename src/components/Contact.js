import React from "react";
import Heading from "./Heading";
import Form from "./Form";
const Contact = () => {
  return (
    <section id="contact">
      <Heading>Get In Touch</Heading>

      <div className="contact-wrapper">
        <div className="contact-detail">
          <img
            src={require(`../images/mail-send.png`).default}
            alt="Email"
            className="email-logo"
          />
          <p className="contact__title">Have something to talk about?</p>

          <p className="contact__desc">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll get back to you sooner than you expect.
          </p>
        </div>
        <div className="contact-form">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
