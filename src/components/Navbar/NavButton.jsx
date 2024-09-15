import React from "react";
import { useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import Nav from "./Nav";
function NavButton() {
  const [click, setClick] = useState(false);
  const [css, setCss] = useState({});
  const handleClick = function (e) {
    e.preventDefault();
    setClick(!click);
    if (click == true) {
      setCss({
        nav: " ",
        navParent: "absolute ",
      });
    } else {
      setCss({
        nav:"z-50",
        navParent: " z-0 ",
      });
    }
  };
  return (
    <section
      className={`m-2 h-auto  w-[90%] lg:w-[98%]  lg:h-[10vh]   flex flex-col lg:flex-row  justify-center items-center gap-x-5  lg:pr-2  absolute z-50  rounded-md  ${css.nav}`}
    >
      <div className=" lg:m-0 lg:w-5 place-self-center ">
       <BsMenuButtonWideFill onClick={handleClick} className="text-yellow-500 lg:text" />
      </div>

      <div
        className={`w-full  overflow-hidden mt-5 lg:h-full   lg:p-0 lg:mt-1   lg:relative lg:self-end ${css.navParent}`}
      >
        {click ? <Nav /> : <></>}
      </div>
    </section>
  );
}

export default NavButton;
