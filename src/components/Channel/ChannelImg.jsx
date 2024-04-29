import React from 'react'

const ChannelImg = ({url}) => {
  return (
    
      <div className=' self-start px-2'>
        <img src={url} className=' h-12 w-12 rounded-full  xl:h-14 xl:w-14'></img>
      </div>
    
  )
}

export default ChannelImg
