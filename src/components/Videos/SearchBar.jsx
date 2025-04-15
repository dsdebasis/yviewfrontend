
import Search from "./Search.jsx";
const SearchBar = () => {
  return (
    <div className="w-full s sticky mt-[12vh] lg:mt-[15vh] top-2 z-10  border-2 border-stone-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
      <Search />
     
    </div>
  );
};

export default SearchBar;
