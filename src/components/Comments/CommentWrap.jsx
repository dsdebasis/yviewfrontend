import React from "react";
import Comments from "./Comments.jsx";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { backendUrl } from "../index.js";
import AddComment from "./AddComment.jsx";
// import { useContext } from "react";
// import { CmntContext } from "../../Context/Context.js";
import {  Toaster } from "react-hot-toast";
import { CommentEditOpnProvider } from "../../Context/CommentEditOpnProvider.jsx";

function CommentWrap({ videoid }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [comments, setComments] = useState([]);

  // const {cmnt} =useContext(CmntContext)

  useEffect(() => {
    axios
      .get(`${backendUrl}/comments/${videoid}/${page}/${pageSize}`)
      .then((res) => {
        console.log("comments", res.data.message.comments.length);
        // setComments(res.data.message.comments);
      })
      .catch((error) => {});
  }, []);
  return (
    <section className="min-h-screen h-auto  w-full px-2 pb-3 mt-10  md:px-2 lg:px-3 ">
      <AddComment />
      <CommentEditOpnProvider>
        <section className="grid grid-flow-row gap-y-4">
          {comments.map((cmnt) => {
            return (
              <Comments
                key={cmnt._id}
                id={cmnt._id}
                content={cmnt.comment}
                like={""}
                dislike={""}
                username={cmnt.username}
                commentTime={cmnt.commentTime}
                comments={comments}
                setComments={setComments}
              />
            );
          })}
        </section>
      </CommentEditOpnProvider>
      <Toaster />
    </section>
  );
}

export default CommentWrap;
