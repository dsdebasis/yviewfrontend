import { Toaster } from "react-hot-toast";


import AddComment from "./AddComment.jsx";
import { CommentEditOpnProvider } from "../../Context/CommentEditOpnProvider.jsx";
import Comments from "./Comments.jsx";

import { CmntContext } from "../../Context/Context.js";
import { useContext } from "react";


function CommentWrap({ videoid }) {
  const {cmnt,setCmnt  } = useContext(CmntContext);
   
  return (
    <section className="min-h-screen h-auto  w-full px-2 pb-3 mt-10  md:px-2 lg:px-3 ">
      <AddComment />
      <CommentEditOpnProvider>
        <section className="grid grid-flow-row gap-y-4">
          

          {Array.isArray(cmnt) && cmnt?.map((i) => {
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
