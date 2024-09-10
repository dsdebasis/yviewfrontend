import { useState } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../../store/authSlice.js";
import { backendUrl } from "../index.js";
import Loading from "../Loading/Loading.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../Input/Input.jsx";
import PasswordReset from "../PasswordReset/PasswordReset.jsx";
const Login = () => {
  const navigate = useNavigate();

  const authSelecter = useSelector((state) => state.auth.status);

  if (authSelecter) {
    navigate("/");
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

 

  const dispatch = useDispatch();

  const handleLogin = function (e) {
    e.preventDefault();
    setLoading(true);
    const config = {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    };
    axios
      .post(
        `${backendUrl}/login`,
        {
          username,
          password,
        },
        config
      )
      .then((res) => {
        dispatch(authLogin(res?.data?.data.msg));
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message || "server is not connected"
        );
      })
      .finally(() => {
        setLoading(false);
        setPassword("");
      });
  };

 
  
    return (
      <div className="h-screen w-screen   bg-gradient-to-br from-slate-500 to-gray-900 flex flex-col  justify-center gap-y-4    px-5 md:items-center">
        <form
          id="login"
          action="/"
          onSubmit={handleLogin}
          className="text-white w-full  md:w-[30vw] xl:rounded-xl xl:w-[25vw]  h-[50vh] xl:h-[50vh] md:h-[60vh]   rounded-xl flex flex-col justify-evenly  bg-gradient-to-tr from-slate-500 to-slate-900 px-4 md:px-4 "
        >
          <h1 className="text-center xl:text-xl">Login</h1>
          <div className="flex flex-col gap-y-4">
            <div>
              <label htmlFor="username" className="md:text-xl">
                Username
              </label>
              <Input
                id="username"
                type={"text"}
                disabled={loading}
                required={true}
                value={username}
                fun={(e) => {
                  setUsername(e.target.value);
                }}
                css={"mt-2 "}
              />
            </div>
            <div>
              <label htmlFor="password" className="md:text-xl">
                Password
              </label>
              <Input
                id="password"
                type={"password"}
                required={true}
                disabled={loading}
                value={password}
                fun={(e) => {
                  setPassword(e.target.value);
                }}
                css={"mt-2 "}
              />
            </div>
          </div>

          <Link
            className="text-center text-yellow-400"
          
           to="/reset-password">
            Forgot Password ?
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-slate-950"
          >
            Login
          </button>
        </form>
        <div className="h-[10vh] xl:w-[25vw] bg-gradient-to-bl  rounded-md text-center xl:rounded-xl">
          <h1 className="md:text-xl xl:text-lg text-white mt-5">
            Don't have an account ?
            <Link to={"/signup"} className="text-blue-400 mx-2">
              Signup
            </Link>
          </h1>
        </div>
        <ToastContainer />
        {loading ? <Loading title={"logging in"} /> : <></>}
      </div>
    );
  
};

export default Login;
