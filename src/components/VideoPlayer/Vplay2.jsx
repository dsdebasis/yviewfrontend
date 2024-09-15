import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { backendUrl } from "../index.js";
import { useState } from "react";
import { toast } from "react-toastify";
import CommentWrap from "../Comments/CommentWrap.jsx";
import { useContext } from "react";
import { CmntContext } from "../../Context/Context.js";
import VideoPlayer from "./VideoPlayer.jsx";
function Vplay2() {
  const [videoLink, setVideoLink] = useState("");
  const { videoid } = useParams();

  const {cmnt,setCmnt}  = useContext(CmntContext)
  
  let videolink;
  useEffect(() => {
    
    axios
      .get(`${backendUrl}/videoid/${videoid}`)
      .then((res) => {
        setVideoLink(res.data.message);
        setCmnt(videoid)
        localStorage.setItem("videoId",videoid)
      })
      .catch((error) => {
        toast.error(error.response.data.message);
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
    console.log("player is ready",player);
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      // videojs.log("player will dispose");
    });
  };
  return <section className="min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 px-1 lg:px-2">
    <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    <CommentWrap videoid={videoid} />
  </section>;
}

export default Vplay2;
