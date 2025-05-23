import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import { sendContact } from "../../api/services";

// Sanitizar entrada para prevenir inyecciones básicas
function sanitize(input) {
  return input.replace(/[<>"'`;]/g, '').trim();
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanValue = sanitize(value);
    setForm({ ...form, [name]: cleanValue });
    setErrors({ ...errors, [name]: '' }); // Limpiar errores al escribir
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name || form.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      newErrors.email = 'Correo electrónico inválido.';
    }
    if (!form.message || form.message.length < 10) {
      newErrors.message = 'El mensaje debe contener al menos 10 caracteres.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('');
      return;
    }

    try {
      await sendContact(form);
      setStatus('✅ Mensaje enviado con éxito.');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } catch {
      setStatus('❌ Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contáctanos</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
          minLength={2}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
          minLength={10}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}

        <button type="submit">Enviar</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
}
