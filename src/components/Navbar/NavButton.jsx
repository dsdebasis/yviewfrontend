import React from "react";
import { useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import Nav from "./Nav";
function NavButton() {
  const [click, setClick] = useState(false);
  const [height, setHight] = useState("");
  const handleClick = function (e) {
    e.preventDefault();
    setClick(!click);
    //    setHight("h-fit")
  };
  return (
    <section className={`h-fit lg:h-[12vh] w-full p-2  ${height} absolute `}>
      <div className="h-full w-full  box-border text-yellow-500  rounded-md flex flex-col lg:flex-row justify-center items-center gap-x-5 lg:p-2  ">

        <div className="h-5 my-1 lg:h-full w-[6%]  bg-gradient-to-r rounded-md flex justify-center items-center ">
          <BsMenuButtonWideFill onClick={handleClick}  />
        </div>
        <div className= "h-[90vh] w-[90%] rounded-2xl lg:h-full   lg:p-0 lg:mt-1 overflow-hidden z-50 ">
          {click ? <Nav /> : <></>}
        </div>
      </div>
    </section>
  );
}

export default NavButton;
