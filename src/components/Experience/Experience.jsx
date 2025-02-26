import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li  className={styles.historyItem}>
                <img
                  src={(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role},`}</h3>

                  <ul>

                    <li >Developed multiple responsive websites using ReactJS,
                      implementing modern best practices.
                    </li>
                    <li >Worked with REST APIs to fetch and display dynamic data in realtime.</li>
                    <li >Enhanced the user interface using CSS and TailwindCSS, ensuring a
                      smooth, responsive design.
                    </li>
                    <li >Collaborated with other developers to improve code
                      quality and maintainability through version control </li>

                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
