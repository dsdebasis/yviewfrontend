import React from "react";
import Input from "../Input/Input.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import { useState } from "react";
import { backendUrl } from "../index.js";

import NavBar from "../Navbar/NavBar.jsx";
const PasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const [passData, setData] = useState({
    email: "",
    username: "",
  });

  const handleData = function (e) {
    e.preventDefault();
    setData({
      ...passData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordResetEmail = function (e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${backendUrl}/password-reset-email`, passData)
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

if(loading){
  return <Loading/>
}
  return (
    <section className="h-screen w-screen box-border">
      <NavBar />
      <div className="h-screen w-full  flex justify-center items-center ">

        


        <form className="md:w-[30vw] h-[40vh] border-2 border-stone-700  shadow-2xl  p-4 text-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 ">
          <header className="text-center">Reset Password</header>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              type="email"
              required
              fun={handleData}
              value={passData.email}
            />
            <label htmlFor="username">Username</label>
            <Input
              name="username"
              type="text"
              required
              fun={handleData}
              value={passData.username}
            />
          </div>
          <button
            className="mt-5 h-8 md:h-12 w-full  bg-blue-600 rounded-xl hover:bg-red-600"
            onClick={handlePasswordResetEmail}
          >
            Send Email
          </button>
        </form>
        <ToastContainer theme="dark" />
      </div>
    </section>
  );
};

export default PasswordReset;
