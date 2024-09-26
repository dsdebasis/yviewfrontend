import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../../store/authSlice.js";
import { backendUrl } from "../index.js";
import Loading from "../Loading/Loading.jsx";

import Input from "../Input/Input.jsx";

import toast, { Toaster } from "react-hot-toast";
import NavBar from "../Navbar/NavBar.jsx";
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
        toast.success(res.data.message);
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
    <section className=" h-screen  w-screen flex flex-col  ">
      <NavBar style={"w-full"} />

      {loading ? (
        <Loading title={"logging in"} />
      ) : (
        <section className="min-h-screen  w-screen flex  justify-center items-center">
          <div className=" md:self-center mt-[20vh]  h-[65vh] lg:h-[70vh]  text-xs overflow-hidden box-border    xl:p-4 p-2 text-white xl:text-base xl:self-center bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border-2 border-stone-700 rounded-xl flex flex-col justify-evenly">
            <form
              id="login"
              action="/"
              onSubmit={handleLogin}
              className=" w-full  text-white  rounded-2xl    px-4 overflow-hidden    h-[80%]  lg:h-[80%] flex flex-col  justify-evenly"
            >
              <h1 className="mt-3 text-center xl:text-xl font-mono">Login</h1>
              <div className=" ">
                <div>
                  <label htmlFor="username">Username</label>
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
                  <label htmlFor="password">Password</label>
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
                className=" w-full h-[10%] mt-10  rounded-md bg-blue-600 hover:bg-slate-950"
              >
                Login
              </button>
            </form>
            <div className=" h-[12%] w-full    flex justify-center  items-center rounded-2xl text-center   overflow-hidden border-2 border-stone-700">
              <h1>
                Don't have an account ?
                <Link to={"/signup"} className="text-blue-400 ml-3">
                  Signup
                </Link>
              </h1>
            </div>
          </div>
        </section>
      )}
      <Toaster />
    </section>
  );
};

export default Login;
