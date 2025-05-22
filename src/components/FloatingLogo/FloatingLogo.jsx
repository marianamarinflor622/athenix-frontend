import React from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingLogo.module.css';
import logoSrc from "../../assets/public/logo.png"; // Adjust the path as necessary

export default function FloatingLogo() {
  return (
    <motion.div
      className={styles.wrapper}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <img src={logoSrc} alt="Athenyx Logo" className={styles.logo} />
    </motion.div>
  );
}