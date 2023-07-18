import { useState, useEffect } from 'react';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai";

const link1 = [
  "Home",
  "About Us",
  "Insights",
  "Privacy Policy",
  "Refund Policy",
  "Terms And Conditions",
];
const link2 = [
  "Machine  Learning",
  "Web development",
  "Cyber Security",
  "Data Science",
  "Auto Cad",
  "All courses",
];
// Data object for contact information
const contactInfo = {
  phone: '+91 000000000',
  email: 'imeet.mathura@gmail.com',
  address: 'Mathura, Uttar Pradesh 281001'
};

function Footer() {
  const [contactData, setContactData] = useState({});
  const contactInfo = {
    phone: '123-456-7890',
    email: 'info@example.com',
    address: '123 Main St, City, State'
  };

 


  

  return (
    <footer className="bg-gradient-to-b from-violet-500 via-indigo-700 to-indigo-500  py-8 px-4">
      <div className="w-full lg:w-[80%] mx-auto grid grid-cols-4  gap-10 items-start justify-center">
        <div className="flex flex-col gap-5 py-8 items-start ">
          <div className="logo">
            <Image
              src={"/images/imeet - white 1.png"}
              width={200}
              height={100}
              alt="iMeet Logo"
            />
          </div>
          <div className="first-letter:capitalize  text-white text-[18px] font-normal">
            iMeet provides a wide range of e-learning services under one roof.
          </div>
          <div className=" text-white text-[20px] font-normal">
            Download App
          </div>
          <div className="logo">
            <Image src={"/images/image 18.png"} width={200} height={100} alt="App Logo"/>
          </div>
        </div>
        <div className="flex flex-col gap-12 text-white">
          <h1 className="text-white text-2xl border-b-[1px] w-fit font-bold border-white">Quick Link</h1>
          <div className="flex flex-col gap-4 text-white text-xl ">
            {link1.map((link, i) => {
              return (
                <Link href="/" key={link}>
                  {link}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-12 text-white">
          <h1 className="text-white text-2xl border-b-[1px] capitalize font-bold border-white w-fit">courses</h1>
          <div className="flex flex-col gap-2  text-xl">
            {link2.map((link, i) => {
              return (
                <Link href="/" key={link}>
                  {link}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-12 ">
          <h1  className="text-white text-2xl border-b-[1px] w-fit font-bold px-1 capitalize border-white">contact information</h1>
          <div className="text-xl text-white flex flex-col gap-3">
            <h1>Phone: {contactData.phone || contactInfo.phone}</h1>
            <h1>Email : {contactData.email || contactInfo.email}</h1>
            <h1>Address: {contactData.address || contactInfo.address}</h1>
          </div>
        </div>
      </div>
      <div className="text w-full lg:w-[80%] mx-auto py-4 px-3 flex justify-between items-center">
        <div className=" text-white text-[15px] ">
          iMeet Technology © 2023. All Rights Reserved.
        </div>
        <div className="icon flex gap-6 items-center  text-white">
          <AiFillFacebook   className="text-4xl"  />
          <AiOutlineYoutube className="text-4xl" />
          <AiFillInstagram  className="text-4xl" />
        </div>
      </div>
      <div className="w-full bg-white lg:w-[80%] mx-auto mb-7 my-2 h-[2px]"></div>
    </footer>
  );
}

export default Footer;

