import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading.jsx";
import Input from "../Input/Input.jsx";
import { Toaster } from "react-hot-toast";
import NavBar from "../Navbar/NavBar.jsx";

import uselogin from "../Hooks/useLogin.js";

const Login = () => {
  let { handleLogin, loading, setLoading, setUserInfo, userInfo } = uselogin();

 
 
  return (
    <section className="h-screen  max-w-full overflow-hidden  ">
      <div className=" mb-[20vh]">
        <NavBar />
      </div>

      {loading ? (
        <Loading title={"logging in"} />
      ) : (
        <section className="h-[70vh]  w-fit mx-auto">
          <div className=" md:self-center   h-[60vh] lg:h-[70vh]  text-xs overflow-hidden box-border    xl:p-4 p-2 text-white xl:text-base xl:self-center bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border-2 border-stone-700 rounded-xl flex flex-col justify-evenly ">
            <form
              id="login"
              action="/"
              onSubmit={handleLogin}
              className=" w-full  text-white  rounded-2xl    px-2 overflow-hidden    h-[70%]  lg:h-[80%] flex flex-col  justify-evenly"
            >
              <h1 className="mt-1 text-center lg:mt-0 xl:text-xl font-mono">
                Login
              </h1>
              <div className=" ">
                <div>
                  <label htmlFor="username">Username</label>
                  <Input
                    id="username"
                    type={"text"}
                    disabled={loading}
                    required={true}
                    value={userInfo.username}
                    fun={(e) => {
                      setUserInfo({ ...userInfo, username: e.target.value });
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
                    value={userInfo.password}
                    fun={(e) => {
                      setUserInfo({ ...userInfo, password: e.target.value });
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
