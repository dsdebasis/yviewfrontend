
import NavBar from "../Navbar/NavBar.jsx";
import VideoPage from "../VideoPage/VideoPage.jsx";
// import SearchBar from "../Videos/SearchBar.jsx";
const Home = () => {
  return (
    <section className=" w-full min-h-screen  flex flex-col   font-sans pt-2 relative px-4  overflow-hidden ">
      <NavBar />
      {/* <SearchBar/> */}
      <VideoPage/>  
    </section>
  );
};

export default Home;
