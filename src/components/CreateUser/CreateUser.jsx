
import Input from '../Input/Input.jsx'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../index.js'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
function CreateUser() {
  
  const [ data, setData ] = useState({ email: "", otp: "" })
  let timerID;
  let handleInput = function (e) {
    e.preventDefault()
    clearTimeout(timerID)

    timerID = setTimeout(() => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }, 600)
  }

  
  let Verify = function (e) {
    e.preventDefault()
    console.log(data)
    axios.post(`${backendUrl}/create-user`,data, {
      withCredentials: true,
    }).then((res) => {
      console.log("success response",res?.data?.message)
      toast.success(res?.data?.message)
    }).catch((error)=>{
      console.log(error.response?.data?.message)
      toast.error(error.response?.data?.message)
    })
  }
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-slate-700 to-zinc-700 flex justify-center items-center p-10 md:p-0'>
      <form className='md:w-[30vw] h-[40vh] bg-gradient-to-b from-gray-900  shadow-2xl to-slate-600 p-4 text-white rounded-lg flex flex-col justify-around'>
        <header className='text-center'>Verify OTP</header>
        <div>
          <label htmlFor='email'>Email</label>
          <Input name="email" type="email" required fun={handleInput} />
          <label htmlFor='otp'>OTP</label>
          <Input name="otp" type="number" required fun={handleInput} />
        </div>
        <button className=' h-12 md:h-12 w-full  bg-blue-600 rounded-xl hover:bg-red-600' onClick={Verify}>Verify OTP</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default CreateUser
