import React from 'react'

import Loading from '../Loading/Loading.jsx'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { backendUrl } from '../index.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../Input/Input.jsx'
const Signup = () => {

  const [userInfo, setUserInfo] = React.useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",

  })

  let { fullname, email, username, password, confirmPassword } = userInfo

  const [profile, setProfile] = React.useState("")
  const [coverImage, setCoverImage] = React.useState("")
  const [loading, setLoading] = React.useState("")


  function handleChange(e) {
    setUserInfo(
      {
        ...userInfo,
        [e.target.name]: e.target.value,
      }
    )
  };
  let form = new FormData()
  form.append("fullname", fullname)
  form.append("email", email)
  form.append("username", username)
  form.append("password", password)
  form.append("confirmPassword", confirmPassword)


  const handleRegister = async function (e) {
    e.preventDefault()
    setLoading(true)
    form.append("profilePic", profile)
    form.append("coverImage", coverImage)

    axios.post(`${backendUrl}/register`, form, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(
      (response) => {
        console.log(response?.data)
        toast.success(response?.data?.message)
      
      }
    ).catch(function (error) {
      console.log("error in signup",error)
      
      toast.error(error?.response?.data?.message)
    }

    ).finally(() => {
      setLoading(false)
    })
  }


  return (
    <div className='h-screen text-sm md:text-lg    bg-gradient-to-br from-slate-500 to-gray-900  flex flex-col  justify-center items-center  md:px-5  relative'>

      <form action='/signup' encType='multipart/form-data' method='POST' className='  box-border md:w-fit md:h-[90%] text-white grid place-content-evenly md:grid-rows-5 md:items-center px-7 py-5 overflow-x-hidden overflow-hidden rounded-3xl shadow-2xl  border-2'>

        <header className='md:text-3xl text-xl text-center md:mb-10'>Register</header>

        <div className='md:row-span-3 grid md:grid grid-flow-row  md:grid-cols-2 md:gap-x-10  justify-center '>
          <div className='w-full flex flex-col gap-y-1   md:gap-y-4 '>

            <div >
              <label htmlFor='fullname'>Full Name</label>
              <Input type="text" name={"fullname"} required={true} value={fullname} fun={handleChange} />
            </div>


            <div>
              <label htmlFor='email'>Email</label>
              <Input type="email" name={"email"} required={true} value={email} fun={handleChange}/>
            </div>


            <div>
              <label htmlFor='username'>Username</label>
              <Input type="text" name={"username"} required={true} value={username} fun={handleChange}  />
            </div>

            <div>
              <label htmlFor='password'>Password</label>
              <Input type="password" name={"password"} required={true} value={password} fun={handleChange} />
            </div>

          </div>
          <div className='my-2 flex flex-col gap-y-3 md:gap-y-2'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <Input type="password" name={"confirmPassword"} required={true} value={confirmPassword} fun={handleChange} />

            <label htmlFor='profile'>Profile Picture</label>
            <Input name={"profile"} type={"file"} fun={(e) => (setProfile(e.target.files[0]))} css={"file:text-xs file:bg-transparent file:border-white file:text-white "} />

            <label htmlFor='coverImage'>Cover Image</label>
            <Input name={"coverImage"} type={"file"} fun={(e) => (setCoverImage(e.target.files[0]))} css={" file:text-xs file:bg-transparent file:border-white file:text-white"} />
          </div>

        </div>
        <div className='my-2'>
          <h1 className='text-center'>Have account ?<Link to={"/login"} className='text-blue-400 mx-1'>Login</Link></h1>
        </div>
        <button type='submit' disabled={loading} className='h-12 md:h-14 w-full bg-blue-600 rounded-xl hover:bg-red-600' onClick={handleRegister}>Register</button>

      </form>

      <ToastContainer />
      {loading ? <Loading /> : <></>}
    </div>
  )


}

export default Signup
