
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../index.js";
import toast from "react-hot-toast";

const UpdateProfileCover = (e) => {
  const [profile, setProfile] = useState("");
  const [cover, setCover] = useState("");
  const [updateCover, setUpdateCover] = useState("");
  const [updateProfile, setUpdateProfile] = useState("");
  const [loading, setLoading] = useState(false);


  const handleProfile = function (e) {
    setUpdateProfile(e.target.files[0]);
  };

  const handleCover = function (e) {
    setUpdateCover(e.target.files[0]);
  };

  function updateProfileCover(e) {
    e.preventDefault();
    setLoading(true);
    let updateRes;
    const formData = new FormData();
    formData.append("updateProfilePic", updateProfile);
    formData.append("updateCoverImage", updateCover);
    axios
      .put(`${backendUrl}/updateprofileandcover`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data?.data?.profilePic !== undefined) {
          setProfile(res.data?.data?.profilePic);
        }
        if (res.data?.data?.coverImage !== undefined) {
          setCover(res.data?.data?.coverImage);
        }
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err?.response?.data.message);
      })
      .finally((res) => {
        setLoading(false);
      });
  }
  return { updateProfileCover, profile, cover, updateCover, updateProfile ,loading,handleCover,handleProfile,setProfile,setCover};
};

export default UpdateProfileCover;
