import React from 'react'
import { VideoContext } from './Context.js';
const VideoContextProvider = function ({ children }) {
  const [videoData,setVideoData] = React.useState()
  return (
    <VideoContext.Provider value={{videoData,setVideoData}}>
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContextProvider;
