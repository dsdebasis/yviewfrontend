import { Suspense, useState } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileNavOpn from './ProfileNavOpn.jsx';



const ProfileHead = ({ status }) => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <section
      className={`  md:w-[220px]  overflow-hidden box-border  text-white   text-center    `}
    >
      <div className="my-2 h-10 rounded-xl w-12 flex justify-center items-center  ">
        <button
          onClick={handleClick}
          className=" text-slate-200 text-sm md:text-xl hover:text-yellow-400 "
        >
          <CgProfile />{" "}
        </button>
      </div>
      {click ? (
       
          <ProfileNavOpn status={status} click={click} />
     
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProfileHead;
