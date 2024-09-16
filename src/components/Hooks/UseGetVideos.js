import axios from "axios";
import { backendUrl } from "../index.js";
import { useEffect, useState } from "react";

const useGetVideos = function () {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [videoRes, setVideoRes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const getVideos = async function () {
      setLoading(true);
      axios
        .get(`${backendUrl}/getvideos/${page}/${pageSize}`)
        .then((res, error) => {
          //  console.log(res)
         
            setVideoRes((prev) => [...prev, ...res?.data?.data]);
            setLoading(false);
          
        })
        .catch((error) => {
          console.log("error while fetching", error);
          setError(error);
          setLoading(false);
        });
    };
    getVideos();

    return ()=>{

    }
  }, [page]);

  return { page, setPage,pageSize, setPageSize,   setVideoRes,  setLoading, setError, videoRes, loading, error };
};

export default useGetVideos;
