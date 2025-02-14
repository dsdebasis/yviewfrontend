import Search from "../Videos/Search.jsx";
import Video from "../Videos/Video.jsx";
import { useEffect } from "react";
//importing toast components

import "react-toastify/dist/ReactToastify.css";
import useGetVideos from "../Hooks/UseGetVideos.js";
import Loading from "../Loading/Loading.jsx";
import NavBar from "../Navbar/NavBar.jsx";
import { ThreeDots } from "react-loader-spinner";
import VideoContextProvider from "../../Context/VideoContextProvider.jsx";

const Home = () => {
  const { videoRes, error, setPage, loading } = useGetVideos();
  
  

  const handleScroll = (e) => {
    e.preventDefault();
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 5 &&
      !error
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
  
      window.addEventListener("scroll", handleScroll);
   
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  if (loading) <Loading />;
  return (
    <section className=" w-full min-h-screen  flex flex-col   font-sans pt-2 relative px-4  overflow-hidden">
      <NavBar  />
      <div className="w-full s sticky mt-[12vh] lg:mt-[15vh] top-2 z-10  border-2 border-stone-500 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
        <Search />
      </div>
      { (
        <section className="w-full h-full  grid grid-cols-1 gap-y-6  md:grid-cols-3 sm:grid-cols-2 sm:gap-x-10 md:gap-x-5 lg:grid-cols-3  place-items-center mt-4 text-slate-100 lg:py-5 lg:gap-x-4 lg:gap-y-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 scroll-smooth">
          {videoRes?.map((item) => {
            return (
              <VideoContextProvider key={item?._id + 1} data={item}>
                 <Video id={item?._id}/>
             </VideoContextProvider>
            );
          })}

          {error ? (
            <h1 className="text-yellow-500 ">No More Video Found</h1>
          ) : (
        
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            
          )}
        </section>
      )}
    
    </section>
  );
};

export default Home;
