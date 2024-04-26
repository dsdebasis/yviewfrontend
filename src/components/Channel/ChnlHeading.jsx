import { Link } from "react-router-dom"
const ChannelHeading = () => {
  return (
    
      <section className=' w-full min-h-fit md:min-h-[350px]  mt-10  bg-gradient-to-br from-slate-600 to-slate-700 shadow-xl   rounded-xl text-white p-2  grid  gap-y-2 md:gap-x-10 md:h-[35vh] md:grid-cols-4  '>

        <div className='  justify-around flex md:flex-col md:justify-evenly  items-center '>
          <img src={"https://images.pexels.com/photos/747101/pexels-photo-747101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='channel image' className='h-[15vh] w-[15vh] md:h-[20vh] md:w-[20vh] rounded-full  shadow-2xl shadow-stone-800'></img>
          <h1 className='md:text-2xl'>channel name</h1>
        </div>
        <div className='md:self-center p-2 text-yellow-400 max-w-full overflow-auto' >Meet India's best tech creater dsdebasis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem cupiditate qui laborum eos perferendis laudantium atque,
      
        </div>

        <section className=' md:mx-10  md:col-span-2  grid grid-rows-3  md:gap-y-5 '>
          <div className='h-14 border-2 border-stone-500 flex justify-around  items-center rounded-lg '>
            <h1>subscriber</h1>
            <h1>videos</h1>
            <h1>views</h1>
          </div>
          <div className='row-span-3 grid grid-flow-col '>
            <div className='self-center justify-self-center'>a</div>
            <div className='self-center justify-self-center'>b</div>
            <div className='self-center justify-self-center'>c</div>
          </div> 
          <button className="self-center justify-self-center rounded-lg bg-blue-700  h-14 hover:bg-green-700 w-[200px]">
          <Link to="/uploadvideo" className='text-white'>Upload Video</Link>
          </button>
        </section>
        
      </section>
    
  )
}

export default ChannelHeading
