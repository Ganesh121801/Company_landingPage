"use client"
import React from 'react'
import Image from 'next/image'
function index() {
  return (
    <section className='w-full flex flex-col gap-6 py-8 my-4 '>
        <div className='flex w-full lg:w-[80%] mx-auto gap-5 justify-evenly px-4 py-5'>
            <div className="certification flex flex-col gap-10 justify-center items-center">
            <div className=" text-center text-neutral-700 text-[31px] font-bold">Official Certification Partners</div>
                <div className="img flex gap-4">
                    <Image src={"/images/image 10.png"} width={100} height={100}></Image>
                    <Image src={"/images/image 11.png"} width={100} height={100}></Image>
                    <Image src={"/images/image 12.png"} width={100} height={100}></Image>
                </div>
            </div>
                  <div className='w-[1px] bg-gray-600 h-[300px]'> </div>
            <div className="startup flex flex-col justify-center items-end gap-10">
            <div className=" text-center text-neutral-700 text-[31px] font-bold">Our Startups and Corporate Network</div>
            <div className="img flex gap-4 items-center">
                    <Image src={"/images/image 13.png"} width={130} height={100}></Image>
                    <Image src={"/images/image 14.png"} width={130} height={100}></Image>
                    <Image src={"/images/image 15.png"} width={130} height={100}></Image>
                </div>
            </div>
        </div>
        <div className='w-full bg-primary-text relative px-3 py-8 my-4'>
             <div className='flex justify-between w-full lg:w-[80%] mx-auto py-4' >
                <div className="text flex flex-col justify-center items-start gap-6">
                <div className="  text-center text-white text-[38px] font-semibold">Connecting Learning To Life</div>
                <div className="button flex gap-6">
                    <button className=' bg-orange-400 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl w-fit py-2 px-5 text-white  text-xl '>Trending course</button>
                    <button className='rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border-[2px] w-fit  px-5 py-2 text-white border-orange-400"'>Talk to us</button>
                </div>
                </div>
                <div className="image w-[400px] absolute bottom-0 right-0">
                <Image src={"/images/image 17.png"} width={1000} height={200} className='object-cover'></Image>

                </div>
             </div>
        </div>
    </section>

  )
}

export default index