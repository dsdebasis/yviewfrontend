import Input from '../Input/Input.jsx'
import { useState } from 'react';
import Loading from '../Loading/Loading.jsx';
import axios from 'axios';
import { backendUrl } from '../index.js';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 
const ChannelCreate = () => {
  
  const navigate = useNavigate()
 
  let clearTimeOutId;
  const [channel, setChannel] = useState({
    channelName: "", about: ""
  })
  const [profilePic, setProfilePic] = useState("")
  const [loading, setLoading] = useState(false)

  const { channelName, about } = channel
  const handleChange = function (e) {
    e.preventDefault()

    clearTimeout(clearTimeOutId)
    // const formData = new FormData()
    clearTimeOutId = setTimeout(() => {

      setChannel({
        ...channel, [e.target.name]: e.target.value
      })
    }, 1000)
  }



  const handleSubmit = function (e) {
    e.preventDefault()
    setLoading(true)


    const formData = new FormData();
    formData.append("channelName", channelName)
    formData.append("about", about)
    formData.append("profilePic", profilePic)

    axios.post(`${backendUrl}/createchannel`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      withCredentials: true
    }).then((res) => {

      navigate("/channel")
      toast.success(res.data.data.message)
    }).catch((error) => {
      toast.error(error.response.data.message)

    }).finally(() => {
      setLoading(false)
    })
  }
  return (
    <section className='h-screen w-screen   bg-gradient-to-br from-slate-500 to-gray-900 flex flex-col justify-center items-center px-6'>
      <form encType='multipart/form-data' className='min-h-[80vh] w-full border-2  rounded-2xl px-5 xl:w-[40vw] flex flex-col  gap-y-10  shadow-2xl py-2 text-white'>

        <header className='text-center xl:text-lg'>Create Your Channel</header>

        <div>
          <label htmlFor='channelName'>Channel Name</label>
          <Input name={"channelName"} type="text" required={true} placeholder={"channel name"} disabled={loading} fun={handleChange} />
        </div>



        <div className='w-full flex flex-col '>
          <label htmlFor='about'>Channel Description</label>
          <textarea name='about' className='bg-transparent outline-none border-2 max-h-[30vh] p-1 mt-4' onChange={handleChange} ></textarea>
        </div>

        <div>
          <label htmlFor='profilePic'>Channel Pic</label>
          <Input name={"profilePic"} type={"file"} required={true} css={"p-2 h-12"} disabled={loading} fun={(e) => {
            
            setProfilePic(e.target.files[0])
          }} />
        </div>

        <button type='submit' disabled={loading} className='w-full py-3 rounded-2xl bg-blue-600 hover:bg-slate-950 ' onClick={handleSubmit}>Create Channel</button>

      </form>
      {loading ? <Loading /> : <></>}
      <ToastContainer />
    </section>
  )
}

export default ChannelCreate
