import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Sidebar.module.css';

const links = [
  { path: '/', label: 'Inicio' },
  { path: '/quienes-somos', label: 'Quiénes Somos' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/que hacemos', label: 'Que Hacemos' },
  { path: '/proceso-creativo', label: 'Proceso Creativo' }
];

export default function Sidebar() {
  return (
    <motion.nav
      className={styles.sidebar}
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {links.map(({ path, label }) => (
        <NavLink key={path} to={path} className={({ isActive }) => (isActive ? styles.active : '')}>
          {label}
        </NavLink>
      ))}
    </motion.nav>
  );
}