import React from 'react';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import FloatingLogo from '../../components/FloatingLogo/FloatingLogo';

export default function Home() {
  return (
    <div className={styles.container}>
      <FloatingLogo />
      <motion.div
        className={styles.welcome}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Bienvenidos a Athenyx</h1>
        <p>Diseño web inclusivo y educación tecnológica en tiempo real.</p>
      </motion.div>
    </div>
  );
} 