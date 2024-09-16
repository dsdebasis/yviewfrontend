import ChannelVideo from '../../Videos/ChannelVideo.jsx'
import { useContext } from 'react'
import { CompContext } from '../../../Context/Context.js'
const VideoPage = () => {
  const {data} = useContext(CompContext)
  
  return (

    <section className='h-auto w-full overflow-hidden  box-border   text-white '>

      <ChannelVideo videos={data?.channelVideos}  />
    </section>
  )
}

export default VideoPage
