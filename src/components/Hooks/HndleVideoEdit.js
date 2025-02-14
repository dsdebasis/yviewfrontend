import { useState } from "react"
import axios from "axios";
import { videoApi } from "../index.js";
import { useLocation } from "react-router-dom";
const HandleVideoEdit = (e) => {
    e.preventDefault();
    const videoId = useLocation().pathname()
    const [thumbnail,setThumbnail] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);   


    let formData = new FormData();
    formData.append("thumbnail",thumbnail);
    formData.append("title",title);
    formData.append("description",description);

    setLoading(true);
    axios.patch(`${videoApi}/update-videos/${id}`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log("update video response", res);
    }).then((res)=>{
      setLoading(false);
    }).catch((error) => {
        setError(error);
    })

    return [thumbnail,setThumbnail,title,setTitle,description,setDescription]
}

export default HandleVideoEdit