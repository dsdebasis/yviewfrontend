import React from "react";
import Comments from "./Comments.jsx";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { backendUrl } from "../index.js";
import AddComment from "./AddComment.jsx";
import { useContext } from "react";
import { CmntContext } from "../../Context/Context.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentWrap({ videoid }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [comments, setComments] = useState([]);

  // const {cmnt} =useContext(CmntContext)


  useEffect(() => {
   
    axios
      .get(`${backendUrl}/comments/${videoid}/${page}/${pageSize}`)
      .then((res) => {
       console.log(res)
        setComments(res.data.message.comments);
      })
      .catch((error) => {});
  }, []);
  return (
    <section className="min-h-screen h-atuo  w-full px-2 pb-3 mt-10  md:px-2 lg:px-3 ">
      <AddComment />
      <section className="grid grid-flow-row gap-y-4">
        {comments.map((cmnt) => {
          
          return (
            <Comments
              key={cmnt._id}
              content={cmnt.comment}
              like={""}
              dislike={""}
              username={cmnt.username}
              commentTime={cmnt.commentTime}
            />
          );
        })}
      </section>
    <ToastContainer/>
    </section>
  );
}

export default CommentWrap;
