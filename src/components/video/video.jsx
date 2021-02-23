import React, { memo } from 'react';
import styles from './video.module.css'

const Video = memo(({ 
  onSelected,
  video,
  display,
  video: { snippet : { thumbnails, title, channelTitle}}}) => {
  const displayType = display === 'grid' ? styles.grid : styles.list;
  
  return (
    <li className={`${styles.container} ${displayType}`}>
      <div className={`${styles.video} ${displayType}`} onClick={() => (onSelected(video))}>
        <img className={`${styles.thumbnail} ${displayType}`} src={thumbnails.medium.url} alt="thumbnail"/>
        <div className={`${styles.metaData} ${displayType}`}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channelTitle}>{channelTitle}</p>
        </div>
      </div>
    </li> 
  )
});

export default Video;