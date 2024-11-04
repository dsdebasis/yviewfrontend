import React from "react";
import CommentEdit from "./CommentEdit.jsx";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

import { useContext } from "react";
import { CommentEditOpnClicked } from "../../Context/Context.js";

const CommentEditOption = ({ id }) => {
  let commentId = id;
  const { buttonClicked, setButtonClicked, } = useContext(
    CommentEditOpnClicked
  );

  return (
    <section className="h-full w-full  relative">
      <div className=" w-full h-full flex justify-end">
        <button
          id={id}
          className="  max-w-fit "
          onClick={(e) => {
            setButtonClicked( ()=> buttonClicked === commentId ? null : commentId );
          }}
        >
          <SlOptionsVertical color="white" />
        </button>
      </div>

      {   buttonClicked === commentId &&   <CommentEdit commentId={commentId} />}
    </section>
  );
};

export default CommentEditOption;
