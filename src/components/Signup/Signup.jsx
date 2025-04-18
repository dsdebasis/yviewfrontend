import React from "react";
import Loading from "../Loading/Loading.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { backendUrl } from "../index.js";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Input from "../Input/Input.jsx";
import { useNavigate } from "react-router-dom";

import NavBar from "../Navbar/NavBar.jsx";
const Signup = () => {
  let navigate = useNavigate();

  const [userInfo, setUserInfo] = React.useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  let { fullname, email, username, password, confirmPassword } = userInfo;

  const [profile, setProfile] = React.useState("");
  const [coverImage, setCoverImage] = React.useState("");
  const [loading, setLoading] = React.useState("");

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }
  let form = new FormData();
  form.append("fullname", fullname);
  form.append("email", email);
  form.append("username", username);
  form.append("password", password);
  form.append("confirmPassword", confirmPassword);
  
  const handleRegister = async function (e) {
    e.preventDefault();
    setLoading(true);
    form.append("profilePic", profile);
    form.append("coverImage", coverImage);
    
    axios
    .post(`${backendUrl}/register`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .then((response) => {
      // console.log(response)
      navigate("/verifyotp");
    })
    .catch(function (error) {
      console.log("error in signup", error);
      toast.error(error?.response?.data?.message);
    })
    .finally(() => {
      setLoading(false);
    });
  };
  
  {loading ? <Loading /> : <></>}
  return (
    <section className="h-screen  md:w-full grid grid-flow-row ">
    <NavBar style={"top-0"}/>
      <div className="h-[70vh] lg:h-[80vh] md:w-[40vw] lg:w-[25vw] mt-[15vh] border-2 border-stone-700 justify-self-center text-xs pt-4 md:text-base px-4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 rounded-3xl">
        <form
          name="signup"
          action="/signup"
          encType="multipart/form-data"
          method="POST"
          className="w-full h-[60vh]  box-border md:w-[40vw] text-white   md:px-5 md:py-2 lg:px-2   rounded-2xl lg:h-[80vh]  lg:w-full  "
        >
          <header className=" lg:text-lg  text-center ">Signup</header>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <Input
              type="text"
              name={"fullname"}
              required={true}
              value={fullname}
              fun={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id={"email"}
              name={"email"}
              required={true}
              value={email}
              fun={handleChange}
            />
          </div>

          <div>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              name={"username"}
              required={true}
              value={username}
              fun={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name={"password"}
              required={true}
              value={password}
              fun={handleChange}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              type="password"
              name={"confirmPassword"}
              required={true}
              value={confirmPassword}
              fun={handleChange}
            />
          </div>

         
          <div className="my-4">
            <h1 className="text-center capitalize">
              Have account ?
              <Link to={"/login"} className="text-blue-300 mx-1">
                Login
              </Link>
            </h1>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="h-10 md:h-10 w-full bg-blue-600 rounded-lg hover:bg-red-600"
              onClick={handleRegister}
            >
              Sign Up
            </button>
          </div>
        </form>

        <Toaster />
      </div>
    </section>
  );
};

export default Signup;
