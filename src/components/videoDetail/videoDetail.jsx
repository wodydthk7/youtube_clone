import React from 'react';
import styles from './videoDetail.module.css'

const VideoDetail = ({ video, 
  video: {snippet: {title, channelTitle, description}} }) => {
  return (
    <div>
      <iframe className={styles.video} 
        type="text/html" 
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0" allowfullscreen/>
      <h1>{title}</h1>
      <p>{channelTitle}</p>
      <pre className={styles.describtion}>
        {description}
      </pre>
    </div>
  );
};

export default VideoDetail;