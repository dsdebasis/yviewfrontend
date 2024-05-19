import profile from "../../assets/profile.png"
import { useState } from 'react'
import axios from "axios"
import { Link, redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login as authLogin } from '../../store/authSlice.js'
import { backendUrl } from '../index.js'
import Loading from "../Loading/Loading.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "../Input/Input.jsx"
import { useEffect } from "react"
const Login = () => {
  const navigate = useNavigate()

  const  authSelecter = useSelector((state) => state.auth.status)
  
  useEffect(()=>{
    if (authSelecter === true) {
      navigate("/")
   }
  })
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()


  const handleLogin = function (e) {
    e.preventDefault()
    setLoading(true)
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
      .then((res) => {
        dispatch(authLogin(res?.data?.data))
        toast.success(res?.data?.data.message)

        navigate("/")

      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "server is not connected")
      }).finally(() => {
        setLoading(false)
      })

  }

  return (
    <div className='h-screen   bg-gradient-to-br from-slate-500 to-gray-900 flex flex-col  justify-center items-center px-5'>
      <form id='login' action='/' onSubmit={handleLogin} className='text-white w-full xl:w-[30vw]  h-[70vh]  md:w-[40vw] md:h-[80vh] border-2  rounded-3xl flex flex-col justify-evenly lg:justify-around bg-gradient-to-tr from-slate-600 to-slate-900 px-4 md:px-14 '>

        <div className=' self-center justify-self-center'>
          <img src={profile} alt="profile icon" className='h-[150px] lg:h-[20vh]  rounded-full bg-white' />

        </div>

        <div className='flex flex-col gap-y-4'>
          <div>
            <label htmlFor='username' className='text-xl'>Username</label>
            <Input id="username" type={"text"} disabled={loading} required={true} value={username} fun={(e) => { setUsername(e.target.value) }} css={"mt-2 "} />
          </div>
          <div>

            <label htmlFor='password' className='text-xl'>Password</label>
            <Input id="password" type={"password"} required={true} disabled={loading} value={password} fun={(e) => { setPassword(e.target.value) }} css={"mt-2 "} />
          </div>
        </div>

        <h1 className='md:text-xl text-center'>Don't have an account <Link to={"/signup"} className='text-blue-400 mx-2'>Signup</Link></h1>

        <button type='submit' disabled={loading} className='w-full py-3 rounded-2xl bg-blue-600 hover:bg-slate-950'>Login</button>

      </form>

      <ToastContainer />
      {loading ? <Loading /> : <></>}
    </div>
  )

}

export default Login
