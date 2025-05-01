import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import {  useEffect, lazy, useState, Suspense } from "react";
import { backendUrl,  } from "../index.js";
import  updateViews  from "../Hooks/UpdateViews.js";
import CommentWrap from "../Comments/CommentWrap.jsx";
import VideoPlayer from "./VideoPlayer.jsx";

const VideoDetails = lazy(() => import("./VideoDetails.jsx"));
import useGetComments from "../Hooks/UseGetComments.js";
import { useContext } from "react";
import { CmntContext } from "../../Context/Context.js";
function Vplay2() {
  const [videoData, setvideoData] = useState("");
  const { videoid } = useParams();
  const updateData = updateViews();
  const { cmnt,setCmnt } = useContext(CmntContext);
  const data = useGetComments(`${backendUrl}/comments/${videoid}`);
  
   

  // let videoData;
  useEffect(() => {
   setCmnt(data)
    axios
      .get(`${backendUrl}/videoid/${videoid}`)
      .then((res) => {
        setvideoData(res.data.message);
   
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
   updateData(videoid);
    return () => {};
  }, []);


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
