import NavBar from "../Navbar/NavBar.jsx";
import VideoPage from "../VideoPage/VideoPage.jsx";
// import SearchBar from "../Videos/SearchBar.jsx";
const Home = () => {
  return (
    <section className=" w-full min-h-screen    font-sans pt-2 relative  overflow-hidden px-4">
      <div className="">
        <NavBar />
      </div>
      {/* <SearchBar/> */}
      <VideoPage />
    </section>
  );
};

export default Home;
