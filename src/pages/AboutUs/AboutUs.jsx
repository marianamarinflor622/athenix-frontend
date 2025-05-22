import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  const [muted, setMuted] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Quiénes Somos</h2>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          url="/videos/video.mp4"
          controls
          muted={muted}
          width="100%"
          height="100%"
        />
        <button
          className={styles.muteButton}
          onClick={() => setMuted(!muted)}
        >
          {muted ? 'Encender Audio' : 'Silenciar'}
        </button>
      </div>
      <p className={styles.text}>
        En Athenyx somos un equipo multidisciplinar de diseñadores y desarrolladores comprometidos con la inclusión digital. Fusionamos creatividad y tecnología para crear experiencias accesibles y adaptadas.
      </p>
    </div>
  );
}