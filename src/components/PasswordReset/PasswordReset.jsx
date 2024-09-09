import React from "react";
import Input from "../Input/Input.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import { useState } from "react";
import { backendUrl } from "../index.js";


const PasswordReset = () => {

        const [passData,setData] = useState({
           email:"",
           username:""
        });
        
        const handleData  = function(e){
          e.preventDefault()
          setData(
              {
                ...passData,
                [e.target.name]:e.target.value
             })
          }
        }
   const handlePasswordResetEmail = function(e){
     e.preventDefault()
     axios.post(`${backendUrl}/password-reset-email`,passData)
           .then((res)=>{
              console.log(res)
           }).catch((error)=>{
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
           })
       
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-700 to-zinc-700 flex justify-center items-center p-10 md:p-0">
      <form className="md:w-[30vw] h-[40vh] bg-gradient-to-b from-gray-900  shadow-2xl to-slate-600 p-4 text-white rounded-lg flex flex-col justify-around">
        <header className="text-center">Reset Password</header>
        <div>
          <label htmlFor="email">Email</label>
          <Input name="email" type="email" required fun={handleData} value={passData.email} />
          <label htmlFor="username">Username</label>
          <Input name="username" type="text" required fun={handleData} value={passData.username} />
        </div>
        <button
          className=" h-12 md:h-12 w-full  bg-blue-600 rounded-xl hover:bg-red-600"
         onClick={handlePasswordResetEmail}
        >
          Send Email
        </button>
      </form>
      <ToastContainer theme="dark" style={{width:"90vw",margin:" 1em "}}/>
    </div>
  );

}
export default PasswordReset;
