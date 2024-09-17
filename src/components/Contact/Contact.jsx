import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      {/* Contact Information Heading (Above Form) */}
      <div className={styles.text}>
        <h2>CONTACT ME</h2>
      </div>

      {/* Contact Form Section */}
      <div className={styles.formContainer}>
        <form
          className={styles.contactForm}
          action="https://formspree.io/f/mdknvpwo"
          method="POST"
        >
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Email Subject"
                required
              />
            </div>
          </div>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className={styles.sendButton}>
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section with Links in a Row */}
      <div className={styles.footerContainer}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:nuwanisamarakoon.online@gmail.com">
              Gmail
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/nuwani-samarakoon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a
              href="https://www.github.com/nuwanisamarakoon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
