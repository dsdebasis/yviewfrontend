import React, { useState } from "react";
import ChannelDetails from "../Channel/ChnlDetails.jsx";
import VideoDetails from "./VideoDetails.jsx";
import { VideoEditOpnClicked } from "../../Context/Context.js";
import CommentEdit from "../Comments/CommentEdit.jsx";
import { SlOptionsVertical } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import CommentEditOption from "../Comments/CommentEditOption.jsx";

const Video = ({ id }) => {


  const {buttonClicked, setButtonClicked } =useContext(VideoEditOpnClicked);
  console.log("button",buttonClicked)

  const url = useLocation().pathname;
  let checkUrl = url == "/channel";


  return (
    <div className=" relative w-full h-full  overflow-hidden rounded-xl grid grid-flow-row gap-y-6 py-2 md:px-0  xl:p-2  hover:drop-shadow-xl hover:bg-gradient-to-tr hover:from-stone-600 ">
      <VideoDetails />
      <ChannelDetails />

      {checkUrl ? (
        <button
          className="h-fit w-fit absolute bottom-3  right-1  hover:text-yellow-400 ml-[98%] "
          id={id}
          onClick={(e) => {
            setClick
          }}
        >
          <SlOptionsVertical color="white" />
        </button>
      ) : (
        <></>
      )}

   
    </div>
  );
};

export default Video;
