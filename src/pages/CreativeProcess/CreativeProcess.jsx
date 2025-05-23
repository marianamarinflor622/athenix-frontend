import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CreativeProcess.module.css';
import { fetchResources, fetchComments, postComment } from '../../api/services'; // ✅ ruta corregida
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

// Función de sanitización básica
function sanitize(input) {
  return input.replace(/[<>"'`;]/g, '');
}

export default function CreativeProcess() {
  const [resources, setResources] = useState([]);
  const [filter, setFilter] = useState(null);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    async function load() {
      const data = await fetchResources(page, filter);
      setResources(prev => [...prev, ...data.items]);
    }
    load();
  }, [page, filter]);

  const lastRef = useInfiniteScroll(() => setPage(p => p + 1));

  useEffect(() => {
    if (!selected) return;
    async function loadComments() {
      const data = await fetchComments(selected.id);
      setComments(data);
    }
    loadComments();
  }, [selected]);

  const handlePostComment = async () => {
    const safeText = sanitize(newComment.trim());
    if (!safeText) return;
    await postComment(selected.id, safeText);
    const updated = await fetchComments(selected.id);
    setComments(updated);
    setNewComment('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Proceso Creativo</h2>

      <div className={styles.filters}>
        <button onClick={() => { setFilter('Web'); setResources([]); setPage(1); }}>Web</button>
        <button onClick={() => { setFilter('Lab'); setResources([]); setPage(1); }}>Lab</button>
      </div>

      <div className={styles.grid}>
        {resources.map((r, i) => (
          <motion.div
            key={r.id}
            ref={i === resources.length - 1 ? lastRef : null}
            className={styles.card}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelected(r)}
          >
            <img src={`http://localhost:8080${r.url}`} alt={r.title} className={styles.media} />
            <h3 className={styles.caption}>{r.title}</h3>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className={styles.detailPanel}>
          <button className={styles.closeBtn} onClick={() => setSelected(null)}>×</button>
          <h3>{selected.title}</h3>

          {selected.resourceType === 'video' ? (
            <video
              src={`http://localhost:8080${selected.url}`}
              controls
              className={styles.detailMedia}
            />
          ) : (
            <img
              src={`http://localhost:8080${selected.url}`}
              alt={selected.title}
              className={styles.detailMedia}
            />
          )}

          {/* Botón de descarga */}
          <a
            href={`http://localhost:8080/api/resources/download/${selected.resourceName}`}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Descargar recurso
          </a>

          <p className={styles.description}>{selected.description}</p>

          <div className={styles.commentsSection}>
            <h4>Comentarios</h4>
            {comments.map(c => (
              <p key={c.id} className={styles.comment}>{c.text}</p>
            ))}
            <textarea
              className={styles.commentInput}
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={e => setNewComment(sanitize(e.target.value))}
            />
            <button className={styles.commentBtn} onClick={handlePostComment}>
              Publicar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}