import { Link } from "react-router-dom";
const ProfileNavOpn = ({ status, click }) => {
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
    <div className="h-auto max-w-fit bg-black mt-5  block absolute z-90 top-10 right-1 md:left-[5vw]  rounded-lg">
      <section
        className={`h-full text-yellow-300  inline-flex justify-evenly     rounded-xl   ease-in px-4   flex-col  items-start gap-y-4 py-2  md:py-3`}
      >
        {routes.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/${item}`}
              className="hover:text-stone-500 capitalize  to-yellow-5 "
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
