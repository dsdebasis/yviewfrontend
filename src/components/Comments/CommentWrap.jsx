import { Toaster } from "react-hot-toast";
import { useState, } from "react";

import { backendUrl } from "../index.js";
import AddComment from "./AddComment.jsx";
import { CommentEditOpnProvider } from "../../Context/CommentEditOpnProvider.jsx";
import Comments from "./Comments.jsx";
import useGetComments from "../Hooks/UseGetComments.js";



function CommentWrap({ videoid }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
 
  
  const { comments } = useGetComments(
    `${backendUrl}/comments/${videoid}/${page}/${pageSize}`
  );

 
   
  return (
    <section className="min-h-screen h-auto  w-full px-2 pb-3 mt-10  md:px-2 lg:px-3 ">
      <AddComment />
      <CommentEditOpnProvider>
        <section className="grid grid-flow-row gap-y-4">
          {comments?.map((i) => {
            return (
              <Comments
                key={i?._id}
                id={i._id}
                username={i.username}
                content={i.comment}
                commentTime={i.commentTime}
                like={i.like}
                dislike={i.dislike}
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
