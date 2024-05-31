import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { backendUrl } from '../index.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading/Loading.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../Input/Input.jsx'
function UploadVideo() {
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${backendUrl}/getchannel`, {
      withCredentials: true
    }).then((res) => {
      res = res.data.data

    }).catch((err) => {
      console.log("erorr", err.response.data.message)
      navigate("/createchannel",)

    })
  }, [])
  const [selectVideo, setSelectVideo] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  let inputFiled = window.document.getElementsByTagName("input")
  let clearTimeId;
  function handleUploadVideo(e) {
    e.preventDefault()
    setLoading(() => true)
    let formData = new FormData()
    formData.append("video", selectVideo)
    formData.append("videoTitle", title)
    formData.append("videoDes", description)
    formData.append("thumbnail", thumbnail)
    axios.post(`${backendUrl}/uploadvideo`, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      console.log("uplaod response from server", res)
      navigate("/channel")
      toast.success("file uplaoded successfully")

    }).catch((error) => {
      toast.error(error.response.data.message)
      console.log(error.response.data.message)

    }).finally(() => {

      setLoading(false)

      // setSelectVideo("")
      // setDescription("")
      // setTitle("")
      // setThumbnail("")
      // inputFiled[0].value = ""
      // inputFiled[1].value = ""
      // inputFiled[2].value = ""
      
    })
  }


  return (
    <section className='h-screen w-full  overflow-hidden box-border  text-white  bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center '>

      <form encType='multipart/form-data' method='POST' className='mx-5 min-h-[60vh] md:w-2/3 rounded-2xl  grid grid-flow-row row-auto gap-5  p-5 shadow-2xl shadow-slate-500'>

        <header className='text-center'>Upload Your Video</header>

        <label id='selectVideo'>Upload video</label>
        <Input type='file' name='video' required={true} placeholder='upload your video' css='h-12 border-2  bg-transparent outline-none p-2 focus:border-blue-600 rounded-md ' fun={(e) => {
          e.preventDefault()
          setSelectVideo(e.target.files[0])
        }} />

        <label id='selectTumbnail'>Select Tumbnail</label>
        <Input type='file' name='selectVideo' placeholder='upload your video' css=' h-12 border-2  bg-transparent outline-none px-3 p-2 focus:border-blue-600 rounded-md ' fun={(e) => {
          setThumbnail(e.target.files[0])
        }} />

        <label>Video titile</label>
        <Input name='videoTitle' type='text' required={true} placeholder='maximum 70 characters allowed' css='bg-transparent  border-2 p-2 outline-none focus:border-blue-600 rounded-md overflow-scroll' fun={(e) => {
          e.preventDefault()
          clearTimeout(clearTimeId)
          clearTimeId = setTimeout(() => {

            setTitle(e.target.value)

          }, 500)
        }} />

        <label>Video  Description</label>
        <textarea name='videoDes' required={true} className='max-h-[300px] min-h-[10vh] outline-none bg-transparent border-2 px-3 py-2 focus:border-blue-600 rounded-md' onChange={(e) => {
          e.preventDefault()

          clearTimeout(clearTimeId)
          clearTimeId = setTimeout(() => {
            setDescription(e.target.value)
          }, 800)
        }} />

        <button className=' rounded-md px-3 py-2 bg-blue-700 hover:bg-blue-500' onClick={handleUploadVideo}>Upload</button>
      </form>
      {loading ? <Loading title={"uploading video"} /> : <></>}
      <ToastContainer />
    </section>
  )
}

export default UploadVideo
