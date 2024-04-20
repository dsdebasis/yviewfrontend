import profile from "../../assets/profile.png"
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login as authLogin } from '../../store/authSlice.js'
import { backendUrl } from '../index.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate()
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const authSelecter = useSelector((state) => state.auth.status)

  const handleLogin = function (e) {
    e.preventDefault()
     
    const config = {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    };
      axios.post(`${backendUrl}/login`, {
      username, password
    }, config)
      .then( (res) => {
         toast.success(res?.data?.data.message)
        dispatch(authLogin(res?.data?.data))
        navigate("/")
      })
      .catch((error) => {
         toast.error(error?.response?.data?.message)
      })
    
  }

    return (
      <div className='h-screen  bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col  justify-center items-center px-5'>
        <form id='login' action='/' onSubmit={handleLogin} className='text-white w-full lg:w-[35vw] h-[70vh] md:h-[80vh]  rounded-3xl flex flex-col justify-evenly lg:justify-around bg-gradient-to-tr from-slate-600 to-slate-900 px-5 md:px-14 '>

          <div className=' self-center justify-self-center'>
            <img src={profile} className='h-[150px] lg:h-[20vh]  rounded-full bg-white' />
            
          </div>

          <div className='flex flex-col gap-y-4'>
            <div>
              <label htmlFor='username' className='text-xl'>Username</label>
              <input id='username' value={username} onChange={(e) => { setUsername(e.target.value) }} type='text ' className='outline-none  border-b-2 mt-2 w-full py-2 px-3  rounded-md bg-black focus:border-b-blue-600' />
            </div>
            <div>
              <label htmlFor='password' className='text-xl'>Password</label>
              <input id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' className='outline-none border-b-2 mt-2 w-full py-2  px-3 rounded-md bg-black focus:border-b-blue-600' />
            </div>
          </div>

          <h1 className='md:text-xl text-center'>Don't have an account <Link to={"/signup"} className='text-blue-400 mx-2'>Signup</Link></h1>

          <button type='submit' className='w-full py-3 rounded-2xl bg-blue-600 hover:bg-slate-950'>Login</button>

        </form>
       
        <ToastContainer/>
      </div>
    )
  
}

export default Login
