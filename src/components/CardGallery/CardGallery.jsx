import React from 'react';
import { motion } from 'framer-motion';
import styles from './CardGallery.module.css';

export default function CardGallery({ items, renderItem, lastRef }) {
  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          ref={i === items.length - 1 ? lastRef : null}
          className={styles.card}
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {renderItem(item)}
          <h3 className={styles.caption}>{item.title}</h3>
        </motion.div>
      ))}
    </div>
  );
}
