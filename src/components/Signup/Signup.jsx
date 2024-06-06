import React from 'react'
import Loading from '../Loading/Loading.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { backendUrl } from '../index.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../Input/Input.jsx'
import { useNavigate } from 'react-router-dom'
const Signup = () => {

  let navigate = useNavigate()

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
        console.log(response)
        navigate("/verifyotp")
      }
    ).catch(function (error) {
      console.log("error in signup", error)
      toast.error(error?.response?.data?.message)
    }

    ).finally(() => {
      setLoading(false)
    })
  }


  return (
    <div className='h-screen w-full text-sm p-2 md:text-lg    bg-gradient-to-br from-slate-700 to-zinc-700  flex flex-col  justify-center items-center  md:px-5  px-4'>

      <form name='signup' action='/signup' encType='multipart/form-data' method='POST' className='w-full h-auto  bg-gradient-to-b from-gray-900  shadow-2xl to-slate-600 box-border md:w-[60vw] lg:w-[30vw]  text-white   md:px-5 md:py-2 p-5   rounded-3xl  ' >

        <header className=' text-2xl  text-center '>Signup</header>
          <div >
            <label htmlFor='fullname'>Full Name</label>
            <Input type="text"  name={"fullname"} required={true} value={fullname} fun={handleChange} />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <Input type="email" id={"email"} name={"email"} required={true} value={email} fun={handleChange} />
          </div>

          <div>
            <label htmlFor='username'>Username</label>
            <Input type="text" name={"username"} required={true} value={username} fun={handleChange} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <Input type="password" name={"password"} required={true} value={password} fun={handleChange} />
          </div>

          <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <Input type="password" name={"confirmPassword"} required={true} value={confirmPassword} fun={handleChange} />
          </div>

          {/* <div>
            <label htmlFor='profile'>Profile Picture</label>
            <Input name={"profile"} type={"file"} fun={(e) => (setProfile(e.target.files[0]))} css={"file:text-xs file:bg-transparent file:border-white file:text-white pt-2 md:pt-1"} />
          </div> */}
          <div className='my-4'>
            <h1 className='text-center capitalize'>Have account ?<Link to={"/login"} className='text-blue-300 mx-1'>Login</Link></h1>
          </div>

          <div>
            <button type='submit' disabled={loading} className='h-12 md:h-12 w-full bg-blue-600 rounded-xl hover:bg-red-600' onClick={handleRegister}>Sign Up</button>
          </div>
      </form>

      <ToastContainer />
      {loading ? <Loading /> : <></>}
    </div>
  )


}

export default Signup
