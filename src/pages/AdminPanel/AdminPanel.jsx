import React, { useState } from 'react';
import styles from './AdminPanel.module.css';
import { uploadResource } from '../../api/services'; // ✅ Importación corregida

// Sanitización básica
function sanitize(input) {
  return input.replace(/[<>"'`;]/g, '');
}

export default function AdminPanel() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Web');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const safeTitle = sanitize(title.trim());
    const safeDescription = sanitize(description.trim());

    if (!safeTitle || !safeDescription || !file) {
      setMessage('Por favor completa todos los campos.');
      return;
    }

    const formData = new FormData();
    formData.append('title', safeTitle);
    formData.append('type', type);
    formData.append('description', safeDescription);
    formData.append('file', file);

    try {
      await uploadResource(formData);
      setMessage('✅ Recurso subido exitosamente');
      setTitle('');
      setDescription('');
      setFile(null);
    } catch (error) {
      console.error(error);
      setMessage('❌ Error al subir recurso');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Panel de Administradora</h2>
      {message && <p className={styles.message}>{message}</p>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(sanitize(e.target.value))}
          className={styles.input}
          required
        />

        <textarea
          placeholder="Descripción"
          value={description}
          onChange={e => setDescription(sanitize(e.target.value))}
          className={styles.textarea}
          required
        />

        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className={styles.select}
        >
          <option value="Web">Web</option>
          <option value="Lab">Lab</option>
        </select>

        <input
          type="file"
          accept="image/*,video/*"
          onChange={e => setFile(e.target.files[0])}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          Subir
        </button>
      </form>
    </div>
  );
}
