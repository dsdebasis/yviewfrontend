import NavBar from "../Navbar/NavBar.jsx";
import videoSample from "../../../src/assets/videoSample.png";
import Faqs from "../Faqs/Faqs.jsx";
function Content() {
  let faqs = {
    "What is yview ?":
      "Ans : y view is a video sharing platform. Means you can upload your videos and share it with others. logged in users can like the video, comment the video, and oviouseley share the link to others.",
      "How can i login?":"Ans: You can login by going to login page and enter the username and password.",
       "How can i open a account ?":"Ans: You can open a account by going to signup page and enter the username and password , email and you will recieve an confirmation email. Then you can create an account",
      "What if i forgot my password?":"Ans: You can reset your password by going to forgot password page and enter the email address associated with your account. You will receive an email with a link to reset your password.",
    "How can someone upload a videos?":
      "Ans : First you need an account to login if not create one. Then you can crate a channel named it and add channel details, profile pictire. Then upload the video.",
    "   Is there any size limit while uplaoding a video?":
      "Yes : Their is a  limit of 100MB per video.",
    "Can i edit a uploaded video? if something goes wrong.":
      "Yes : You can edit the video title, description, thumbnail.",
    "Can i delete a uploaded video? if something goes wrong.":
      "Yes : You can delete the video.",
    "how can i track my uploaded video?":
      "Ans : You can track your uploaded video by going to your channel page.Where you can see nice dashboard, showcasing all of your uploaded videos. The number of subscribers , total views , comments , likes and much more.",
    "Can i delete my entire Channel if something goes wrong?":
      "Yes : You can delete your entire channel. By visiting to delete channel page.Deleting your accout will delete all of your uploaded vides and activity.",

  };
  return (
    <section className="min-h-screen  max-w-screen box-border  font-sans px-4 text-yellow-400">
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

      <div className="mt-[10vh] ">
        <h1 className=" text-2xl px-[10vw]">
          Most Asked Freaquentley Asked questions. ?FAQs
        </h1>

        <div className="my-[5vh]">
        {
          Object.keys(faqs).map((key)=>{
            return (
              <Faqs key={key} ques={key} ans={faqs[key]}/>
            )
          })
        }
        </div>
      </div>
    </section>
  );
}

export default Content;
