import React from "react";

const ImageWraper = ({ inputName, handleChange, profile, loading }) => {
  return (
    <div>
      <img
        className="h-[15vh] w-[25vw] lg:h-[35vh]  lg:max-w-[15vw] overflow-hidden  rounded-2xl shadow-2xl "
        src={profile}
        alt="profile"
      />
      <input
        required
        type="file"
        disabled={loading}
        name={inputName}
        onChange={handleChange}
        className="mt-5 outline-none  border-2 rounded-lg px-1 py-2 border-stone-700 lg:max-w-[15vw]"
      />
    </div>
  );
};

export default ImageWraper;
