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
import Nav from "../Navbar/Nav.jsx";
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
    <section className=" h-screen w-full flex flex-row justify-center items-center">
      {/* <Nav/> */}
      <div className="place-self-end mb-20 h-[70%] xl:h-[70%]    gap-y-4   text-xs overflow-hidden box-border xl:place-self-center  xl:p-4 p-2 text-white xl:text-base">
        <form
          id="login"
          action="/"
          onSubmit={handleLogin}
          className="w-full h-[70%] xl:h-[80%]   text-white    xl:rounded-xl       rounded-xl   bg-gradient-to-tr from-slate-500 to-slate-900 px-4 overflow-hidden my-4  "
        >
          <h1 className="mt-3 text-center xl:text-xl font-mono">Login</h1>
          <div className="flex flex-col gap-y-4">
            <div>
              <label htmlFor="username">
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
              <label htmlFor="password" >
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

          <div className="mt-3 xl:mt-8">
            <Link
              className="mt-4 text-center text-yellow-400"
              to="/reset-password"
            >
              Forgot Password ?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className=" w-full h-[10%] mt-4  rounded-md bg-blue-600 hover:bg-slate-950"
          >
            Login
          </button>
        </form>
        <div className="h-[10%] w-full xl:h-[15%]   flex justify-center  items-center rounded-md text-center xl:rounded-xl bg-gradient-to-t from-slate-500 to-slate-900 overflow-hidden ">
          <h1 >
            Don't have an account ?
            <Link to={"/signup"} className="text-blue-400 ml-3">
              Signup
            </Link>
          </h1>
        </div>
        <ToastContainer />
        {loading ? <Loading title={"logging in"} /> : <></>}
      </div>
    </section>
  );
};

export default Login;
