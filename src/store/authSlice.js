import { createSlice } from "@reduxjs/toolkit"
import Cookie from "js-cookie"
let initialState = {
  status:false,
  userData:null,
}

const cookieData =  Cookie.get("auth_info")

if(cookieData){
  const data = JSON.parse(cookieData)
  initialState.status = data.status
  initialState.userData=data.userData.refreshToken
}

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    login:function(state,action){
    
      Cookie.set("auth_info",JSON.stringify({
        status:true,
        userData:action.payload
      }))

    },
    logout:function(state,action){
      Cookie.remove("auth_info")
      state.status = false
      state.userData =null 
     
    }
  }
})

export default authSlice.reducer
export const {login,logout} = authSlice.actions