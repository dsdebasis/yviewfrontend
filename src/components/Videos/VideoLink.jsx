import React from "react";

function VideoLink({ link, vid, thumbnail, duration }) {
  // console.log(duration)
  return (
    <div className="w-full h-full box-border relative  ">
      <img
        src={
          thumbnail ||
          "https://images.pexels.com/photos/5989139/pexels-photo-5989139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        className="w-full h-full rounded-2xl object-cover  "
      
      ></img>

      <span className="rounded-md absolute r-0 bottom-2 right-1 min-w-8 px-1 text-xs bg-black text-center">
        {Math.round(duration) + "s"}
      </span>
    </div>
  );
}

export default VideoLink;
