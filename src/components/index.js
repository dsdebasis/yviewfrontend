import Login from "./Login/Login.jsx"
import Signup from "./Signup/Signup.jsx"
import Profile from "./Profile/Profile.jsx"
import Home from "./Home/Home.jsx"
import UpdateProfile from "./Profile/UpdateProfile.jsx"
import UpdatePassword from "./Profile/UpdatePassword.jsx"
export {
  Login,Signup,Profile,Home,UpdateProfile,UpdatePassword
}

let backendUrl = "https://yviewbackend.onrender.com/api/v1/users"
    backendUrl= "http://localhost:7000/api/v1/users"

export {backendUrl}