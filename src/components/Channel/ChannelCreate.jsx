import Input from "../Input/Input.jsx";
import Loading from "../Loading/Loading.jsx";
import { Toaster } from "react-hot-toast";
import CreateChannel from "../Hooks/CreateChannel.js";

const ChannelCreate = () => {


  const {
    handleSubmit,
    loading,
    handleChange,
    channel,
    setChannel,
    profilePic,
    setProfilePic,
  } = CreateChannel();
  return (
    <section className="h-screen w-screen   bg-gradient-to-br from-slate-500 to-gray-900 flex flex-col justify-center items-center px-6">
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="min-h-[80vh] w-full border-2  rounded-2xl px-5 xl:w-[40vw] flex flex-col  gap-y-10  shadow-2xl py-2 text-white"
        >
          <header className="text-center xl:text-lg">
            Create Your Channel
          </header>

          <div>
            <label htmlFor="channelName">Channel Name</label>
            <Input
              name={"channelName"}
              type="text"
              required={true}
              placeholder={"channel name"}
              disabled={loading}
              fun={handleChange}
            />
          </div>

          <div className="w-full flex flex-col ">
            <label htmlFor="about">Channel Description</label>
            <textarea
              name="about"
              className="bg-transparent outline-none border-2 max-h-[30vh] p-1 mt-4"
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="profilePic">Channel Pic</label>
            <Input
              name={"profilePic"}
              type={"file"}
              required={true}
              css={"p-2 h-12"}
              disabled={loading}
              fun={(e) => {
                setProfilePic(e.target.files[0]);
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-slate-950 "
          >
            Create Channel
          </button>
        </form>
      )}

      <Toaster />
    </section>
  );
};

export default ChannelCreate;
