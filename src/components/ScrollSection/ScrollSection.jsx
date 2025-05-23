import React from 'react';
import { InView } from 'react-intersection-observer';
import styles from './ScrollSection.module.css';

export default function ScrollSection({ id, onEnter, children }) {
  return (
    <InView
      as="section"
      id={id}
      className={styles.section}
      onChange={(inView) => inView && onEnter && onEnter()}
      threshold={0.5}
      triggerOnce={false}
    >
      {children}
    </InView>
  );
}