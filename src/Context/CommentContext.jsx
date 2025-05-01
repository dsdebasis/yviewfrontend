
import { CmntContext } from "./Context.js";
import { useState } from "react";
import useGetComments from "../../src/components/Hooks/UseGetComments.js";

function CommentContext({ children }) {
  const [cmnt, setCmnt] = useState([]);
 
  return (
    <CmntContext.Provider value={{ cmnt, setCmnt }}>{children}</CmntContext.Provider>
  );
}

export default CommentContext;
