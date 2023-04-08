import React from "react";
import BannerImg from "../assets/images/banner.png";

const MyBanner = () => {
  return (
    <div className="sm:mt-[20px] lg:px-[57px] sm:px-[30px] px-[10px] mb-[10px] sm:mb-[60px] lg:mb-[80px]">
      <img src={BannerImg} alt="" className="w-full shadow-lg" />
    </div>
  );
};

export default MyBanner;
