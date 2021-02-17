import React, { memo } from 'react';
import './video.css'

const Video = memo((props) => {
  const {snippet} = props.src
  const {thumbnails, logo, title, channelTitle} = snippet

  return (
    <li className="video">
      <img className="video__thumbnail" src={thumbnails.medium.url} alt="thumbnail"/>
      <h3 className="video__title">{title}</h3>
      <p className="video__channel-title">{channelTitle}</p>
    </li>
    // <h1>{props.src.snippet.title}</h1>
  );
});

export default Video;