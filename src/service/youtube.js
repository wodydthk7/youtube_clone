// youtube api를 이용한 네트워크 통신 클래스

class Youtube {
  constructor(key) {
    this.key = key
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=10&key=${this.key}`

    try {
      const response = await fetch(url, this.requestOptions);
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log('errer', error);
    }
  }

  async search(query) {
    if(query === "") {
      return this.mostPopular()
    }

    const url = `https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=25&part=snippet&type=video&key=${this.key}`

    try {
      const response = await fetch(url, this.requestOptions);
      const result = await response.json();
      return result.items.map(item => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube