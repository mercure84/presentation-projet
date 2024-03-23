"use client";
import styles from "../page.module.css";

import { FaMobileAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
import { IoServer } from "react-icons/io5";

import { useCallback, useState } from "react";

export default function Offre() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isWebOpen, setWebOpen] = useState(false);
  const [isBackendOpen, setBackendOpen] = useState(false);
  const handlePressWeb = useCallback(
    () => setWebOpen(!isWebOpen),
    [isWebOpen, setWebOpen]
  );

  const handlePressMobile = useCallback(
    () => setMobileOpen(!isMobileOpen),
    [isMobileOpen, setMobileOpen]
  );
  const handlePressBackend = useCallback(
    () => setBackendOpen(!isBackendOpen),
    [isBackendOpen, setBackendOpen]
  );
  return (
    <main className={styles.main}>
      <div className={styles.headerWithBack}>
        <div style={{ flex: 0.5 }}>
          <a href="/">
            <FaArrowLeft size={32} />
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Offre de services</h2>
        </div>
      </div>
      <div className={styles.centerList}>
        <div className={styles.card} onClick={handlePressMobile}>
          <h2>
            <FaMobileAlt style={{ marginInline: 16 }} />
            Applications mobiles
          </h2>
          <div hidden={isMobileOpen}>
            <ul>
              <li>Développement et maintenance d'applications iOS, Android</li>
              <li>Programmation cross platform React Native</li>
              <li>Gestion des stores Apple, Google, Huawei</li>
              <li>Administration de la plateforme Firebase</li>
            </ul>
          </div>
        </div>
        <div className={styles.card} onClick={handlePressWeb}>
          <h2>
            <TbWorldWww style={{ marginInline: 16 }} />
            Applications web
          </h2>
          <div hidden={isWebOpen}>
            <ul>
              <li>Développement et maintenance d'applications Web</li>
              <li>Programmation React.JS / Java</li>
            </ul>
          </div>
        </div>
        <div className={styles.card} onClick={handlePressBackend}>
          <h2>
            <IoServer style={{ marginInline: 16 }} />
            Applications Back End
          </h2>
          <div hidden={isBackendOpen}>
            <ul>
              <li>
                Développement et maintenance d'applications BackEnd (Java,
                Springboot)
              </li>
              <li>Exposition de services RestFull</li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
