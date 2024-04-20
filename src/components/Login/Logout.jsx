import React from 'react'
import axios from "axios"

import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { logout as authLogout } from '../../store/authSlice.js'

import { backendUrl } from '../index.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {

  const dispatch = useDispatch()

  const handleLogout = async function (e) {
    e.preventDefault()
  
    axios.post(`${backendUrl}/logout`, {}, {
      withCredentials: true
    })
      .then(function (response) {
        console.log(response)
        toast.success(response?.data?.message)
        dispatch(authLogout())

      }).catch(function (error) {
        console.log(error?.response?.data?.message)
        toast.error(error?.response?.data?.message)
      }
      )
  }


  return (
    <div className='h-screen bg-gradient-to-bl from-slate-700 to-slate-950 flex justify-center items-center transition-all ease-in-out '>
      <button className='px-2 py-2 border-2 shadow-2xl shadow-orange-400 border-white text-white rounded-lg disabled:border-red-600 disabled:blur-sm disabled:cursor-not-allowed' onClick={handleLogout} >Logout</button>
      <ToastContainer />
    </div>
  )

}
export default Logout
