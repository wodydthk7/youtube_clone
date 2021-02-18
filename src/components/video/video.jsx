import React, { memo } from 'react';
import styles from './video.module.css'

const Video = memo(({video: { snippet : { thumbnails, title, channelTitle}}}) => (
    <li className={styles.container}>
      <div className={styles.video}>
        <img className={styles.thumbnail} src={thumbnails.medium.url} alt="thumbnail"/>
        <div className={styles.metaData}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channelTitle}>{channelTitle}</p>
        </div>
      </div>
    </li>
));

export default Video;