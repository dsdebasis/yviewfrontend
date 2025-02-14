import Login from "./Login/Login.jsx";
import Signup from "./Signup/Signup.jsx";
import Profile from "./Profile/Profile.jsx";
import Home from "./Home/Home.jsx";
import UpdateProfile from "./Profile/UpdateProfile.jsx";
import UpdatePassword from "./Profile/UpdatePassword.jsx";
export { Login, Signup, Profile, Home, UpdateProfile, UpdatePassword };

const backendUrl = import.meta.env.VITE_APP_SERVER_URL;
const videoApi = import.meta.env.VITE_APP_SERVER_VIDEO_API;

export { backendUrl, videoApi };
