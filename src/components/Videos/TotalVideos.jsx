import Search from './Search.jsx'
import Video from './Video.jsx'
const TotalVideos = () => {

  let totalVideo = ["a", "a", "c", "d", "e", "f", "g", "h"]

  return (
    <div className='h-auto max-w-full overflow-hidden  my-10 rounded-lg '>
      <Search />
      <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  place-items-center gap-y-4 xl:gap-y-8 '>
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
