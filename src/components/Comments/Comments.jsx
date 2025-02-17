
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import CommentEditOption from "./CommentEditOption.jsx";
import CommentContext from "../../Context/CommentContext.jsx";
import { useContext } from "react";
import { CommentEditOpnClicked } from "../../Context/Context.js";
function Comments(props) {

  const { buttonClicked, setButtonClicked } = useContext(CommentEditOpnClicked);
  
  return (
    <CommentContext>
      <section id={props.id}>
        <CgProfile className="text-3xl text-white  lg:text-4xl mt-2" />
        <div className="max-w-fit bg-gradient-to-tr  from-slate-500 rounded-2xl py-3 px-3 mt-3 text-white ">
          <h1 className=" text-green-300 text-sm capitalize">
            {props.username || "User"}
            <span className="text-slate-300 ml-4">{props.commentTime}</span>
          </h1>
          <p className="row-span-2 w-full text-slate-200  tracking-wider text-justify p-1 text-sm lg:text-base content">
            {props.content || ""}
          </p>
          <div className="flex  gap-x-5 mt-2 lg:gap-x-9  max-h-fit">
            <button>
              <SlLike className="hover:scale-125 transition-all hover:text-blue-500" />
              <span>{props.like}</span>
            </button>
            <button>
              <SlDislike className="hover:scale-125 transition-all hover:text-blue-500" />
              <span>{props.dislike}</span>
            </button>
          </div>
          <CommentEditOption id={props.id} context={{ buttonClicked, setButtonClicked }} />
        </div>
      </section>
    </CommentContext>
  );
}

export default Comments;
