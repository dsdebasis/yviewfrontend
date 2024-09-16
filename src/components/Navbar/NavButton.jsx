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
        navParent: "  ",
        nav: "",
      });
    } else {
      setCss({
        navParent:"z-50   py-2   rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20  border-gray-100     w-[80vw] h-[90vh] lg:w-full lg:bg-black",
        nav: " z-0 ",
      });
    }
  };
  return (
    <section
      className={`m-2    lg:w-[98%]  lg:h-[7vh]   flex flex-col lg:flex-row   gap-x-5  lg:pr-2  absolute z-50  md:px-2  ${css.nav}  `}
    >
      <div className="  ">
       <BsMenuButtonWideFill onClick={handleClick} className="text-yellow-500 lg:text" />
      </div>

      <div
        className={` px-2  overflow-hidden mt-5 lg:h-full   lg:p-0 lg:mt-1   lg:relative lg:self-end  ${css.navParent}`}
      >
        {click ? <Nav /> : <></>}
      </div>
    </section>
  );
}

export default NavButton;
