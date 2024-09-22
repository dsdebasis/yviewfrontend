import Video from './Video.jsx'
import { useContext } from 'react'
import { CompContext } from '../../Context/Context.js'
const ChannelVideo = ({videos}) => {
  const {data,channelVideos} = useContext(CompContext)
 
  return (
    <div className='h-full w-full overflow-hidden  my-10 rounded-lg '>  
      <div className=' grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4  place-items-center gap-y-6    lg:gap-4  lg:py-4 '>
        {
          channelVideos?.map((i,index) => {
      
            return <Video key={i} title={channelVideos[index]?.title} src={channelVideos[index]?.videoFile} uploadTime={channelVideos[index]?.uploadTime}  vid={channelVideos[index]?._id} thumbnail={channelVideos[index]?.thumbnail} duration={channelVideos[index]?.duration}/>
          })
        }
      </div>
    </div>
  )
}

export default ChannelVideo
