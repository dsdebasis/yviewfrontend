import React from "react";
import Loading from "../Loading/Loading.jsx";

import Input from "../Input/Input.jsx";
// import { useVerifyResetPassLink } from "../Hooks/verifyResetPassLink.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { backendUrl } from "../index.js";
import { useParams } from "react-router-dom";
function ResetPasswordVerify() {

        const [loading,setLoading] = React.useState(false)
        const [password,setPassword] = React.useState({
          password:"",
          confirmPassword:""
        });
       
        function handlePassword(e){
          e.preventDefault()
          clearTimeout(timeOutId)
          setPassword({
            ...password,
            [e.target.name]:e.target.value
          })}

        let timeOutId ;
          timeOutId = setTimeout(()=>{
            handlePassword(e)
          },500)


        const { passwordResetToken } = useParams();
   
        const useVerifyResetPassLink = function(e){
          e.preventDefault()
          setLoading(true)
          axios.post(`${backendUrl}/password-resetemail-verify/${passwordResetToken}`,password,{
                  withCredentials: true,
             
          })
                .then((res)=>{
                  console.log(res.data.message)
                  toast.success(res.data.message)
                  setLoading(false)
                }).catch((error)=>{
                  console.log(error.response.data.message)
                  toast.error(error.response.data.message)
                  setLoading(false)
                }).finally(()=>{
                  setLoading(false)
                })
        }
       

  return <section className="h-screen w-screen  flex justify-center items-center p-10 md:p-0">      
        <form className="md:w-[30vw] h-[40vh] bg-gradient-to-b from-gray-900  shadow-2xl to-slate-600 p-4 text-white rounded-lg flex flex-col justify-around">
                <label>New Password</label>
                <Input type="password" name="password" id={"password"}  fun={handlePassword} />
                <label>Confirm Password</label>
                <Input type="password" name="confirmPassword" id={"confirmPassword"}  fun={handlePassword} />
                <button type="submit" className=" h-12 md:h-12 w-full  bg-blue-600 rounded-xl hover:bg-red-600" onClick={useVerifyResetPassLink}>Update Password</button>
        </form>
        <ToastContainer theme="dark"/>
        {loading ? <Loading/> : <></>}
  </section>;
}

export default ResetPasswordVerify;
