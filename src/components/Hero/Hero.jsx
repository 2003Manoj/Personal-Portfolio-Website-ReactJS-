import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manoj Aryal</h1>
        <p className={styles.description}>
          A passionate and detail-oriented aspiring Frontend Developer with a solid
          understanding of HTML, CSS, JavaScript, ReactJS, Next.js, and TypeScript.
          Eager to contribute to a dynamic team as a Frontend Developer Intern,
          while gaining hands-on experience and advancing my technical skills.

        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={("assets/hero/heroImag.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
