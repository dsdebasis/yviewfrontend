import React from "react";
import { Link } from 'react-router-dom'
const ProfileNavOpn = ({status,click}) => {
  let routes = [
    "profile",
    "updateprofile",
    "reset-password",
    "updatepassword",
    "channel",
    "deleteaccount",
    "logout",
  ];
  let routesEle = [
    "Profile",
    "Update Profile",
    "Forgot-Password",
    "Update Password",
    "Channel",
    "Delete Account",
    "Logout",
  ];

  if (!status) {
    routesEle = ["login", "signup"];
  }
  return (
    <div className="h-0 mt-5 overflow-hidden box-border">
      <section
        className={` text-base w-[30vw]    inline-flex justify-evenly   lg:max-w-fit  rounded-xl   ease-in px-4 py-3  lg:px-4 lg:py-2  flex-col  items-start    shadow-xl  md:text-base  bg-gray-800 ${
          click
            ? "max-h-[40vh] w-fit sm:w-fit overflow-hidden  block absolute z-10  right-1 "
            : ""
        }`}
      >
        {routes.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/${item}`}
              className="hover:text-yellow-400  capitalize  text-yellow-300 to-yellow-5 bg-clip-text text-transparent py-2"
            >
              {routesEle[index]}
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default ProfileNavOpn;
