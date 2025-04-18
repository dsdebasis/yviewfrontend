import { SlLike, SlDislike } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

import { useContext, lazy, Suspense } from "react";

import CommentContext from "../../Context/CommentContext.jsx";
import { CommentEditOpnClicked } from "../../Context/Context.js";

const CommentEditOption = lazy(() => import("./CommentEditOption.jsx"));
function Comments({ id, username, content, commentTime, like, dislike }) {
  const { buttonClicked, setButtonClicked } = useContext(CommentEditOpnClicked);

  return (
    <CommentContext>
      <section id={id} className="max-h-fit max-w-fit relative py-1">
        <CgProfile className="text-3xl text-white  lg:text-4xl mt-2" />
        <CommentBody
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
          id={id}
          username={username}
          content={content}
          commentTime={commentTime}
          like={like}
          dislike={dislike}
        />
      </section>
    </CommentContext>
  );
}

export default Comments;

const CommentLikeDislike = ({
  like,
  dislike,
  id,
  buttonClicked,
  setButtonClicked,
}) => {
  return (
    <div className="flex  gap-x-5  lg:gap-x-2 max-h-fit ">
      <button className="flex gap-x-1 items-center w-[50%]">
        <SlLike className="hover:scale-125 transition-all hover:text-blue-500" />
        <span className="">{like}</span>
      </button>
      <button className="flex gap-x-1 items-center w-[50%]">
        <SlDislike className="hover:scale-125 transition-all hover:text-blue-500" />
        <span>{dislike}</span>
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <CommentEditOption
          id={id}
          context={{ buttonClicked, setButtonClicked }}
        />
      </Suspense>
    </div>
  );
};

const CommentInfo = function ({ username, content, commentTime }) {
  return (
    <section className="mb-4 ">
      <h1 className=" text-green-300 text-sm capitalize">
        {username || "User"}
        <span className="text-slate-300 ml-4">{commentTime}</span>
      </h1>
      <p className="row-span-2 w-full text-slate-200  tracking-wider text-justify p-1 text-sm lg:text-base content mt-1">
        {content || ""}
      </p>
    </section>
  );
};

const CommentBody = function ({
  username,
  content,
  commentTime,
  like,
  dislike,
  id,
  buttonClicked,
  setButtonClicked,
}) {
  return (
    <div className="w-fit bg-gradient-to-tr  from-slate-500 rounded-2xl pt-2 pb-1 px-3 mt-3 text-white  ">
      <CommentInfo
        username={username}
        content={content}
        commentTime={commentTime}
      />
      <CommentLikeDislike
        like={like || 0}
        dislike={dislike || 0}
        id={id}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
    </div>
  );
};
