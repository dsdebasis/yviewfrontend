import React from "react";
import NavBar from "../Navbar/NavBar.jsx";
import videoSample from "../../../src/assets/videoSample.png";
function Content() {
  return (
    <section className="min-h-screen  max-w-screen box-border  font-sans px-4 ">
      <NavBar />

      <main className="h-full w-[95%] pt-[10vh] text-white p-2 lg:px-[10vw]  ">
        <h1 className="lg:text-5xl mt-4 text-cyan-400">Wellcome to yview.</h1>
        <p className="lg:text-2xl text-green-400 lg:max-w-[40vw] text-justify lg:mt-10  p-4   border-none ">
          Where ideas becomes a journey. Every Idea becomes unsuccessfull until
          it gets into ground. That's why i built this yview. <br></br>
          <br></br>
        </p>
        <h1 className="font-semibold text-white ">A Video Sharing Platform.</h1>
        <div className="flex justify-center items-center my-[5vh]">
          <img
            src={`${videoSample}`}
            className="max-w-[80vw] lg:max-h-[80vh] lg:max-w-4xl  lg:w-2xl p-5 lg:p-0 rounded-2xl hover:scale-110 duration-150 transition-all delay-100"
            alt="sample image "
          ></img>
        </div>
        <h1 className="text-yellow-200 lg:text-3xl mt-10">What is yview ?</h1>
        <p className="lg:text-xl  lg:max-w-[40vw] mt-5 text-cyan-200 font-extralight pl-10 text-justify">
          It is video content sharing site for creaters, Similar to{" "}
          <span className="font-mono text-red-500 mx-3 ">YouTube. </span>
          What does it mean ? Like youtube Where users can directly watch any
          videos without login. Users can like the video ,comment the video, and
          Oviouseley share the link to others .
        </p>
      </main>

      <div>
        <h1>Most Asked Freaquentley Asked questions ?.(FAQs)</h1>

        <div>
          <h2>What is yview ?</h2>
          <p>Ans : y view is a video sharing platform. Means you can upload your videos and share it with others. logged in users can like the video, comment the video, and oviouseley share the link to others.</p>

          <h2>How can someone upload a videos?</h2>
          <p>Ans : First you need an account to login if not create one. Then you can crate a channel named it and add channel details, profile pictire. Then upload the video.</p>

          <h2>Is there any size limit while uplaoding a video?</h2>
          <p>Yes : Their is a  limit of 100MB per video. </p>

          <h2>Can i edit a uploaded video? if something goes wrong.</p>
          <p>Yes : You can edit the video title, description, thumbnail.</p>

          <h2>Can i delete a uploaded video? if something goes wrong.</h2>
          <p>Yes : You can delete the video.</p>

          <h2>how can i track my uploaded video?</h2>
          <p>Ans : You can track your uploaded video by going to your channel page.Where you can see nice dashboard, showcasing all of your uploaded videos. The number of subscribers , total views , comments , likes and much more.</p>

          <h2>How can i comment on a video?</h2>
          <p>Ans : You can comment on a video by going to the video page. Then you can comment on the video.</p>

          <h2> Can i delete my entire Channel if something goes wrong?</h2>
          <p>Yes : You can delete your entire channel. By visiting to delete channel page.
            Deleting your accout will delete all of your uploaded vides and activity.
          </p>



        </div>
      </div>
    </section>
  );
}

export default Content;
