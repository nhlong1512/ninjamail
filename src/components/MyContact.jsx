import React from "react";
import { Input } from "antd";

const MyContact = () => {
  return (
    <div className="mt-[30px] lg:mt-[40px] w-full ">
      <h3 className="playfairtext text-[26px] leading-[36px] lg:text-[44px] lg:leading-[48px] font-[900] mb-[30px] lg:mb-[100px] lg:px-[320px] mx-[10px]">
        Learn how others are reaching their audience easier than ever before.
      </h3>
      <div className="mt-[30px] flex mb-[20px] flex-col justify-center">
        <div className="flex justify-center items-center flex-col sm:flex-row px-[47px] sm:px-[20px]">
          <input
            type="text"
            class="bg-gray-50 border border-[#9F9F9F] text-sm rounded-[4px] block py-[9px] w-full sm:w-[400px] px-[20px] placeholder-black"
            placeholder="Enter your email"
          />
          <p className="text-[#4BA87D] text-[14px] leading-[18px] font-[400] text-center sm:hidden">
            Thanks! Email received.
          </p>
          <button className="px-[20px] py-[10px] bg-[#4BA87D] text-[13px] leading-[17px] sm:text-[17px] sm:leading-[20px] font-[800] border-none text-[#fff] sm:ml-[24px]">
            JOIN OUR LIST
          </button>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row px-[47px] sm:px-[20px] mb-[-30px] sm:mb-0">
          <p className="text-[#4BA87D] text-[21px] leading-[25px] font-[400] hidden sm:flex sm:px-[60px] lg:px-[100px]">
          Thanks! Email received.
        </p>
          <button className="px-[20px] py-[10px] bg-[#4BA87D] text-[13px] leading-[17px] sm:text-[17px] sm:leading-[20px] font-[800] border-none text-[#fff] sm:ml-[24px] bg-transparent">
            JOIN OUR LIST
          </button>
          <button className="bg-[#4BA87D] text-[13px] leading-[17px] sm:text-[17px] sm:leading-[20px] font-[800] border-none text-[#fff] sm:ml-[24px] bg-transparent">
            JOIN OUR LIST
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default MyContact;
