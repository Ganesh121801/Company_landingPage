"use client"
import React from 'react'
import Image from "next/image"

function index() {
  return (
    <section className='w-full lg:w-[80%] my-4 py-8 px-3 flex flex-col gap-5 mx-auto'>
        <h1 className='text-3xl text-text-secondary text-center text-[36px] font-bold'>How it Work</h1>
        <div className='w-full flex justify-center items-center '>
            <Image src={"/images/image 8.png"} width={986} height={493} className='object-contain' alt='images'></Image>
        </div>
    </section>
  )
}

export default index