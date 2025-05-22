import React from 'react';
import styles from './Section.module.css';

export default function Section({ id, children }) {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
}