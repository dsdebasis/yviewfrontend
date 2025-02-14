import React from "react";
import CommentEdit from "./CommentEdit.jsx";
import { SlOptionsVertical } from "react-icons/sl";

const CommentEditOption = (props) => {
  let commentId = props.id;

 //using context api for which component is currentley using it
  const { buttonClicked, setButtonClicked } = props?.context;
 
//  console.log(props)
  return (
    <section className="h-full w-full  relative">
      <div className=" w-full h-full flex justify-end">
        <button
          id={props.id}
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
