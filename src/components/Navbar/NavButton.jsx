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
      className={`mt-2 h-auto  w-[90%] lg:w-[98%] mx-4 lg:h-[10vh]   flex flex-col lg:flex-row  justify-center items-center gap-x-5  lg:p-2  absolute z-50  rounded-md  ${css.nav}`}
    >
      <div className="lg:w-5 place-self-start">
       <BsMenuButtonWideFill onClick={handleClick} className="text-yellow-500" />
      </div>

      <div
        className={`w-full   rounded-md lg:h-full   lg:p-0 lg:mt-1   ${css.navParent}lg:relative lg:self-end`}
      >
        {click ? <Nav /> : <></>}
      </div>
    </section>
  );
}

export default NavButton;
