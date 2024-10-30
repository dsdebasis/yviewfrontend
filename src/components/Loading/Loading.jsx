import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
const Loading = ({ title }) => {
  return (
    <section className="h-[97vh] max-w-full flex justify-center items-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  );
};

export default Loading;
