import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={("assets/contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">manojaryal322@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={("assets/contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/manoj-aryal-720475346/">linkedin/Manoj</a>
        </li>
        <li className={styles.link}>
          <img src={("assets/contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/2003Manoj">github/ManojAryal</a>
        </li>
      </ul>
    </footer>
  );
};
