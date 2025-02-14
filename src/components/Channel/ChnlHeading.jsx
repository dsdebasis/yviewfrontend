import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const ChannelHeading = ({channelDetails}) => {
  console.log(channelDetails)

 const navigate = useNavigate()
  return (

    <section className=' w-full min-h-fit md:min-h-[350px]  mt-10   shadow-xl   rounded-xl text-white p-2  grid  gap-y-2 md:gap-x-10 md:h-[35vh] md:grid-cols-4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 border-2 border-stone-600 '>

      <div className='  justify-around flex md:flex-col md:justify-evenly  items-center '>
        <img src={channelDetails?.profilePic} alt='channel image' className='h-[15vh] w-[15vh] md:h-[20vh] md:w-[20vh] rounded-full  shadow-2xl shadow-stone-800'></img>
        <h1 className='md:text-2xl bg-gradient-to-br from-amber-700 via-amber-300 to-gray-800 bg-clip-text text-transparent lg:text-4xl capitalize'>{channelDetails?.channelName}</h1>
      </div>
      <div className='md:self-center capitalize p-2  max-w-full overflow-auto bg-gradient-to-r from-white via-pink-600 text-orange-400 bg-clip-text text-transparent' >{ channelDetails?.about} 

      </div>

      <section className=' md:mx-10  md:col-span-2  grid grid-rows-4  md:gap-y-5 '>
        <div className='h-14 border-2 border-stone-500 flex justify-around  items-center rounded-lg capitalize'>
          <h1 >subscriber</h1>
          <h1>videos</h1>
          <h1>views</h1>
        </div>
        <div className='row-span-1 grid grid-flow-col '>
          <div className='self-center justify-self-center'>{ channelDetails?.subscribers?.length || 0}</div>
          <div className='self-center justify-self-center'>{channelDetails?.videos?.length || 0}</div>
          <div className='self-center justify-self-center'>{ channelDetails?.totalViews }</div>
        </div>
        <div className="text-center capitalize ">{`Channel Created at ${"createdAt"}`}</div>
        <button className="self-center justify-self-center rounded-lg border-2 p-2 border-stone-500">
          <Link to={"/uploadvideo"} className="bg-gradient-to-tl from-slate-50 via-stone-200 to-purple-700 inline-block text-transparent bg-clip-text lg:text-2xl" >Upload Video</Link>
        </button>
      </section>

    </section>

  )
}

export default ChannelHeading
