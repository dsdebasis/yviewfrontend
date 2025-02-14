import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CmntContext } from "../../Context/Context.js";
const useGetComments = function (URL) {
  const {setCmnt,cmnt} = useContext(CmntContext)
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  //   let cachedRes = localStorage.getItem("commnets")
  //   if(chched)

  useEffect(() => {
    axios
    .get(URL, { withCredentials: true })
    .then((res) => {
      setComments ( res.data.message.comments)
      setCmnt(res.data.message.comments)
    })
    .catch((error) => {
      setError(error);
    });
  },[])
  
  return { comments, setError, error };
};

export default useGetComments;
