import React from 'react';
import Video from '../video/video';
import styles from './videoList.module.css'

const VideoList = ({ onSelected, videos, display}) => {
  const handleSelected = (video) => {
    onSelected(video)
  }

  return (
    <ul className={styles.videos}>
      {
        videos.map(video => {
          return <Video key={video.id} video={video} onSelected={handleSelected} display={display}/>
          }
        )
      }
    </ul>
  );
};

export default VideoList;