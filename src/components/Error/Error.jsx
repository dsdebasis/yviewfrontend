import React from "react";

const Error = ({ message, link, linkText }) => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-800 to-slate-950 flex justify-center items-center">
      <span className="text-orange-200">{message}</span>
    </div>
  );
};

export default Error;
