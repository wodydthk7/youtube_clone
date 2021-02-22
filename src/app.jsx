import styles from './app.module.css';
import React, { useCallback, useEffect, useState } from 'react'
import SearchBar from './components/searchBar/searchBar'
import VideoList from './components/videoList/videoList'


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  
  
  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos))
  }, [])
    

  const handleSearch = useCallback((query) => {
    youtube.search(query)
    .then(videos => setVideos(videos))
  })

  return (
    <div className={styles.App}>
      <SearchBar onSearch={handleSearch}/> 
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
