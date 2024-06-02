import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { CompContext } from "../../Context/Context"
import { useContext } from "react"
const ChannelHeading = () => {
  const {data,channelVideos} = useContext(CompContext)
  const {about,channelName,profilePic,subscribers,videos,views,createdAt,} = data

 const navigate = useNavigate()
  return (

    <section className=' w-full min-h-fit md:min-h-[350px]  mt-10  bg-gradient-to-br from-slate-600 to-slate-700 shadow-xl   rounded-xl text-white p-2  grid  gap-y-2 md:gap-x-10 md:h-[35vh] md:grid-cols-4  '>

      <div className='  justify-around flex md:flex-col md:justify-evenly  items-center '>
        <img src={profilePic} alt='channel image' className='h-[15vh] w-[15vh] md:h-[20vh] md:w-[20vh] rounded-full  shadow-2xl shadow-stone-800'></img>
        <h1 className='md:text-2xl'>{channelName}</h1>
      </div>
      <div className='md:self-center p-2 text-yellow-400 max-w-full overflow-auto' >{about}

      </div>

      <section className=' md:mx-10  md:col-span-2  grid grid-rows-4  md:gap-y-5 '>
        <div className='h-14 border-2 border-stone-500 flex justify-around  items-center rounded-lg '>
          <h1>subscriber</h1>
          <h1>videos</h1>
          <h1>views</h1>
        </div>
        <div className='row-span-1 grid grid-flow-col '>
          <div className='self-center justify-self-center'>{subscribers.length || 0}</div>
          <div className='self-center justify-self-center'>{channelVideos.length || 0}</div>
          <div className='self-center justify-self-center'>{views || 0}</div>
        </div>
        <div className="text-center capitalize ">{`Channel Created at ${createdAt}`}</div>
        <button className="self-center justify-self-center rounded-lg bg-blue-700  h-10 hover:bg-green-700 w-[200px]">
          <Link onClick={function(){
           navigate("/uploadvideo")
          }}  className='text-white'>Upload Video</Link>
        </button>
      </section>

    </section>

  )
}

export default ChannelHeading
