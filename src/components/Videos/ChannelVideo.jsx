import Video from "../Videos/Video.jsx";
import VideoContextProvider from "../../Context/VideoContextProvider.jsx";
import useChannelDetails from "../Hooks/useChannelDetails.js";
const ChannelVideo = () => {
  let data; 
  const { channelDetails, chanlVideo, loading, error } = useChannelDetails();
  data = chanlVideo
 
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
