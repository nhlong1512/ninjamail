import React from "react";
import NewsCard from "./NewsCard";
import { Carousel } from "antd";

const MyPopularNews = () => {
  return (
    <div className="mt-[40px] lg:mt-[80px]">
      <h3 className="playfairtext text-center text-[28px] leading-[48px] lg:text-[44px] lg:leading-[48px] font-[900] mb-[30px] lg:mb-[100px]">
        All the popular news
      </h3>
      <Carousel autoplay autoplaySpeed={2000} className="sm:hidden flex sm:w-0">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Carousel>
      <div className="justify-center items-center sm:gap-[30px] lg:gap-[70px] w-full hidden sm:flex">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default MyPopularNews;
