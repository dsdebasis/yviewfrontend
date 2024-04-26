import { createBrowserRouter } from 'react-router-dom'
import { Home, Login, Signup, Profile, UpdatePassword, UpdateProfile } from "../components/index.js"
import Logout from '../components/Login/Logout.jsx'
import AuthLayout from './AuthLayout.jsx'
import VideoPage from '../components/Videos/VideoPage.jsx'
import UploadVideo from '../components/Video/UploadVideo.jsx'

const Routes = createBrowserRouter([
  {
    path: "/", element: (
      <Home />
    ),

  },
  {
    path: "/login", element: (
      <Login />
    )
  },
  {
    path: "/signup", element: (
      <Signup />
    )
  },
  {
    path: "/profile", element: (
      <AuthLayout >
        <Profile />
      </AuthLayout>
    )
  },
  {
    path: "/updateprofile", element: (
      <AuthLayout >
        <UpdateProfile />
      </AuthLayout>
    ),

  },
  {
    path: "/updatepassword", element: (
      <AuthLayout >
        <UpdatePassword />
      </AuthLayout>
    )
  }, {
    path: "/logout", element: (
      <AuthLayout >
        <Logout />
      </AuthLayout>

    )}
  ,{
    path:"/videopage",element:(
      <VideoPage/>
    )
  },{
    path:"/videoplayer",element:(
      <h1>wellcome</h1>
    )
  },{
    path:"/uploadvideo" ,element:(
      <UploadVideo/>
    )
  }
])

export { Routes }


// const Routes =  createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Home/>}>
//     <Route path='login' element={<Login/>}/>
//     <Route path='signup' element={<Signup/>}/>
//     <Route path='profile' element={<UpdateDetails/>}/>
//     <Route path='update profile' element={<UpdateProfile/>}/>
//     <Route path='Update Password' element={<UpdatePassword/>}/>
//   </Route>
// ))

// export {Routes}