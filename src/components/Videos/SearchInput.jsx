import React from "react";

const SearchInput = () => {
  return (
    <div className="h-[10%]  max-w-[60%] my-2  ml-14 md:flex md:justify-center">
      <input
        type="text"
        placeholder="search your videos "
        className="h-full w-full md:w-[30vw] outline-none  p-2 bg-transparent  border-2  border-stone-600 rounded-md focus:border-yellow-400  text-white"
      />
    </div>
  );
};

export default SearchInput;
