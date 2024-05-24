import React from 'react'
import { CompContext } from './Context.js'

const ContextProvider = ({ children }) => {
  const [data,setData] = React.useState("debasis")
  const [channelVideos,setChannelVideos] = React.useState({"ds":"debasis"})
  return (
    <CompContext.Provider value={{data,setData,channelVideos,setChannelVideos}}>
        {children}
    </CompContext.Provider>
  )
}

export default ContextProvider
