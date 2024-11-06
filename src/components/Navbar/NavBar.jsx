import React from "react";
import { useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import Nav from "./Nav.jsx";
function NavBar({style}) {
  const [click, setClick] = useState(false);
  const handleClick = function (e) {
    e.preventDefault();
    setClick((prev)=>!prev);
   
  };
  return (
    <nav
      className={`flex  flex-col items-center lg:self-end  overflow-hidden lg:flex-row lg:rounded-lg absolute z-50 box-border ${style}`}
    >
      <div className="w-fit border-2 border-stone-700 rounded-lg p-4 sm:hidden  lg:w-0  h-fit   place-self-start place-content-center ">
        <BsMenuButtonWideFill
          onClick={handleClick}
          className=" text-yellow-500 "
        />
      </div>

      <div className={`h-0 w-0 mt-2 border-2 border-stone-700  rounded-md sm:h-[8vh]  sm:w-[97vw] lg:h-[8vh]   ${click ? " h-fit w-[30vw]  py-4   duration-200 ease-out bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 " :"none"} `}>
        <Nav />
      </div>
    </nav>
  );
}

export default NavBar;
