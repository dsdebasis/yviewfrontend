import React from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { logout as authLogout } from '../../store/authSlice.js'
import { backendUrl } from '../index.js'

import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading.jsx'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
const Logout = () => {
  const [loading,setLoading] = React.useState(false)

  const dispatch = useDispatch()
  const handleLogout = async function (e) {
    e.preventDefault()
    setLoading(true)
    axios.post(`${backendUrl}/logout`, {}, {
      withCredentials: true

    }).then(function (response) {
      localStorage.clear()
      dispatch(authLogout())
      // console.log(response?.data?.message)
      toast.success("successfully logout")
    }).catch(function (error) {
      console.log(error?.response?.data?.message)
      toast.error(error?.response?.data?.message)
    }
    ).finally(()=>{
      setLoading(false)

    })
  }
  
  {loading ? <Loading title={"logging out"}/> :""}

  return (
    <div className='h-screen  flex justify-center items-center transition-all ease-in-out '>
      <button className='px-2 py-2 border-2 hover:border-red-500 shadow-2xl border-white text-white rounded-lg disabled:border-red-600 disabled:blur-sm disabled:cursor-not-allowed' disabled={loading} onClick={handleLogout} >Logout</button>
      <Toaster />
    </div>
  )

}
export default Logout
