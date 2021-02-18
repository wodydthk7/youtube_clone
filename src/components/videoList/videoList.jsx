import React from 'react';
import Video from '../video/video';
import styles from './videoList.module.css'

const VideoList = (props) => {
  return (
    <ul className={styles.videos}>
      {
        props.videos.map(video => {
          return <Video key={video.id} video={video}/>
          }
        )
      }
    </ul>
  );
};

export default VideoList;