import React from 'react'
import Input from '../Input/Input.jsx'
import { useState } from 'react'
import { backendUrl } from '../index.js'
import axios from 'axios'
import Loading from '../Loading/Loading.jsx'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import Cookie from "js-cookie"
const DeleteAccount = () => {

  const [details, setDetails] = useState({})
  const [loading,setLoading] = useState(false)
  let clearTimeOutId;


  const handleChange = function (e) {
    clearTimeout(clearTimeOutId)
    clearTimeOutId = setTimeout(() => {
      setDetails({...details,
        [e.target.name]: e.target.value
      })
    }, 600)
  }

  const handleDeleteAccount = function (e) {
    e.preventDefault()
    
    setLoading(true)
    console.log(details)
    axios.post(`${backendUrl}/deleteaccount`,details,{
      withCredentials: true
    }).then((res)=>{
      Cookie.remove("auth_info")
       console.log(res)
       toast.success(res.data.message)
    }).catch((error)=>{
    Cookie.remove("auth_info")
     toast.error(error.response.data.message)
    }).finally(()=>{
      setLoading(false)
    })
  }

  return (
    <section className='h-screen w-screen bg-gradient-to-br from-slate-500 to-gray-900 flex flex-col  justify-around items-center px-5 text-white'>
      <h1 className='text-yellow-500 border-2 px-4 py-2 text-balance  rounded-xl bg-slate-700 shadow-inner lg:text-2xl tracking-wider text'>Warning ! all acoount details,videos,watch history will be deleted permananeteley. Including channel details</h1>
      <form onSubmit={handleDeleteAccount} className='bg-gradient-to-tr from-slate-600 to-slate-900 border-2 rounded-3xl shadow-3xl lg:w-[40%] h-[60%] p-10 flex flex-col justify-between'>

        <div className='flex-grow flex flex-col  justify-evenly'>
          <div>
            <label >Enter Your Email</label>
            <Input type="email" name="email" placeholder="email" required fun={handleChange} />
          </div>

          <div>
            <label >Enter Your Password</label>
            <Input type="password" name="password" placeholder="password" required fun={handleChange} />
          </div>
        </div>

        <div>
          <button type='submit' className='w-full py-3 rounded-2xl bg-blue-600 hover:bg-slate-950'>Delete Account</button>
        </div>
      </form>
      {loading ? <Loading/> :"" }
      <ToastContainer/>
    </section>
  )
}

export default DeleteAccount
