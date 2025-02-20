import axios from "axios";
import { backendUrl } from "../index.js";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateChannel () {

  const [loading, setLoading] = useState(false);
  const [channel, setChannel] = useState({
    channelName: "",
    about: "",
  });

  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  let clearTimeOutId;

  const { channelName, about } = channel;
  const handleChange = function (e) {
    e.preventDefault();

    clearTimeout(clearTimeOutId);
    // const formData = new FormData()
    clearTimeOutId = setTimeout(() => {
      setChannel({
        ...channel,
        [e.target.name]: e.target.value,
      });
    }, 1000);
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("channelName", channelName);
    formData.append("about", about);
    formData.append("profilePic", profilePic);

    axios
      .post(`${backendUrl}/createchannel`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((res) => {
        navigate("/channel");
        toast.success(res.data.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {handleChange,handleSubmit, loading,channel, setChannel, profilePic, setProfilePic};
};
export default CreateChannel;