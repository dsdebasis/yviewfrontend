import Video from './Video.jsx'
import { useContext } from 'react'
import { CompContext } from '../../Context/Context.js'
const TotalVideos = ({videos}) => {
  const {data,channelVideos} = useContext(CompContext)
 
  return (
    <div className='min-h-fit max-w-full overflow-hidden  my-10 rounded-lg '>  
      <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  place-items-center gap-y-6  lg:gap-y-5 '>
        {
          channelVideos?.map((i,index) => {
      
            return <Video key={i} title={channelVideos[index]?.title} src={channelVideos[index]?.videoFile} uploadTime={channelVideos[index]?.uploadTime}  vid={channelVideos[index]?._id} thumbnail={channelVideos[index]?.thumbnail} duration={channelVideos[index]?.duration}/>
          })
        }
      </div>
    </div>
  )
}

export default TotalVideos
