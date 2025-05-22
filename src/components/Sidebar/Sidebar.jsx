import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ items, activeId }) {
  return (
    <nav className={styles.sidebar}>
      {items.map(({ id, title }) => (
        <a
          key={id}
          href={`#${id}`}
          className={activeId === id ? styles.active : ''}
        >
          {title}
        </a>
      ))}
    </nav>
  );
}