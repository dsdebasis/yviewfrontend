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
        nav: "  ",
        navParent: "absolute ",
      });
    } else {
      setCss({
        nav:"z-50 border-2 rounded-lg border-stone-400 py-2 bg-gradient-to-br from-slate-600 to-slate-900",
        navParent: " z-0 ",
      });
    }
  };
  return (
    <section
      className={`m-2 h-auto  w-[95%] lg:w-[98%]  lg:h-[7vh]   flex flex-col lg:flex-row  justify-center items-center gap-x-5  lg:pr-2  absolute z-50  md:px-2  ${css.nav}`}
    >
      <div className=" lg:m-0 lg:w-5 place-self-center ">
       <BsMenuButtonWideFill onClick={handleClick} className="text-yellow-500 lg:text" />
      </div>

      <div
        className={`w-full  overflow-hidden mt-5 lg:h-full   lg:p-0 lg:mt-1   lg:relative lg:self-end  ${css.navParent}`}
      >
        {click ? <Nav /> : <></>}
      </div>
    </section>
  );
}

export default NavButton;
