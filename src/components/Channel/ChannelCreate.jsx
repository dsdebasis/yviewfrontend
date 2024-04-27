import React from 'react'
import Input from '../Input/Input'

const ChannelCreate = () => {
  return (
    <section className='h-screen w-screen   bg-gradient-to-br from-slate-500 to-gray-900 flex flex-col justify-center items-center px-6'>
      <form className='min-h-[80vh] w-full border-2  rounded-2xl px-5 xl:w-[40vw] flex flex-col  gap-y-10  shadow-2xl py-2 text-white'>

        <header className='text-center xl:text-lg'>Create Your Channel</header>

        <div>
          <label htmlFor='channelName'>Channel Name</label>
          <Input name={"channelName"} type="text" required={true} placeholder={"channel name"} />
        </div>

        <div>
          <label htmlFor='channelPic'>Channel Pic</label>
          <Input name={"channelPic"} type={"file"} required={true} css={"mt-1 h-16"} />
        </div>


        <div className='w-full flex flex-col '>
          <label htmlFor='description'>Channel Description</label>
          <textarea name='description' className='bg-transparent outline-none border-2 max-h-[30vh] p-2 mt-4'></textarea>
        </div>

        <button type='submit' disabled="" className='w-full py-3 rounded-2xl bg-blue-600 hover:bg-slate-950 '>Create Channel</button>
      </form>
    </section>
  )
}

export default ChannelCreate
