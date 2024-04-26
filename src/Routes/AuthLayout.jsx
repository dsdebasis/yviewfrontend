import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function AuthLayout({ children }) {
  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)
  const authData = useSelector((state)=>state.auth.userData)
    useEffect(() => {
      if (authStatus === false  || authData == null  ) {
        navigate("/login")
      }
    }, [authStatus,navigate])

  return <>{children}</>
}

export default AuthLayout
