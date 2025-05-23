import React from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingLogo.module.css';

export default function FloatingLogo() {
  return (
    <motion.div
      className={styles.wrapper}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <img src="/logos/athenix.png" alt="Athenyx Logo" className={styles.logo} />
    </motion.div>
  );
}
