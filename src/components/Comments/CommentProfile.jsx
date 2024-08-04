import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { useContext } from "react";
import { CmntContext } from "../../Context/Context";
const CommentProfile = ({ userName, content, like, dislike }) => {

  const {cmnt} = useContext(CmntContext)
  // console.log(cmnt)
  return (
    <div className=" border-[0.5px] border-stone-500 rounded-md  h-auto flex flex-col justify-around px-2 mt-3 text-white">
      <h1 className="text-left mt-2 text-yellow-100">UserName</h1>
      <p className="w-full h-auto text-stone-400  tracking-wider text-justify p-1 text-sm lg:text-lg ">
       {content || ""}
      </p>
      <div className=" w-[50%] p-1 flex justify-around mb-1 max-h-fit">
        <button>
          <SlLike className="hover:scale-125 transition-all hover:text-blue-500" />
          <span>{like}</span>
        </button>
        <button>
          <SlDislike className="hover:scale-125 transition-all hover:text-blue-500" />
          <span>{dislike}</span>
        </button>
      </div>
    </div>
  );
};

export default CommentProfile;
