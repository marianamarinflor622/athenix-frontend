import React from 'react';
import styles from './ContactButton.module.css';

export default function ContactButton() {
  return (
    <a href="#contact" className={styles.button}>
      Contáctanos
    </a>
  );
}