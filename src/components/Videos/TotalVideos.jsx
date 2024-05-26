import Video from './Video.jsx'
import { useContext } from 'react'
import { CompContext } from '../../Context/Context.js'
const TotalVideos = () => {
  const {data,channelVideos} = useContext(CompContext)
 
  let totalVideo ;
  totalVideo = data.videos
  return (
    <div className='min-h-fit max-w-full overflow-hidden  my-10 rounded-lg '>  
      <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  place-items-center gap-y-6  lg:gap-y-5  '>
        {
          totalVideo?.map((i,index,) => {
            
            return <Video key={i} title={channelVideos[index].title} src={channelVideos[index].videoFile} uploadTime={channelVideos[index].uploadTime} videoOwner={""} vid={channelVideos[index]._id}/>
          })
        }
      </div>
    </div>
  )
}

export default TotalVideos
