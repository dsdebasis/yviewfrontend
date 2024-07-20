import VideoPlayer from "./VideoPlayer.jsx";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { backendUrl } from "../index.js";
import { useState } from "react";
import {  toast } from 'react-toastify';

function Vplay2() {
  

  const [videoLink,setVideoLink] = useState("")
  const { videoid } = useParams();
 

  let videolink;
  useEffect(() => {
    axios
      .get(`${backendUrl}/videoid/${videoid}`,)
      .then((res) => {
       
        setVideoLink(res.data.message)
      })
      .catch((error) => {
        
        toast.error(error.response.data.message)
      });
  }, []);
  
  const playerRef = useRef(null);
   
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink.videoFile,
        // type: "mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default Vplay2;
