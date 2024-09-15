import React from "react";
import Nav from "../Navbar/Nav.jsx";
import { BsMenuButtonWideFill } from "react-icons/bs";
import NavButton from "../Navbar/NavButton.jsx";
function Content() {
  return (
    <section className="min-h-screen px-2  box-border bg-gradient-to-r from-slate-900 to-slate-700 font-sans pt-2">
      
      <NavButton/>
      <div className="mt-20 text-white p-2  lg:p-4 lg:pl-16">
        <h1 className="lg:text-5xl mt-4 text-cyan-400">Wellcome to yview.</h1>
        <p className="lg:text-2xl text-green-400 lg:max-w-[40vw] text-justify lg:mt-10  p-4   border-none">
          Where ideas becomes a journey. Every Idea becomes unsuccessfull until
          it gets into ground. That's why i built this yview.<br></br>{" "}
          <span className="font-semibold text-white ">
            A Video Sharing Platform.
          </span>
        </p>

        <h1 className="text-yellow-200 lg:text-3xl mt-10">What is yview ?</h1>
        <p className="lg:text-xl  lg:max-w-[40vw] mt-5 text-cyan-200 font-extralight pl-10 text-justify">
          It is video content sharing site for creaters, Similar to{" "}
          <span className="font-mono text-red-500 mx-3 ">YouTube. </span>
          What does it mean ? Like youtube Where users can directly watch any
          videos without login. Users can like the video ,comment the video, and
          Oviouseley share the link to others .
        </p>
      </div>
    </section>
  );
}

export default Content;
