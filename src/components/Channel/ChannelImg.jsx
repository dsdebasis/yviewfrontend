import React from 'react'

const ChannelImg = ({url}) => {
  return (
    
      <div className='w-[20%] self-start'>
        <img src={url} className=' h-12 w-12 rounded-full md:h-16 md:w-16 xl:h-14 xl:w-14'></img>
      </div>
    
  )
}

export default ChannelImg
