import React, { useState } from 'react';
import Link from 'next/link';
import {AiOutlineDown} from "react-icons/ai"
const Navbar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
        <button className='flex space-x-2 justify-center items-center gap-2 text-2xl text-text-secondary first-letter:capitalize' onClick={toggleDropdown}>{children} </button>
        <div className={` flex-col px-2 gap-3 text-black transition-all duration-200 absolute bg-white rounded-sm shadow shadow-gray-200  w-full justify-center items-center py-8 my-2 text-xl  ${isOpen? "flex":"hidden"}`} >
            <Link href={"/"} className='w-full  py-2 text-white text-center bg-primary-text rounded-sm hover:bg-indigo-400'>Home</Link>
            <Link href={"/"} className='w-full  py-2 text-white text-center bg-primary-text rounded-sm hover:bg-indigo-400'>About</Link>
            <Link href={"/"} className='w-full  py-2 text-white text-center bg-primary-text rounded-sm hover:bg-indigo-400'>contact</Link>
        </div>
    </div>
  );
};

export default Navbar;
