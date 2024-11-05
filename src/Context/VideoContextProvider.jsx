import React from 'react'
import { VideoContext } from './useVideoContext'
const VideoContextProvider = function ({ children,data }) {
  // const [videoData,setVideoData] = React.useState([{}])
  return (
    <VideoContext.Provider value={data}>
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContextProvider;
