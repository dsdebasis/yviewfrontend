import Video from "../Videos/Video";
import VideoContextProvider from "../../Context/VideoContextProvider.jsx";
import { ThreeDots } from "react-loader-spinner";
import useGetVideos from "../Hooks/UseGetVideos.js";
import { useEffect } from "react";
import SearchBar from "../Videos/SearchBar.jsx";
const VideoPage = () => {
  const { videoRes, error, setPage, loading } = useGetVideos();
  console.error(error);
  const handleScroll = (e) => {
    e.preventDefault();
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    
       &&
      !error
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <div className="h-auto bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 scroll-smooth">
        <SearchBar />
        <section className="w-full h-full  grid grid-cols-1 gap-y-6  md:grid-cols-3 sm:grid-cols-2 sm:gap-x-10 md:gap-x-5 lg:grid-cols-3  place-items-center mt-4 text-slate-100 lg:py-5 lg:gap-x-4 lg:gap-y-10 ">
          {loading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
             
              wrapperClassName=""
              visible={true}
            />
          ) : (
            videoRes?.map((item) => {
              return (
                <VideoContextProvider key={item?._id + 1} data={item}>
                  <Video id={item?._id} />
                </VideoContextProvider>
              );
            })
          )}

          {error ? (
            <h1 className="text-yellow-500 ">No More Video Found</h1>
          ) : (
            ""
          )}
        </section>
      </div>
    </section>
  );
};

export default VideoPage;
