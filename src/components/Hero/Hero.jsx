import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nuwani</h1>
        <p className={styles.description}>
          I am currently pursuing a Bachelor of Science (Honors) degree in Artificial Intelligence at the University of Moratuwa. 
          My passion lies in the intersection of software development and machine learning.If you're interested in knowing more, 
          don't hesitate to get in touch!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
