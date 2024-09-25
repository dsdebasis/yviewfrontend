import React, { useState } from 'react'
import { CompContext } from './Context.js'

const ChannelContextProvider = ({ children }) => {
  const [data,setData] = React.useState({
    about:"", profilePic:"", channelName:"", createdAt:"", videos:[], subscribers:"" 
  })
  const [totalViews,setTotalViews] = useState(0)
  const [channelVideos,setChannelVideos] = React.useState([])
  return (
    <CompContext.Provider value={{data,setData,channelVideos,setChannelVideos,setTotalViews,totalViews}}>
        {children}
    </CompContext.Provider>
  )
}

export default ChannelContextProvider
