import React from "react";

import CommentProfile from "./CommentProfile.jsx";

function Comments({ content, like, dislike, username,commentTime,id}) {
  return <CommentProfile id={id} content={content} like={""} dislike={""} username={username}  commentTime={commentTime}/>;
}

export default Comments;
