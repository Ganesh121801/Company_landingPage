"use client";
import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
function Hero() {
  return (
    <section className="hero flex   bg-white w-full lg:w-[80%] mx-auto  py-4  gap-3 place-content-center my-10">
      <div className="right flex flex-col w-[100%] items-center justify-center px-4 gap-6">
        <div className="LearnInDemandSkillsOnYourSchedule  text-black text-[53px] font-semibold">
          Learn In-Demand Skills on Your Schedule
        </div>
        <div className=" h-14 text-black text-[20px] font-medium">
          Meet top industry professionals and learn the skills you need to get
          ahead in your career with iMeet.
        </div>
        <div className="button flex gap-6 w-full py-2 ">
          <button className="TrendingCourses w-fit px-5 py-2 rounded-md bg-primary-text  text-white text-[23px] font-normal">
            Trending Courses
          </button>
          <div className="TalkToUs w-fit  border-[2px] border-primary-text px-5 py-1 rounded-md text-indigo-500 text-[23px] font-normal">
            Talk to us
          </div>
        </div>
        <div className="flex self-start py-2 gap-5">
          <span className="flex">
            <AiFillStar className="text-orange-400 text-xl" />{" "}
            <AiFillStar className="text-orange-400 text-xl" />{" "}
            <AiFillStar className="text-orange-400 text-xl" />{" "}
            <AiFillStar className="text-orange-400 text-xl" />{" "}
            <AiFillStar className="text-orange-400 text-xl" />
          </span>
          <span>Rated 4.9/5 from over 600 reviews.</span>
        </div>
      </div>
      <div className="left  px-4 py-4 w-[50%]">
        <Image
       
        
          src={"/images/image 1.png"}
          height={1000}
          width={1000}
          alt="student image"
          className="object-cover"
        ></Image>
      </div>
    </section>
  );
}

export default Hero;
