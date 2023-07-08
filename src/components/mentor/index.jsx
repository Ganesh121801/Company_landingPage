"use client"
import React from 'react'
import Card from "./card/index"
const mentor ={
    name:"krishna",
    role:"Software devloper | Backend devloper ",
    image :"/images/Ellipse 6.png"
}

function index() {
  return (
    <section className='w-full lg:w-[80%] mx-auto my-4 gap-2 py-8 px-4 flex flex-col items-center'>
        <div className=" text-center text-text-secondary text-4xl font-bold">Meet Our Mentors</div>
        <div className=" text-center text-black text-[14px] font-normal py-2">We are ready to assist, advise, encourage and listen as you begin your <br/> <span className='text-center'>professional courses at iMeet.</span></div>
        <div className="grid grid-cols-3 w-full gap-6 px-4 py-4 my-6 place-content-center">
            <Card data={mentor}/>
            <Card data={mentor}/>
            <Card data={mentor}/>
        </div>
    </section>
  )
}

export default index