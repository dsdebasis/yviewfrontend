import axios from "axios";
import { backendUrl } from "../index.js";
import { useEffect, useState } from "react";

function useChannelDetails() {
  const [channelDetails, setChannelDetails] = useState({});
  const [chanlVideo, setChannelVideo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backendUrl}/getchannel`, {
        withCredentials: true,
      })
      .then((res) => {
        setChannelVideo(res.data.data);
        setChannelDetails(res.data.data.userChannelDetails);
      })
      .catch((err) => {
        setError(err.response.data);
      })
      .finally((data) => {
        setLoading(false);
      });

    return () => {
      setChannelVideo([]);
    };
  }, []);
        
        return { channelDetails, chanlVideo, loading, error };
}

export default useChannelDetails;
