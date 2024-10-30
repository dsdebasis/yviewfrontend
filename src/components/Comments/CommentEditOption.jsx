import React from "react";
import CommentEdit from "./CommentEdit.jsx";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
const CommentEditOption = () => {
  const [click, setClick] = useState(false);
  return (
    <section className="h-full w-full  relative">
      <div className=" w-full h-full flex justify-end">
        <button className="  max-w-fit " onClick={() => {setClick(!click)}}>
          <SlOptionsVertical color="white" />
        </button>
      </div>

      {click && <CommentEdit />}
    </section>
  );
};

export default CommentEditOption;
