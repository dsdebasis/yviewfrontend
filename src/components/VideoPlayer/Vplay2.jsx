import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRef, useEffect, lazy, useState, useContext, Suspense } from "react";

import { backendUrl, videoApi } from "../index.js";

import CommentWrap from "../Comments/CommentWrap.jsx";

import { CmntContext } from "../../Context/Context.js";
import VideoPlayer from "./VideoPlayer.jsx";

const VideoDetails = lazy(() => import("./VideoDetails.jsx"));

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
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
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

  return (
    <section className="min-h-screen max-w-screen lg:max-w-full  px-2 lg:px-2 bg-gradient-to-b">
      <section>
        <SuspenseVideoPlayer uri={videoData?.videoFile} />

        <Suspense fallback={<span>loading...</span>}>
          <VideoDetails data={videoData} />
        </Suspense>
      </section>

      <CommentWrap videoid={videoid} />
    </section>
  );
}

export default Vplay2;

const SuspenseVideoPlayer = function ({ uri }) {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <VideoPlayer videoUri={uri} />
    </Suspense>
  );
};
