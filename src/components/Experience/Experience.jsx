import React from "react";
import skills from "../../data/skills.json";
import certifications from "../../data/certifications.json"; // Import certifications
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  // Combine all skill arrays into one
  const allSkills = Object.values(skills).flat();

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {allSkills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Certification Section */}
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <ul className={styles.certifications}>
          {certifications.map((certification, index) => (
            <li key={index} className={styles.certification}>
              <div className={styles.certificationImageContainer}>
                <img
                  src={getImageUrl(certification.imageSrc)}
                  alt={certification.title}
                />
              </div>
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificationLink}
              >
                {certification.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
