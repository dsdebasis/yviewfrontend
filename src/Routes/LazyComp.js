import React from "react"

const LazyHome = React.lazy(() =>
         import("../../src/components/Home/Home.jsx")
);

const LazyLogin = React.lazy(() =>
  import("../../src/components/Login/Login.jsx")
);

const LazySignUp = React.lazy(() =>
  import("../../src/components/Signup/Signup.jsx")
);


const LazyProfile = React.lazy(() =>
  import("../../src/components/Profile/Profile.jsx")
);

const LazyUpdatePassword = React.lazy(() =>
  import("../../src/components/Profile/UpdatePassword.jsx")
);

const LazyLogout = React.lazy(() =>
  import("../../src/components/Login/Logout.jsx")
);
const LazyUploadVideo = React.lazy(() =>
  import("../../src/components/UploadVideo/UploadVideo.jsx")
);

const LazyEditVideo = React.lazy(() =>
  import("../../src/components/UploadVideo/EditVideo.jsx")
);

const LazyCreateChannel = React.lazy(() =>
  import("../../src/components/Channel/ChannelCreate.jsx")
);
const LazyChannelPage = React.lazy(() =>
  import("../../src/components/Channel/ChannelPage.jsx")
);
const LazyDeleteAccount = React.lazy(() =>
  import("../../src/components/DeleteAccount/DeleteAccount.jsx")
);
const LazyUpdateProfile = React.lazy(() =>
  import("../../src/components/Profile/UpdateProfile.jsx")
);
const LazyResetPassword = React.lazy(() => import ( "../components/PasswordReset/PasswordReset.jsx"))
const LazyVerifyResetPasswordLink = React.lazy(() => import ( "../components/ResetPasswordVerify/ResetPasswordVerify.jsx"))
export {
        LazyLogin,
        LazySignUp,
        LazyLogout,
        LazyResetPassword,
        LazyVerifyResetPasswordLink,
        LazyUpdatePassword,
        LazyChannelPage,
        LazyHome,
        LazyProfile,
        LazyCreateChannel,
        LazyDeleteAccount,
        LazyUpdateProfile,
        LazyUploadVideo,
        LazyEditVideo
}