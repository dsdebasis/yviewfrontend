import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChannelHeading from "./ChnlHeading.jsx";
import VideoPage from "../Videos/VideoPage.jsx";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompContext } from "../../Context/Context.js";

import { useContext } from "react";
import Loading from "../Loading/Loading.jsx";
import { Error } from "../Error.jsx";
const ChannelPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const { data, setData, channelVideos, setChannelVideos } =
    useContext(CompContext);
  let { about, profilePic, channelName, createdAt, videos, subscribers } = data;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backendUrl}/getchannel`, {
        withCredentials: true,
      })
      .then((res) => {
        res = res.data.data;

        setChannelVideos(res.allVideos);
        res = res.userChannelDetails;
        setData(res);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log(err.response.data.message);
        toast.error(err.response.data.message)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const { message } = error;
  console.log("error",error)
  if(error.scccess){
   return <Error message="No channel found"  />
  }
  
  {
    loading ? <Loading /> : <></>;

    return (
      <section className="min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 grid grid-flow-row  px-5">
        <ChannelHeading />
        <VideoPage />
        <ToastContainer/>
      </section>
    );
  }
};

export default ChannelPage;
