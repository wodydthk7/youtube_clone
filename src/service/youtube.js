// youtube api를 이용한 네트워크 통신 클래스
import axios from 'axios'

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3/',
      params: {key: key}
    })
  }

  // using fetch
  // constructor(key) {
  //   this.key = key
  //   this.requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
  // }

  async mostPopular() {
    // axios instance method는 promise를 리턴함
    try {
      const response = await this.youtube.get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          regionCode: 'KR',
          maxResults: 20,
        }
      })
      return response.data.items;
    } catch (error) {
      return console.log('errer', error);
    }

    
    // using fetch
    // const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=10&key=${this.key}`

    // try {
    //   const response = await fetch(url, this.requestOptions);
    //   const result = await response.json();
    //   return result.items;
    // } catch (error) {
    //   return console.log('errer', error);
    // }
  }

  async search(query) {
    if(query === "") {
      return this.mostPopular()
    }
    
    try {
      const response = await this.youtube.get('search', {
        params: {
          q: query,
          maxResults: 25,
          part: 'snippet',
          type: 'video'
        }
      })
      return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  }

  // using fetch
  //   const url = `https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=25&part=snippet&type=video&key=${this.key}`

  //   try {
  //     const response = await fetch(url, this.requestOptions);
  //     const result = await response.json();
  //     return result.items.map(item => ({ ...item, id: item.id.videoId }));
  //   } catch (error) {
  //     return console.log('error', error);
  //   }
  // }
}

export default Youtube