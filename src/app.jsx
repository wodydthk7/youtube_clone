import styles from './app.module.css';
import React, { useCallback, useEffect, useState } from 'react'
import SearchBar from './components/searchBar/searchBar'
import VideoList from './components/videoList/videoList'
import VideoDetail from './components/videoDetail/videoDetail';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  
  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos))
  }, [])
    

  const handleSearch = useCallback((query) => {
    youtube.search(query)
    .then(videos => setVideos(videos))
  })

  const handleSelected = useCallback((video) => {
    setSelected(video)
  })

  return (
    <div className={styles.app}>
      <SearchBar onSearch={handleSearch}/> 
      <section className={styles.contents}>
        { selected && <div className={styles.detail}>
            <VideoDetail video={selected}/>
        </div> }
        <div className={styles.list}>
          <VideoList videos={videos} onSelected={handleSelected} display={selected ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
