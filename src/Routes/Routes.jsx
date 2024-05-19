import { createBrowserRouter } from 'react-router-dom'
// import { Home, Login, Signup, Profile, UpdatePassword, UpdateProfile } from "../components/index.js"
// import Logout from '../components/Login/Logout.jsx'
import AuthLayout from './AuthLayout.jsx'
// import VideoPage from '../components/Videos/VideoPage.jsx'
// import UploadVideo from '../components/UploadVideo/UploadVideo.jsx'
// import ChannelPage from '../components/Channel/ChannelPage.jsx'
// import ChannelCreate from '../components/Channel/ChannelCreate.jsx'
// import DeleteAccount from '../components/DeleteAccount/DeleteAccount.jsx'
import React, { Suspense } from 'react'

const LazyHome = React.lazy(
  () => import("../../src/components/Home/Home.jsx")
)

const LazyLogin = React.lazy(
  () => import("../../src/components/Login/Login.jsx")
)

const LazySignUp = React.lazy(
  () => import("../../src/components/Signup/Signup.jsx")
)

const LazyProfile = React.lazy(
  () => import("../../src/components/Profile/Profile.jsx")
)

const LazyUpdatePassword = React.lazy(
  () => import("../../src/components/Profile/UpdatePassword.jsx")
)

const lazyLogout = React.lazy(
  () => import("../../src/components/Login/Logout.jsx")
)
const lazyUploadVideo = React.lazy(
  () => import("../../src/components/UploadVideo/UploadVideo.jsx")
)
const lazyCreateChannel = React.lazy(
  () => import("../../src/components/Channel/ChannelCreate.jsx")
)
const lazyChannelPage = React.lazy(
  () => import("../../src/components/Channel/ChannelPage.jsx")
)
const lazyDeleteAccount = React.lazy(
  () => import("../../src/components/DeleteAccount/DeleteAccount.jsx")
)
const lazyUpdateProfile = React.lazy(
  () => import("../../src/components/Profile/UpdateProfile.jsx")
)

const Routes = createBrowserRouter([
  {
    path: "/", element: (
      <Suspense fallback={"loading"}>

        <LazyHome />
      </Suspense>
    ),

  },
  {
    path: "/login", element: (
      <Suspense fallback={"loading"}>

        <LazyLogin />
      </Suspense>
    )
  },
  {
    path: "/signup", element: (
      <Suspense fallback={"loading"}>

        <LazySignUp />
      </Suspense>
    )
  },
  {
    path: "/profile", element: (
      <AuthLayout >
        <Suspense fallback={"loading"}>

          <LazyProfile />
        </Suspense>
      </AuthLayout>
    )
  },
  {
    path: "/updateprofile", element: (
      <AuthLayout >
        <Suspense fallback="loading">

          <lazyUpdateProfile />
        </Suspense>
      </AuthLayout>
    ),

  },
  {
    path: "/updatepassword", element: (
      <AuthLayout >
        <Suspense fallback="loading">

          <LazyUpdatePassword />
        </Suspense>
      </AuthLayout>
    )
  }, {
    path: "/logout", element: (
      <AuthLayout >
        <Suspense fallback={"loading"}>
          <lazyLogout />
        </Suspense>
      </AuthLayout>

    )
  }, {
    path: "/createchannel",
    element: (
      <AuthLayout>
        <Suspense fallback={"loading"}>
          <lazyCreateChannel />
        </Suspense>
      </AuthLayout>
    )
  }
  , {
    path: "/videoplayer", element: (
      <h1>wellcome</h1>
    )
  }, {
    path: "/uploadvideo", element: (
      <AuthLayout>
        <Suspense fallback={"loading"}>
          <lazyUploadVideo />
        </Suspense>
      </AuthLayout>
    )
  }, {
    path: "/channel", element: (
      <AuthLayout>
        <Suspense fallback={"loading"}>
          <lazyChannelPage />
        </Suspense>
      </AuthLayout>
    )
  }, {
    path: "/deleteaccount", element: (
      <AuthLayout>
        <Suspense  fallback={"loading"}>
          <lazyDeleteAccount />
        </Suspense>
      </AuthLayout>
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