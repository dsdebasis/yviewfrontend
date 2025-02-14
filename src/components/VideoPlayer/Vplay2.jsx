import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { backendUrl, videoApi } from "../index.js";
import { useState } from "react";
import { toast } from "react-toastify";
import CommentWrap from "../Comments/CommentWrap.jsx";
import { useContext } from "react";
import { CmntContext } from "../../Context/Context.js";
import VideoPlayer from "./VideoPlayer.jsx";
import VideoDetails from "./VideoDetails.jsx";


function Vplay2() {
  const [videoData, setvideoData] = useState("");
  const { videoid } = useParams();

  const { cmnt, setCmnt } = useContext(CmntContext);

  // let videoData;
  useEffect(() => {
    axios
      .get(`${backendUrl}/videoid/${videoid}`)
      .then((res) => {
        setvideoData(res.data.message);
        // setCmnt(videoid);
        localStorage.setItem("videoId", videoid);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
    axios
      .post(
        `${videoApi}/update-views/${videoid}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res.data.data);
      })
      .catch((error) => {
        // console.log(error);
      });

    return () => {};
  }, []);

  const playerRef = useRef(null);

  const videoPlayerOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    preload: "auto",
    sources: [
      {
        src: videoData?.videoFile,
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
  
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("play", () => {
      // console.log("clicked");
    });
    player.on("waiting", () => {
      // videojs.log("player is waiting");
    });
    // console.log(player);
    player.on("dispose", () => {
      // videojs.log("player will dispose");
    });
  };
  return (
    <section className="min-h-screen max-w-screen lg:max-w-full  px-2 lg:px-2 bg-gradient-to-b">
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
      <VideoDetails data={videoData} />

      <CommentWrap videoid={videoid} />
    </section>
  );
}

export default Vplay2;
