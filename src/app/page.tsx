import styles from "./page.module.css";
import ImageAnimation from "@/app/components/ImageAnimation";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>LP3D</code>
        </p>
        <div>By Julien Marcesse</div>
      </div>

      <div className={styles.center}>
        <ImageAnimation />
      </div>

      <div className={styles.grid}>
        <a
          href="/presentation"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Qui suis-je ? <span>-&gt;</span>
          </h2>
        </a>

        <a href="/offre" className={styles.card} rel="noopener noreferrer">
          <h2>
            Offre de services <span>-&gt;</span>
          </h2>
        </a>

        <a href="/projets" className={styles.card} rel="noopener noreferrer">
          <h2>
            Projets réalisés <span>-&gt;</span>
          </h2>
          <p></p>
        </a>
        <a href="/contact" className={styles.card} rel="noopener noreferrer">
          <h2>
            Contacts <span>-&gt;</span>
          </h2>
        </a>
      </div>
      <div>
        <a href="/legal">
          <p style={{ fontSize: 16 }}>Mentions légales</p>
        </a>
      </div>
    </main>
  );
}
