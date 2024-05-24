import TotalVideos from './TotalVideos.jsx'
import { useContext } from 'react'
import { CompContext } from '../../../Context/Context.js'
const VideoPage = () => {
  const {data} = useContext(CompContext)
  
  return (

    <section className='h-auto w-full overflow-hidden  box-border   text-white '>

      <TotalVideos  />
    </section>
  )
}

export default VideoPage
