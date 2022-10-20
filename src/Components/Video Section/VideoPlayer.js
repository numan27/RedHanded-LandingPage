import React from 'react'
import ReactPlayer from 'react-player'


const VideoPlayer = (props) => {
  return (
    <>
    <ReactPlayer
    height="280px"
    width="480px"
    controls url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
    light={props.thumbnail}
    />
    
    </>
  )
}

export default VideoPlayer;