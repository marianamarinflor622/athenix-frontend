// src/pages/Projects/Projects.jsx
import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

// Rutas relativas desde la carpeta public/images/
const allImages = [
  { id: 2, url: '/images/Imagen 2.jpeg', title: 'NeuroGoods 2' },
  { id: 3, url: '/images/Imagen 3.jpeg', title: 'NeuroGoods 3' },
  { id: 4, url: '/images/Imagen 4.jpeg', title: 'NeuroGoods 4' },
  { id: 5, url: '/images/Imagen 5.jpeg', title: 'NeuroGoods 5' },
];

const PAGE_SIZE = 3;

export default function Projects() {
  const [page, setPage] = useState(1);
  const [resources, setResources] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const next = allImages.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    setResources(prev => {
      const newIds = new Set(prev.map(item => item.id));
      const filteredNext = next.filter(item => !newIds.has(item.id));
      return [...prev, ...filteredNext];
    });

    if (page * PAGE_SIZE >= allImages.length) setHasMore(false);
  }, [page]);

  const lastRef = useInfiniteScroll(() => {
    if (hasMore) setPage(prev => prev + 1);
  });

  return (
    <div className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.galleryGrid}>
        {resources.map((res, i) => (
          <div
            key={res.id}
            ref={i === resources.length - 1 ? lastRef : null}
            className={styles.card}
          >
            <img src={res.url} alt={res.title} className={styles.mediaItem} />
            <div className={styles.overlay}>
              <span className={styles.overlayText}>{res.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
