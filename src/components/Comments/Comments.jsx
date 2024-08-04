import React from "react";

import CommentProfile from "./CommentProfile.jsx";

function Comments({ content, like, dislike }) {
  return <CommentProfile content={content} like={""} dislike={""} />;
}

export default Comments;
