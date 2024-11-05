import Video from "../Videos/Video.jsx";
import VideoContextProvider from "../../Context/VideoContextProvider.jsx";
import { useEffect ,useState} from "react";
import axios from "axios";
import { backendUrl } from "../index.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const ChannelVideo = () => {
  let data 
  const [channelData,setChannelData] = useState({})
  useEffect(() => {
    axios.get(`${backendUrl}/getchannel`, {
      withCredentials: true
    }).then((res) => {
       setChannelData(res.data.data)
    }).catch((err) => {
      toast.error(err.response.data.message)
    })
  }, []);

  data = channelData
  console.info(data.allVideos)
  return (
    <section className="w-full h-full  grid grid-cols-1 gap-y-2  md:grid-cols-3 sm:grid-cols-2 sm:gap-x-10 md:gap-x-5 lg:grid-cols-3  place-items-center mt-4 text-white lg:py-5 lg:gap-x-4 lg:gap-y-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 scroll-smooth">
      {
       data.allVideos?.map((i, d) => {
         return (
           <VideoContextProvider key={i._id} data={i}>
             <Video id={i._id} />
           </VideoContextProvider>
         )
       })
          }
    </section>
  );
};

export default ChannelVideo;
