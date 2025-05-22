import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenidos a Athenyx
      </motion.h1>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Diseño web inclusivo y educación tecnológica en tiempo real.
      </motion.p>
    </div>
  );
}  