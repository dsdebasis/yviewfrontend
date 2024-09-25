import React from "react";
import toast, { Toaster } from "react-hot-toast";
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
  
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const { data, setData, channelVideos, setChannelVideos ,setTotalViews,totalViews} =
    useContext(CompContext);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backendUrl}/getchannel`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success("channel data fetched successfully");
        res = res.data.data;

        setChannelVideos(res.allVideos);
        setData(res.userChannelDetails);
        setTotalViews(res.totalViews)
      })
      .catch((err) => {
        setError(err.response.data);
        console.log(err.response.data.message);
        toast.error(err.response.data.message)
      })
      .finally(() => {
        setLoading(false);
      });

      return ()=>{
        
      }
  }, []);

  // const { message } = error;
  // console.log("error",error)
  if(error.scccess){
   return <Error message="No channel found"  />
  }
  
  {
    loading ? <Loading /> : <></>;

    return (
      <section className="min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 grid grid-flow-row  px-5">
        <ChannelHeading />
        <VideoPage />
        <Toaster/>
      </section>
    );
  }
};

export default ChannelPage;
