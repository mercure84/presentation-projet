import styles from "../page.module.css";
import { FaLinkedin } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { linkedin, mail, numTel, formattedNumTel } from "../secret";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.headerWithBack}>
        <div style={{ flex: 0.5 }}>
          <a href="/">
            <FaArrowLeft size={32} />
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Contacts</h2>
        </div>
      </div>
      <div className={styles.centerList}>
        <div className={styles.link}>
          <a href={linkedin}>
            <h2>
              <FaLinkedin size={32} />
              <span> Linkedin</span>
            </h2>
          </a>
        </div>
        <div className={styles.link}>
          <a href={`mailto:${mail}`}>
            <h2>
              <SiMicrosoftoutlook size={32} />
              <span>{` ${mail}`}</span>
            </h2>
          </a>
        </div>
        <div className={styles.link}>
          <a href={`tel:${numTel}`}>
            <h2>
              <IoCall size={32} />
              <span>{` ${formattedNumTel}`}</span>
            </h2>
          </a>
        </div>
      </div>
    </main>
  );
}
