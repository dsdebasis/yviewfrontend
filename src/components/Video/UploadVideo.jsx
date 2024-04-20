import React from 'react'
import { useState } from 'react'

function UploadVideo() {

  const [selectVideo,setSelectVideo] = useState("")
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  function handleUploadVideo(){
   
  }

  return (
    <section className='my-10 min-h-[60vh]  md:w-2/3 rounded-2xl text-white mx-3 md:mx-[15vw] shadow-2xl shadow-slate-600 bg-gradient-to-br'>

      <form className='grid grid-flow-row row-auto gap-5  p-5 '>

      <header className='text-center'>Upload Your Video</header>

        <label id='selectVideo'>Upload video</label>
        <input type='file' name='selectVideo' placeholder='upload your video' className='border-2  bg-transparent outline-none px-3 py-2 focus:border-blue-600 rounded-md ' />

        <label>Type your titile</label>
        <input type='text' className='bg-transparent  border-2 p-2 outline-none focus:border-blue-600 rounded-md overflow-scroll'/>

        <label>Type your description</label>
        <textarea className='max-h-[300px] min-h-[10vh] outline-none bg-transparent border-2 px-3 py-2 focus:border-blue-600 rounded-md  ' />

        <button className=' rounded-md px-3 py-2 bg-blue-700 hover:bg-blue-500'>Upload</button>
      </form>
    </section>
  )
}

export default UploadVideo
