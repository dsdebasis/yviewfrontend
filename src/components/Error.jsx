import { useState } from "react";
import { Link } from "react-router-dom";
const Error = function (props) {

  return (
    <>
      <div className="h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 flex flex-col justify-center items-center">
        <h1 className="text-yellow-400">{props.message}</h1><br></br>

         <Link to={`/${props.link}`} className=" text-cyan-300 hover:text-yellow-50 capitalize ">{props.linkText}</Link>   
      </div>
    </>
  );
};

export {Error}