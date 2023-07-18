"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./dropdown/index";
import { useRouter } from "next/navigation";

function Navbar({setModalState}) {
  const router = useRouter();
  const [clicked,setClicked] = useState("true");
  return (
    <header className="flex px-4 py-5 sticky top-0 w-full bg-white shadow-lg shadow-gray-200 z-40">
      <nav className="w-full lg:w-[80%] mx-auto flex py-2  justify-between items-center ">
      <div className="log shadow-sm rounded-sm w-fit h-fit px-2 py-1">
        <Image
          src={"/images/imeet.png"}
          width={100}
          height={100}
          alt="imeet logo"
        />
      </div>
    
        <ul className="flex gap-6 items-center ">
          <li>
            <Link href={"/"} className="visited:text-primary-text text-2xl font-normal text-text-secondary">Home</Link>
          </li>
          <li>
            <DropDown children={"Our courses"} />
          </li>
          <li>
            <Link href={"/"} className="text-text-secondary  text-2xl font-normal ">About us</Link>
          </li>
          <li>
             <DropDown children={"Insights"}/>
          </li>
    <button onClick={()=>{setModalState(set=>!set)}} className="bg-primary-text text-white text-xl capitalize font-normal w-fit px-8 py-2 shadow-sm rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"> login</button>       
        </ul>
      </nav>

    </header>
  );
}

export default Navbar;
