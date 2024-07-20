import React from "react";
import Vplay from "../VideoPlayer/Vplay.jsx";
import Vplay2 from "../VideoPlayer/Vplay2.jsx";
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
        onClick={function (vid) {
          localStorage.setItem("link", link);
          localStorage.setItem("vId", vid);
          //  { <Vplay2/>}
        }}
      ></img>

      <span className="rounded-md absolute r-0 bottom-2 right-1 min-w-8 px-1 text-xs bg-black text-center">
        {Math.round(duration) + "s"}
      </span>
    </div>
  );
}

export default VideoLink;
