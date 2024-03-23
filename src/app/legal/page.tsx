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
          <h2>Mentions légales</h2>
        </div>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>
          Site WEB réalisé par Julien Marcesse
        </p>
        <br />
        <p>Président de la SASU LP3D </p>
        <p>SIREN N° 888 888</p>
        <p>88 domiciliée Allée des fausses reposes 92370 Chaville.</p>
        <br />
        <p style={{ fontWeight: "bold" }}>
          Hébergement <a href="https://www.ovhcloud.com/fr/">OVH</a>
        </p>
        <br />
        <p>Pour toute demande : contact@lp3d.com</p>
      </div>
      <div></div>
    </main>
  );
}
