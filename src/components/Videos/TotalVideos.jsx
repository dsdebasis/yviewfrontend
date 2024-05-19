import Video from './Video.jsx'
import { useContext } from 'react'
import { CompContext } from '../../Context/Context.js'
const TotalVideos = () => {
  const {data} = useContext(CompContext)
  // console.log(data)
  let totalVideo ;
  totalVideo = data.videos
  return (
    <div className='min-h-fit max-w-full overflow-hidden  my-10 rounded-lg '>  
      <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  place-items-center gap-y-6  lg:gap-y-5  '>
        {
          totalVideo?.map((i,d) => {
            return <Video key={d} src=""/>
          })
        }
      </div>
    </div>
  )
}

export default TotalVideos
