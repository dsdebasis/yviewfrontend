import Search from './Search.jsx'
import Video from './Video.jsx'
const TotalVideos = () => {

  let totalVideo = ["a", "a", "c", "d", "e", "f", "g", "h"]

  return (
    <div className='min-h-fit max-w-full overflow-hidden  my-10 rounded-lg '>
      <Search />
      <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  place-items-center gap-y-6  lg:gap-y-5  '>
        {
          totalVideo.map((i,d) => {
            return <Video key={d}/>
          })
        }
      </div>

    </div>
  )
}

export default TotalVideos
