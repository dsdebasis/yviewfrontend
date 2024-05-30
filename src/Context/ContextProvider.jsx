import React from 'react'
import { CompContext } from './Context.js'

const ChannelContextProvider = ({ children }) => {
  const [data,setData] = React.useState({
    about:"", profilePic:"", channelName:"", createdAt:"", videos:[], subscribers:"" 
  })
  const [channelVideos,setChannelVideos] = React.useState({"ds":"debasis"})
  return (
    <CompContext.Provider value={{data,setData,channelVideos,setChannelVideos}}>
        {children}
    </CompContext.Provider>
  )
}

export default ChannelContextProvider
