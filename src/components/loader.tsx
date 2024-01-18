import React from "react";

const Loader = () => {
  return (
    <div className=" w-[24px] h-[24px] flex items-center justify-center">
      <div className=" w-full h-full rounded-[50%] border-[1px] border-[#fff] border-dotted animate-spin"></div>
    </div>
  );
};

export default Loader;
