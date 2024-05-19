import React from 'react'
import { CompContext } from './Context.js'

const ContextProvider = ({ children }) => {
  const [data,setData] = React.useState("debasis")
  return (
    <CompContext.Provider value={{data,setData}}>
        {children}
    </CompContext.Provider>
  )
}

export default ContextProvider
