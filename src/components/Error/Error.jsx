import React from "react";
import { Link } from "react-router-dom";

const Error = ({ message, link, linkText }) => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-800 to-slate-950 ">
      <h1 className="text-orange-200 capitalize">{"message"}</h1>
      <Link to={`/${link}`} className="text-cyan-400 hover:text-yellow-50">Click</Link>
    </div>
  );
};

export default Error;
