import styles from "../page.module.css";
import Image from "next/image";

import { FaArrowLeft } from "react-icons/fa";

export default function Presentation() {
  return (
    <main className={styles.main}>
      <div className={styles.headerWithBack}>
        <div style={{ flex: 0.5 }}>
          <a href="/">
            <FaArrowLeft size={32} />
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Présentation</h2>
        </div>
      </div>
      <div className={styles.center}>
        <div>
          <Image
            className={styles.logo}
            src="/portrait.jpg"
            alt="portrait julien marcesse"
            width={162}
            height={192}
            priority
          />
        </div>
        <div style={{ marginInline: 16, width: "50%" }}>
          <p>
            Fort de 12 ans d'expérience dans la Banque de Détail, en tant que
            Conseiller et Directeur d'Agence, j'ai opéré en 2018 une
            reconversion professionnelle pour exercer le métier de développeur
            informatique.
          </p>
          <br />
          <p>
            Je développe depuis 2019 des applications mobiles iOS et Android
            avec la librairie React Native et des sites web avec React JS. Je
            maintiens également des API servers avec Java, SpringBoot,
            Hibernate.
          </p>
          <var>
            <br />
          </var>
          <p>
            J'accompagne mes clients dans le développements de leurs projets.
            Ayant une double compétence technique / fonctionnelle, je peux être
            un développeur avec un rôle actif dans le pilotage du delivery.
          </p>
          <br />

          <p>J'ai créé ma société de consulting IT en 2024 : LP3D.</p>
        </div>
      </div>
      <div></div>
    </main>
  );
}
