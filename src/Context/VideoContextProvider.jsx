
import { VideoContext } from './useVideoContext.js'
const VideoContextProvider = function ({ children,data }) {
  
  return (
    <VideoContext.Provider value={data} key={data._id} >
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContextProvider;
