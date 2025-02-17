import {
  createBrowserRouter,
} from "react-router-dom";
import Loading from "../components/Loading/Loading.jsx";
import AuthLayout from "./AuthLayout.jsx";
import  { Suspense } from "react";
import Vplay2 from "../components/VideoPlayer/Vplay2.jsx";
import CreateUser from "../components/CreateUser/CreateUser.jsx";
import CommentContext from "../Context/CommentContext.jsx";
import Content from "../components/Content/Content.jsx";
import {
  LazyHome,
  LazyLogin,
  LazySignUp,
  LazyProfile,
  LazyResetPassword,
  LazyVerifyResetPasswordLink,
  LazyUpdatePassword,
  LazyChannelPage,
  LazyCreateChannel,
  LazyDeleteAccount,
  LazyUpdateProfile,
  LazyUploadVideo,
  LazyLogout,
  LazyEditVideo
} from "./LazyComp.js";

const Routes = createBrowserRouter([
  {
    path: "/about",
    element: <Content />,
    children: [
      { path: "dress", element: <LazyLogin/> }

    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyHome />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyLogin />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyResetPassword />
      </Suspense>
    ),
  },
  {
    path: "/password-resetemail-verify/:passwordResetToken",
    element: <LazyVerifyResetPasswordLink />,
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <LazySignUp />
      </Suspense>
    ),
  },
  {
    path: "/verifyotp",
    element: (
      <Suspense fallback={<Loading />}>
        <CreateUser />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyProfile />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/updateprofile",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyUpdateProfile />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/updatepassword",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyUpdatePassword />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/logout",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyLogout />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/createchannel",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyCreateChannel />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/videoplayer/:videoid/",
    element: (
      <CommentContext>
        <Vplay2 />
      </CommentContext>
    ),
  },
  {
    path: "/uploadvideo",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyUploadVideo />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path:"/editvideo/:videoid",
    element:(
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyEditVideo />
        </Suspense>
      </AuthLayout>
    )
  },
  {
    path: "/channel",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyChannelPage />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/deleteaccount",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LazyDeleteAccount />
        </Suspense>
      </AuthLayout>
    ),
  },
]);

export { Routes };
