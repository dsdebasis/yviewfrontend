import { lazy, Suspense } from "react";
import { SlOptionsVertical } from "react-icons/sl";
const  CommentEdit  = lazy(() => import("./CommentEdit.jsx"));
import RemoveComment from "../Hooks/RemoveComment.js";
const CommentEditOption = (props) => {
  let commentId = props.id;

 //using context api for which component is currentley using it
  const { buttonClicked, setButtonClicked } = props?.context;
 
// console.log("commentId",commentId)
  return (
    <section className="absolute bottom-3 right-1 ">
      <div className=" w-full h-full flex justify-end">
        <button
          id={props?.id}
          className="  max-w-fit "
          onClick={() => {
            setButtonClicked( ()=> buttonClicked === commentId ? null : commentId );
          }}
        >
          <SlOptionsVertical color="white" />
        </button>
      </div>
    
      {   buttonClicked === commentId &&   <Suspense fallback="..">
        <CommentEdit commentId={commentId}  handleDelete={RemoveComment} /></Suspense>}
    </section>
  );
};

export default CommentEditOption;
