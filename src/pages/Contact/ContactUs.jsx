import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import { sendContact } from "../../api/services"; // ✅ BUENA


// Sanitizar funciones básicas
function sanitize(input) {
  return input.replace(/[<>"'`;]/g, '');
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: sanitize(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus('Email inválido');
      return;
    }
    try {
      await sendContact(form);
      setStatus('Mensaje enviado con éxito.');
    } catch {
      setStatus('Error al enviar. Intenta de nuevo.');
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
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
          minLength={10}
        />
        <button type="submit">Enviar</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
}