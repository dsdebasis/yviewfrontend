import React, { useState } from "react";
import ChannelDetails from "../Channel/ChnlDetails.jsx";
import VideoDetails from "./VideoDetails.jsx";
import { VideoEditOpnClicked } from "../../Context/Context.js";
import CommentEdit from "../Comments/CommentEdit.jsx";
import { SlOptionsVertical } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import CommentEditOption from "../Comments/CommentEditOption.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {videoApi} from "../index.js";
// import HandleDelete from "../Hooks/HandleDelete.js";
import { Toaster,toast }  from "react-hot-toast";
import useChannelDetails from "../Hooks/useChannelDetails.js";
const Video = ({ id, }) => {
  const { buttonClicked, setButtonClicked,videoData} = useContext(VideoEditOpnClicked);
  const navigate = useNavigate();

  const url = useLocation().pathname;
  let checkUrl = url == "/channel";

  
  const HanleEdit = (e) => {
    console.log(e.target.id);
    navigate(`/editvideo/${id}`);
       
  };

  function HandleDelete(e) {
   
    let id = e.target.id
    axios.delete(`${videoApi}/remove-video/${id}`,{
        withCredentials:true
    }).then((res) =>{
     setButtonClicked(false);
    toast.success(res.data.message)
    }).catch((err) => {
        toast.error(err.response.data.message)
        setButtonClicked(false);
    });
}
  return (
    <div className=" relative w-full h-full  overflow-hidden rounded-xl grid grid-flow-row gap-y-6 py-2 md:px-0  xl:p-2  hover:drop-shadow-xl hover:bg-gradient-to-tr hover:from-gray-500  ">
      <VideoDetails />
      <ChannelDetails />
      
      {checkUrl ? (
        <button
          className="h-fit w-fit absolute bottom-3  right-1  hover:text-yellow-400 ml-[98%] "
          id={id}
          onClick={(e) => {
            setButtonClicked(() => (buttonClicked === id ? null : id));
          }}
        >
          <SlOptionsVertical color="white" />
        </button>
      ) : (
        <></>
      )}

      {buttonClicked === id && (
        <CommentEdit
          id={id}
         
          handleEdit={HanleEdit}
          handleDelete={HandleDelete}
          handleReject={()=>{
            setButtonClicked(false)
          }}
        />
      )}
      <Toaster/>
    </div>
  );
};

export default Video;
