import React, { useState } from "react";
import Input from "../Input/Input.jsx";
import axios from "axios";
import { backendUrl } from "../index.js";

import Button from "../Button/Button.jsx";
import { toast, Zoom } from "react-toastify";

function AddComment() {
  
  const [click, setClick] = useState(false);
  const [comment, setComment] = useState("");
  const videoId = localStorage.getItem("videoId");
  
  let timerId;
  const addComment = function (e) {
    setClick(true);
    
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      setComment(e.target.value);
      if(comment == undefined || null){
        setClick(false)
      }
    }, 500);
  };

  const handleComment = function (e) {
    e.preventDefault();
    console.log(comment);
    axios
      .post(
        `${backendUrl}/comments/${videoId}`,
        {comment}
        ,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Comment Added")
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message,{
          theme:"colored",
          transition:Zoom,
          autoClose:3000,
          
        });
      })
      .finally(() => {
        setClick(false);
      });
  };
  return (
    <div className="mt-3 px-2">
      <input
        className="w-full border-b-2 bg-transparent text-white outline-none p-1 border-b-blue-400 mb-2"
        placeholder="Add Comment"
        onChange={addComment}
      ></input>

      {click ? <Button name="Comment" fun={handleComment} /> : <></>}
    </div>
  );
}

export default AddComment;
