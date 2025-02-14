import Input from "../Input/Input.jsx";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { videoApi } from "../index.js";
import Loading from "../Loading/Loading.jsx";
import toast, { Toaster } from "react-hot-toast";

const EditVideo = function () {
  let clearTimeIdTitle;
  let clearTimeIdDes;
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const videoId = useLocation().pathname.split("/")[2];
  console.log(videoId);

  const hanldeTitle = function (e) {
    e.preventDefault();
    clearTimeout(clearTimeIdTitle);
    clearTimeIdTitle = setTimeout(() => {
      setTitle(e.target.value);
    }, 900);
  };

  const handleDes = function (e) {
    e.preventDefault();
    clearTimeout(clearTimeIdDes);
    clearTimeIdDes = setTimeout(() => {
      setDes(e.target.value);
    }, 800);
  };

  const handleThumbnail = function (e) {
    e.preventDefault();
    setThumbnail(e.target.files[0]);
  }
  const HandleVideoEdit = function (e) {
    e.preventDefault();

    setLoading(true);
    let formData = new FormData();
    formData.append("thumbnail", thumbnail);
    formData.append("title", title);
    formData.append("description", des);

    axios
      .patch(`${videoApi}/update-videos/${videoId}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log("update video response", res.data.message);
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="h-screen w-full  overflow-hidden box-border  text-white   flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 ">
      {loading ? (
        <Loading title={"Updating Video"} />
      ) : (
        <form
          encType="multipart/form-data"
          method="PATCH"
          className=" mx-5 min-h-[60vh] md:w-[60vw] rounded-2xl  grid grid-flow-row row-auto gap-5  p-5 shadow-2xl border-2 border-stone-600"
          // onSubmit={HandleVideoEdit}
        >
          <header className="text-center text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-violet-200 to-yellow-300 ">
            Edit Your Video
          </header>

          <label id="selectTumbnail">Select Tumbnail</label>
          <Input
            type="file"
            name="selectThumbnail"
            placeholder="upload your thumbanil"
            css=" h-12 border-2  bg-transparent outline-none px-3 p-2 focus:border-blue-600 rounded-md "
            fun={handleThumbnail}
          />

          <label>Video titile</label>
          <Input
            name="videoTitle"
            type="text"
            required={true}
            placeholder="maximum 70 characters allowed"
            css="bg-transparent  border-2 p-2 outline-none focus:border-blue-600 rounded-md overflow-scroll"
            fun={hanldeTitle}
          />

          <label>Video Description</label>
          <textarea
            name="videoDes"
            required={true}
            className="max-h-[300px] min-h-[10vh] outline-none bg-transparent border-2 border-stone-700 px-3 py-2 focus:border-blue-600 rounded-md"
            onChange={handleDes}
          />

          <button
            className=" rounded-md px-3 py-2 bg-blue-700 hover:bg-blue-500"
            type="submit"
            onClick={HandleVideoEdit}
          >
            Edit Video
          </button>
        </form>
      )}

      <Toaster />
    </section>
  );
};

export default EditVideo;
