import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activar animación al montar el componente
    setAnimate(true);
  }, []);

  return (
    <div className={styles.container} id="home">
      <img
        src="/logos/logo1.png"
        alt="Logo Athenyx"
        className={`${styles.logo} ${animate ? styles.logoAnimated : ''}`}
      />
      <h1 className={styles.title}>Bienvenidos a Athenyx</h1>
      <p className={styles.subtitle}>
        Diseño web inclusivo y educación tecnológica en tiempo real.
      </p>
    </div>
  );
}
