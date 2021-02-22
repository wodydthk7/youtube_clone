import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const youtubeService = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtubeService}/>
  </React.StrictMode>,
  document.getElementById('root')
);