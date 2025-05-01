import  { Toaster } from "react-hot-toast";
import ChannelHeading from "./ChnlHeading.jsx";

import useChannelDetails from "../Hooks/useChannelDetails.js";

import { Error } from "../Error.jsx";
import ChannelVideo from "../Videos/ChannelVideo.jsx";
const ChannelPage = () => {
  const { channelDetails, error } = useChannelDetails();
  console.log(error);
  return (
    <section>
      {error ? (
        <Error
          message={error.message}
          link="createchannel"
          linkText="create channel"
        />
      ) : (
        <section className="min-h-screen w-full  from-slate-700 to-slate-900 grid grid-flow-row  px-5">
          <ChannelHeading channelDetails={channelDetails} />
          <ChannelVideo/>
          
        </section>
      )}
      <Toaster />
    </section>
  );
};

export default ChannelPage;
