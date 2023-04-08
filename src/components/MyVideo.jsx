import React from "react";
import Video from "../assets/images/video.png";

const MyVideo = () => {
  return (
    <div className="relative mx-[10px]">
      <img src={Video} alt="" className="w-full" />
      <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[100] w-full">
        <h3 className="playfairtext text-[22px] leading-[30px] sm:text-[38px] sm:leading-[52px] lg:text-[60px] lg:leading-[80px] font-[900] text-[#fff]">
          Reach More Customers
        </h3>
        <button className="px-[6px] py-[12px] sm:px-[13px] sm:py-[24px] lg:px-[32px] lg:py-[20px] text-[6px] leading-[7px] sm:text-[13px] sm:leadimg-[15px] lg:text-[21px] lg:leading-[25px] font-[900] text-[#4BA87D] bg-[#fff] border-none">
          LEARN HOW
        </button>
      </div>
    </div>
  );
};

export default MyVideo;
