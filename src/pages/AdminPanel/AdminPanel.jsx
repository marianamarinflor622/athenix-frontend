import React, { useState } from 'react';
import apiClient from '../../api/client'; // ✅ Usamos apiClient en lugar de axios
import { uploadResource } from '../../api/services';
import styles from './AdminPanel.module.css';

export default function AdminPanel() {
  // Estados para subir recurso
  const [file, setFile] = useState(null);
  const [contentId, setContentId] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [message, setMessage] = useState('');

  // Estados para crear contenido
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [contentMessage, setContentMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !contentId || !resourceType) {
      setMessage('Todos los campos son obligatorios');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('contentId', contentId);
    formData.append('resourceType', resourceType);

    try {
      await uploadResource(formData);
      setMessage('Archivo subido con éxito');
    } catch {
      setMessage('Error al subir archivo');
    }
  };

  const handleCreateContent = async () => {
    try {
      const res = await apiClient.post('/contents', {
        title,
        description,
        category,
      });
      setContentId(res.data.id); // usar el ID para el siguiente formulario
      setContentMessage('Contenido creado con éxito');
    } catch {
      setContentMessage('Error al crear contenido');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Formulario para crear contenido */}
        <div className={styles.card}>
          <h2 className={styles.title}>Crear contenido</h2>
          <div className={styles.form}>
            <input
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título"
            />
            <input
              className={styles.input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción"
            />
            <input
              className={styles.input}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Categoría"
            />
            <button className={styles.button} onClick={handleCreateContent}>
              Guardar contenido
            </button>
            {contentMessage && <p className={styles.message}>{contentMessage}</p>}
          </div>
        </div>

        {/* Formulario para subir recurso */}
        <div className={styles.card}>
          <h2 className={styles.title}>Subir recurso</h2>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="file"
              onChange={handleFileChange}
            />
            <input
              className={styles.input}
              type="number"
              value={contentId}
              onChange={(e) => setContentId(e.target.value)}
              placeholder="ID del contenido"
            />
            <input
              className={styles.input}
              type="text"
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value)}
              placeholder="Tipo de recurso"
            />
            <button className={styles.button} onClick={handleUpload}>
              Subir recurso
            </button>
            {message && <p className={styles.message}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
