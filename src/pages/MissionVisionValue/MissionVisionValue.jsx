import React from 'react';
import styles from './MissionVisionValue.module.css';

export default function MissionVisionValue() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Misión, Visión y Valores</h2>

      <section className={styles.section}>
        <h3 className={styles.subtitle}>Misión</h3>
        <p className={styles.text}>
          Empoderar a desarrolladores junior y personas con neurodivergencias mediante una plataforma que combine portafolio vivo y recursos educativos.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.subtitle}>Visión</h3>
        <p className={styles.text}>
          Ser la referencia global en diseño web inclusivo y educación tecnológica en tiempo real.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.subtitle}>Valores</h3>
        <ul className={styles.list}>
          <li>Inclusión</li>
          <li>Transparencia</li>
          <li>Colaboración</li>
          <li>Excelencia Técnica</li>
          <li>Aprendizaje Continuo</li>
        </ul>
      </section>
    </div>
  );
}