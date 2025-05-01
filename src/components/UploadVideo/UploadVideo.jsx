import { useState } from "react";

import { backendUrl } from "../index.js";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";

import Input from "../Input/Input.jsx";
import { Toaster, toast } from "react-hot-toast";
function UploadVideo() {
  const [selectVideo, setSelectVideo] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  let clearTimeId;
  function handleUploadVideo(e) {
    e.preventDefault();
    setLoading(() => true);
    let formData = new FormData();
    formData.append("video", selectVideo);
    formData.append("videoTitle", title);
    formData.append("videoDes", description);
    formData.append("thumbnail", thumbnail);
    axios
      .post(`${backendUrl}/uploadvideo`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("uplaod response from server", res);
        toast.success("file uplaoded successfully");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
        setDescription("");
        setTitle("");
        setSelectVideo("");
        setThumbnail("");
      });
  }

  return (
    <section className="h-screen w-full  overflow-hidden box-border  text-white   flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 ">
      {loading ? (
        <Loading />
      ) : (
        <form
          encType="multipart/form-data"
          method="POST"
          className=" mx-5 min-h-[60vh] md:w-[60vw] rounded-2xl  grid grid-flow-row row-auto gap-5  p-5 shadow-2xl border-2 border-stone-600"
        >
          <header className="text-center text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-violet-200 to-yellow-300 ">
            Upload Your Video
          </header>

          <label id="selectVideo">Upload video</label>
          <Input
            type="file"
            name="video"
            required={"true"}
            placeholder="upload your video"
            css="h-12 border-2  bg-transparent outline-none p-2 focus:border-blue-600 rounded-md "
            fun={(e) => {
              e.preventDefault();
              setSelectVideo(e.target.files[0]);
            }}
          />

          <label id="selectTumbnail">Select Tumbnail</label>
          <Input
            type="file"
            name="selectVideo"
            placeholder="upload your video"
            css=" h-12 border-2  bg-transparent outline-none px-3 p-2 focus:border-blue-600 rounded-md "
            fun={(e) => {
              setThumbnail(e.target.files[0]);
            }}
          />

          <label>Video titile</label>
          <Input
            name="videoTitle"
            type="text"
            required={true}
            placeholder="maximum 70 characters allowed"
            css="bg-transparent  border-2 p-2 outline-none focus:border-blue-600 rounded-md overflow-scroll"
            fun={(e) => {
              e.preventDefault();
              clearTimeout(clearTimeId);
              clearTimeId = setTimeout(() => {
                setTitle(e.target.value);
              }, 500);
            }}
          />

          <label>Video Description</label>
          <textarea
            name="videoDes"
            required={true}
            className="max-h-[300px] min-h-[10vh] outline-none bg-transparent border-2 border-stone-700 px-3 py-2 focus:border-blue-600 rounded-md"
            onChange={(e) => {
              e.preventDefault();

              clearTimeout(clearTimeId);
              clearTimeId = setTimeout(() => {
                setDescription(e.target.value);
              }, 800);
            }}
          />

          <button
            className=" rounded-md px-3 py-2 bg-blue-700 hover:bg-blue-500"
            onClick={handleUploadVideo}
          >
            Upload
          </button>
        </form>
      )}
      <Toaster />
    </section>
  );
}

export default UploadVideo;
