import React from "react";
import { backendUrl } from "../index.js";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import toast, { Toaster } from "react-hot-toast";
import ImageWraper from "../Utils/ImageWraper.jsx";
import UpdateProfileCover from "../Hooks/UpdateProfileCover.js";
const UpdateProfile = () => {


  let { profile, setProfile, cover, setCover ,handleCover,handleProfile,loading,updateCover,updateProfile,updateProfileCover} = UpdateProfileCover();

  function getProfileAndCover() {
    axios
      .get(`${backendUrl}/updateprofileandcover`, {
        withCredentials: true,
      })
      .then((res) => {
        setProfile(res.data.data.profilePic);
        setCover(res.data.data.coverImage);
      });
  }

  React.useEffect(() => {
    getProfileAndCover();

    return () => {
      getProfileAndCover();
    };
  }, [profile, cover]);

 

  return (
    <section className="min-h-screen w-full   flex flex-col justify-center items-center px-[5vw]">
      <header className="mb-[10vh] text-center text-xl lg:text-4xl  font-sans   max-w-fit bg-gradient-to-r from-slate-300 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text border-2 px-2 py-4 border-stone-600 rounded-2xl  backdrop-filter backdrop-blur-lg bg-opacity-70">
        Update Profile And Cover
      </header>

      {loading ? (
        <Loading />
      ) : (
        <form
          encType="multipart/form-data"
          onSubmit={updateProfileCover}
          className="max-w-[90vw] lg:max-w-[60vw] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 rounded-xl mx-5 md:mx-[25vw] md:h-[80%] lg:h-[60vh] overflow-hidden  justify-self-center text-white grid  py-3 px-2 border-2 border-stone-700  "
        >
          <div className=" flex  flex-col lg:flex-row justify-around  gap-y-5 p-5 md:gap-x-5 ">
            <ImageWraper
              inputName={"updateProfilePic"}
              handleChange={handleProfile}
              profile={profile}
              cover={cover}
              loading={loading}
            />
            <ImageWraper
              inputName={"updateCoverImage"}
              handleChange={handleCover}
              profile={profile}
              cover={cover}
              loading={loading}
            />
          </div>

          <div className="w-full ">
            <button
              type="submit"
              disabled={loading}
              className="h-[6vh] w-full  rounded-md bg-blue-600"
            >
              Update{" "}
            </button>
          </div>
        </form>
      )}
    
      <Toaster />
    </section>
  );
};

export default UpdateProfile;
