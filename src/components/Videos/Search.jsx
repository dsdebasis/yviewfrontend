

import {  useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import toggleProfileMenu from "../Hooks/ToggleProfileMenu.js";
import ProfileNavOpn from "../Profile/ProfileNavOpn.jsx";
import SearchInput from "./SearchInput.jsx";


const Search = () => {
  let authStatus = useSelector((state) => state.auth.status);
  let {click,handleClick} = toggleProfileMenu(); 
  return (
    <section className="w-full  rounded-lg  flex  gap-y-4 flex-row md:flex-row md:justify-between relative">
    

      <div className="my-2 h-10 rounded-xl w-12 flex justify-center items-center">
        <button
          onClick={handleClick}
          className=" text-slate-200 text-sm md:text-xl hover:text-yellow-400 "
        ><CgProfile />{" "}</button>
      </div>
      <SearchInput/>
      <div >
       {click &&  <ProfileNavOpn status={authStatus} click={click}/>}
      </div>
    </section>
  );
};

export default Search;
