import React, { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ items, activeId }) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (id) => {
    setOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={() => setOpen(!open)}
        aria-label="Menú de navegación"
      >
        {open ? '✖' : '☰'}
      </button>

      <nav className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        {items.map(({ id, title }) => (
          <button
            key={id}
            className={`${styles.link} ${activeId === id ? styles.active : ''}`}
            onClick={() => handleLinkClick(id)}
          >
            {title}
          </button>
        ))}
      </nav>
    </>
  );
}