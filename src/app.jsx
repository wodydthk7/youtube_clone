import './app.css';
import React, {useEffect, useState} from 'react'
import SearchBar from './components/searchBar'
import VideoList from './components/videoList/videoList'
import key from "./youtubeKey"

function App() {
  const [videos, setVideos] = useState([]);
  const mostPopularUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=10&key=' + key[1]

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    console.log(mostPopularUrl)

    fetch(mostPopularUrl, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('errer', error))
  }, [])

  return (
    <div className="App">
      <SearchBar/> 
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
