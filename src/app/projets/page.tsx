import styles from "../page.module.css";
import Image from "next/image";

import { FaArrowLeft } from "react-icons/fa";

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.headerWithBack}>
        <div style={{ flex: 0.5 }}>
          <a href="/">
            <FaArrowLeft size={32} />
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Projets réalisés</h2>
        </div>
      </div>
      <div className={styles.center}>
        <div style={{ marginInline: 16, width: "100%" }}>
          <h1>Projets professionnels</h1>
          <br />

          <p>
            2020 - 2024 : SG, application mobile iOS / Android des particuliers,
            professionels, entreprises
          </p>
          <p>
            2019 - 2024 : SG, maintien d'une API Back End exposant des services
            liés à la restitution de données des clients
          </p>
          <br />
          <h1>Projets étudiants</h1>
          <br />

          <p>Création d'une application mobile de suivi d'un aquarium marin</p>
          <p>Création d'un site de gestion d'une biblitohèque municipale</p>
          <p>Réalisation d'un site communautaire sur l'escalade</p>
          <p>Réalisation d'un jeu de Mastermind et d'un solver</p>
          <br />
          <h1>Projets personnels</h1>
          <br />

          <p>
            Scrapping de références / produits aquariophiles sur différents site
            de VPC avec restitution sur Grafana.
          </p>
          <p>Station météo de relevé de données via des sondes sans fil</p>
          <p>Suivi et gestion d'un vivarium à base de Raspberry pi / Arduino</p>
        </div>
      </div>
      <div></div>
    </main>
  );
}
