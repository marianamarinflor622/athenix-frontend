// src/pages/AdminLogin/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.css';
import { adminLogin } from '../../api/services';

// Sanitización básica
const sanitize = (input) => input.replace(/[^a-zA-Z0-9]/g, '');

export default function AdminLogin() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const safeUser = sanitize(user.trim());
    const safePass = sanitize(pass.trim());

    if (!safeUser || !safePass) {
      setError('Usuario o contraseña no válidos');
      return;
    }

    try {
      await adminLogin(safeUser, safePass);
      navigate('/marianapa');
    } catch {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={styles.title}>Acceso Administradora</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className={styles.input}
          autoComplete="off"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className={styles.input}
          autoComplete="new-password"
          required
        />

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}
