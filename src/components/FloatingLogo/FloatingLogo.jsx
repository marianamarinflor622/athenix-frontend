import React from 'react';
import { motion } from 'framer-motion';
import logo from '/logos/logo2.png';
import styles from './FloatingLogo.module.css';

export default function FloatingLogo() {
  return (
    <motion.img
      src={logo}
      alt="Logo Athenyx flotando"
      className={styles.logo}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ position: 'fixed', top: 20, right: 20 }}
    />
  );
}
