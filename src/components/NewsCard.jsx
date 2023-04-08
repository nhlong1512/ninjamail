import React from "react";
import { Card } from "antd";
import NewsCardImg from "../assets/images/newscard.png";
const { Meta } = Card;

const NewsCard = () => {
  return (
    <div className="flex justify-center items-center">
      <Card
        hoverable
        className="lg:w-[320px] sm:w-[210px] w-[320px]"
        cover={
          <div className="lg:pb-[20px]">
            <img alt="example" src={NewsCardImg} className="lg:w-[320px] sm:w-[210px] w-[320px]" />
          </div>
        }
      >
        <div className="flex flex-col text-left">
          <p className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-[20px] font-[500] m-0">
            Launch campaigns but also find new customers. Our unique platform
            handles campaigns from start to end.
          </p>
          <p className="mt-[10px] lg:mt-[20px] text-[#4BA87D] text-[12px] leading-[16px] lg:text-[16px] lg:leading-[20px] font-[800]">
            {`Learn More >`}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default NewsCard;
