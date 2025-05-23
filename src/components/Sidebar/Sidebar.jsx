import React, { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ items, activeId }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={() => setOpen(!open)}
        aria-label="Menú de navegación"
      >
        ☰
      </button>

      <nav className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        {items.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? styles.active : ''}
            onClick={() => setOpen(false)}
          >
            {title}
          </a>
        ))}
      </nav>
    </>
  );
}
