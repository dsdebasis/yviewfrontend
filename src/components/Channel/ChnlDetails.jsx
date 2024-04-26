import React from 'react'

const ChannelDetails = () => {
  return (
    <div className='max-w-fit  box-border  flex flex-row justify-between items-center'>
      <div className='w-[20%] self-start'>
        <img src='https://images.pexels.com/photos/13755865/pexels-photo-13755865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className=' h-14 w-14 rounded-full '></img>
      </div>
      <div className='w-[80%] h-full  box-border overflow-hidden'>
        <h1 className='text-slate-400 tracking-wide line-clamp-2 overflow-hidden text-base md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dele</h1>
        <h1 className='text-sm text-lime-300'>Channel Name</h1> 
        <h1 className='text-violet-200'>Channel Details</h1>
      </div>
     
    </div>
  )
}

export default ChannelDetails
