import Nav from "../Navbar/Nav.jsx";
import VideoPage from "../Videos/VideoPage.jsx";
import Search from "../Videos/Search.jsx";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../index.js";
import TotalVideos from "../Videos/TotalVideos.jsx";
import Video from "../Videos/Video.jsx";
import { useState } from "react";
import VideoFooter from "../Channel/VideoFooter.jsx";
import ChannelImg from "../Channel/ChannelImg.jsx";
import { FetchVideos } from "../FetchVideo.js";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [videoRes, setVideoRes] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    // axios.get(`${backendUrl}/getvideos`).then((result) => {
    //   result = result.data;
    //   setVideoRes(result);
    // }).catch((error)=>{
    //   setError(error.response.data.message)
    //   // console.log(error.response.data.message)
    // })
    
    let getData = async () => {
        let res = await FetchVideos()
        // res = res?.response?.data
        
        // setVideoRes(res.data)
        if(res.success == false){
          setError(true)
        } else{
           setVideoRes(res)
        }
        
    };
    getData()
   
  }, []);

  return (
    <section className="min-h-screen px-2  box-border bg-gradient-to-r from-slate-900 to-slate-700 font-sans pt-2">
      <Nav />
      <div className="max-h-[10vh] mt-5  sticky top-2 z-40 ">
        <Search />
      </div>

      {/* <VideoPage /> */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  place-items-center gap-y-6  lg:gap-y-5 text-white py-2">
        {error ? (
          <h1 className=" w-full text-center text-yellow-500">
            No Videos Found
          </h1>
        ) : (
          <></>
        )}

        {videoRes?.data?.map((item, index) => {
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
      </section>
      <ToastContainer />
    </section>
  );
};

export default Home;
