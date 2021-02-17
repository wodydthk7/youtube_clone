import React from 'react';
import Video from '../video/video';

const VideoList = (props) => {
  return (
    <ul>
      {
        props.videos.map(video => {
          return <Video key={video.id} src={video}/>
          }
        )
      }
    </ul>
  );
};

export default VideoList;