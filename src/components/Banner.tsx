import React from "react";
import Banner1 from "../assets/Images/Banner1.jpg";

const Banner = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center mt-8 p-3 md:p-4">
      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2.5rem] font-bold">
        آزمون اصلی آیین نامه راهنمایی و رانندگی
      </h1>
      <img src={Banner1} alt="Banner1" className="mt-5 object-cover" />
    </div>
  );
};

export default Banner;
