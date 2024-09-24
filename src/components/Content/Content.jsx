import React from "react";
import NavBar from "../Navbar/NavBar.jsx";
function Content() {
  return (
    <section className="min-h-screen  w-screen box-border  font-sans px-4">
      <NavBar />
      
      <div className="h-full w-[95vw] pt-[10vh] text-white p-2  ">
        <h1 className="lg:text-5xl mt-4 text-cyan-400">Wellcome to yview.</h1>
        <p className="lg:text-2xl text-green-400 lg:max-w-[40vw] text-justify lg:mt-10  p-4   border-none">
          Where ideas becomes a journey. Every Idea becomes unsuccessfull until
          it gets into ground. That's why i built this yview. <br></br>
          <br></br>
        </p>
          <h1 className="font-semibold text-white ">
            A Video Sharing Platform.
          </h1>
        {/* <img src={videoSample} className="max-w-[300px] " alt="sample image "></img> */}
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
