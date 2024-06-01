import { createBrowserRouter } from 'react-router-dom'
import Loading from '../components/Loading/Loading.jsx'
import AuthLayout from './AuthLayout.jsx'
import Vplay from '../components/VideoPlayer/Vplay.jsx'
import React, { Suspense } from 'react'
import Vplay2 from '../components/VideoPlayer/Vplay2.jsx'

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

const LazyLogout = React.lazy(
  () => import("../../src/components/Login/Logout.jsx")
)
const LazyUploadVideo = React.lazy(
  () => import("../../src/components/UploadVideo/UploadVideo.jsx")
)
const LazyCreateChannel = React.lazy(
  () => import("../../src/components/Channel/ChannelCreate.jsx")
)
const LazyChannelPage = React.lazy(
  () => import("../../src/components/Channel/ChannelPage.jsx")
)
const LazyDeleteAccount = React.lazy(
  () => import("../../src/components/DeleteAccount/DeleteAccount.jsx")
)
const LazyUpdateProfile = React.lazy(
  () => import("../../src/components/Profile/UpdateProfile.jsx")
)

const Routes = createBrowserRouter([
  {
    path: "/", element: (
      <Suspense fallback={<Loading />}>

        <LazyHome />
      </Suspense>
    ),

  },
  {
    path: "/login", element: (
      <Suspense fallback={<Loading />}>

        <LazyLogin />
      </Suspense>
    )
  },
  {
    path: "/signup", element: (
      <Suspense fallback={<Loading />}>

        <LazySignUp />
      </Suspense>
    )
  },
  {
    path: "/profile", element: (
      <AuthLayout >
        <Suspense fallback={<Loading />}>

          <LazyProfile />
        </Suspense>
      </AuthLayout>
    )
  },
  {
    path: "/updateprofile", element: (
      <AuthLayout >
        <Suspense fallback={<Loading />}>

          <LazyUpdateProfile />
        </Suspense>
      </AuthLayout>
    ),

  },
  {
    path: "/updatepassword", element: (
      <AuthLayout >
        <Suspense fallback={<Loading />}>

          <LazyUpdatePassword />
        </Suspense>
      </AuthLayout>
    )
  }, {
    path: "/logout", element: (
      <AuthLayout >
        <Suspense fallback={<Loading />}>
          <LazyLogout />
        </Suspense>
      </AuthLayout>

    )
  }, {
    path: "/createchannel",
    element: (
      <AuthLayout>
        
          <Suspense fallback={<Loading />}>
            <LazyCreateChannel />
          </Suspense>
      
      </AuthLayout>
    )
  }
  , {
    path: "/videoplayer", element: (
      <Vplay2 />
    )
  }, {
    path: "/uploadvideo", element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyUploadVideo />
        </Suspense>
      </AuthLayout>
    )
  }, {
    path: "/channel", element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyChannelPage />
        </Suspense>
      </AuthLayout>
    )
  }, {
    path: "/deleteaccount", element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyDeleteAccount />
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