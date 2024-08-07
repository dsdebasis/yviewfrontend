import Nav from "../Navbar/Nav.jsx";
import VideoPage from "../Videos/VideoPage.jsx";
import Search from "../Videos/Search.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../index.js";
import TotalVideos from "../Videos/TotalVideos.jsx";
import Video from "../Videos/Video.jsx";
import { useState } from "react";
import VideoFooter from "../Channel/VideoFooter.jsx";
import ChannelImg from "../Channel/ChannelImg.jsx";
import Loading from "../Loading/Loading.jsx";
import { useCallback } from "react";
const Home = () => {
  // const [videos, setVideos] = useState([]);
  const [videoRes, setVideoRes] = useState([]);

  const [error, setError] = useState(false);
  let [page, setPage] = useState(1);
  let [pageSize, setPageSize] = useState(4);

  const [comments,setComments] = useState([null])
  const [load,setLoading] = useState(false)
  const fetchData = useCallback(() => {
    setLoading(true)
    axios
      .get(`${backendUrl}/getvideos/${page}/${pageSize}`)
      .then((res) => {
      //  console.log(res)
        if (error == false) {
         setVideoRes((prev)=>[...prev,...res.data.data]) 
         setLoading(false)
        }
      })
      .catch((error) => {
        console.log("error while fetching", error);
        setError(error);
        setLoading(false)
      });
  });

  const handleScroll = (e) => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollTop + 1 &&
      !error
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  useEffect(() => {
    
    window.addEventListener("scrollend", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="min-h-screen px-2  box-border bg-gradient-to-r from-slate-900 to-slate-700 font-sans pt-2">
      <Nav />
      <div className="max-h-[10vh] mt-5  sticky top-2 z-40 ">
        <Search />
      </div>

      {/* <VideoPage /> */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  place-items-center gap-y-6  lg:gap-y-5 text-white py-2">
       
        {videoRes?.map((item) => {
          return (
            <Video
            key={item._id}
            thumbnail={item.thumbnail}
            vid={item._id}
            src={item?.videoFile}
            title={item.title}
            uploadTime={item.uploadTime}
            videoOwner={item.ownerName}
            duration={item.duration}
            channelProfilePic={item.channelProfilePic}
            />
          );
        })}
        {error ?<h1 className="text-yellow-500 ">No More Video Found</h1>:<></>}
       
      </section>
      <ToastContainer />
    </section>
  );
};

export default Home;
