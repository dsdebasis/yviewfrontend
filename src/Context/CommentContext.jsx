import React from "react";
import { CmntContext } from "./Context.js";
import { useState } from "react";

function CommentContext({ children }) {
  const [cmnt, setCmnt] = useState({data:"ds"});
  return (
    <CmntContext.Provider value={{ cmnt, setCmnt }}>{children}</CmntContext.Provider>
  );
}

export default CommentContext;
