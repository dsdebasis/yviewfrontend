import React from "react";

import CommentProfile from "./CommentProfile.jsx";

function Comments({ content, like, dislike, username,commentTime}) {
  return <CommentProfile content={content} like={""} dislike={""} username={username} commentTime={commentTime}/>;
}

export default Comments;
