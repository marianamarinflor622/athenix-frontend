import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContactButton.module.css';

export default function ContactButton() {
  const navigate = useNavigate();
  return (
    <button className={styles.button} onClick={() => navigate('/contacto')}>
      Contáctanos
    </button>
  );
}