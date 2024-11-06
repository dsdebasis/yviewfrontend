import React from "react";
import toast, { Toaster } from "react-hot-toast";
import ChannelHeading from "./ChnlHeading.jsx";
import VideoPage from "../Videos/VideoPage.jsx";
import useChannelDetails from "../Hooks/useChannelDetails.js";

import { Error } from "../Error.jsx";
const ChannelPage = () => {

  // const [channelInfo, setChannelInfo] = useState();
  // const {
  //   setData,
  //   setTotalViews,
  // } = useContext(CompContext);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`${backendUrl}/getchannel`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       toast.success("channel data fetched successfully");
  //       res = res.data.data;
  //        console.info(res)
  //       // setChannelVideos(res.allVideos);
  //       setData(res.userChannelDetails);
  //       setTotalViews(res.totalViews);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       // setError(err.response.data);
  //       // // console.log(err.response.data.message);
  //       // toast.error(err.response.data.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });

  //   return () => {};
  // }, []);

  // const { message } = error;
  // console.log("error",error)
  // if(error.scccess){
  //  return <Error message="No channel found"  />
  // }

  const { channelDetails,error } = useChannelDetails();
console.info(error)
  return (
    <section>
      {error ? (
        <Error message={error.message} link="createchannel" linkText="create channel"/>
      ) : (
        <section className="min-h-screen w-full  from-slate-700 to-slate-900 grid grid-flow-row  px-5">
          <ChannelHeading channelDetails={channelDetails} />
          <VideoPage />
          <Toaster />
        </section>
      )}
    </section>
  );
  
};

export default ChannelPage;
