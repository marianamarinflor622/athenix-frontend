import React from 'react';
import styles from './WhatWeDo.module.css';

const steps = [
  { no: '01', title: 'Análisis & Estrategia', items: ['Consultoría', 'Plan de Marketing', 'Informes', 'Auditoría'] },
  { no: '02', title: 'Creatividad & Diseño', items: ['Branding', 'Producción Audiovisual'] },
  { no: '03', title: 'Solución & Desarrollo', items: ['Web', 'E-commerce', 'Apps', 'Otras aplicaciones'] },
  { no: '04', title: 'Visibilidad & Conversión', items: ['SEO & SEM', 'Influencers', 'Funnels', 'Email Marketing'] },
];

export default function WhatWeDo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cómo lo Hacemos</h2>
      <div className={styles.grid}>
        {steps.map(({ no, title, items }) => (
          <div key={no} className={styles.card}>
            <div className={styles.number}>{no}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <ul className={styles.list}>
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}