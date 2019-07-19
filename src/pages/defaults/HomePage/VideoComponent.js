import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class VideoComponent extends Component {
  render () {
    return <ReactPlayer width='100%' height='600px' url='https://www.youtube.com/watch?v=bGe2xMPvRRk'  />
    //Nếu cho video tự động phát thì thêm "playing" ở cuối 
  }
}

export default VideoComponent;