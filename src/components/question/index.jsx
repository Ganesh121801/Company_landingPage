"use client";
import React from 'react'

function index() {
  return (
   <section className='my-4 flex flex-col gap-5 py-8 px-4 items-center justify-center'>
    <div className=" text-center text-neutral-700 text-[31px] font-bold">Still Have a Doubt?</div>
    <div className=" text-center text-black text-[15px] font-normal">Get in touch with us anytime if you have any questions or concerns.</div>
    <div className='flex gap-6 '>
    <div className=" text-white text-[20px] font-normal w-fit px-8 py-2 bg-indigo-500 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">Trending Course</div>
    <div className=" text-primary-text text-[20px] w-fit px-5 py-2 font-normal rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border-[2px] border-indigo-500">Talk to us</div>
    </div>
   </section>
  )
}

export default index