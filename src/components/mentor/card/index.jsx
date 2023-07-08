import React from 'react'
import Image from 'next/image'
import {AiFillLinkedin} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import { BsWhatsapp } from 'react-icons/bs'

function index({data}) {
  return (
    <div className='flex flex-col gap-4 w-full  px-4 py-8 shadow-md items-center rounded-lg shadow-gray-300 '>
       <div className="image w-full flex justify-center">
        <Image src={data.image} width={200} height={300} className='object-cover'></Image>
       </div>
       <h1 className='text-5xl text-primary-text font-[400]'>{data.name}</h1>
       <h2 className='font-serif capitalize'>{data.role}</h2>
       <div className="social profile flex w-fit gap-4 items-center text-xl">
        <AiFillLinkedin className='text-xl'/>
        <BsInstagram/>
        <BsWhatsapp/>
       </div>
   
    </div>
  )
}

export default index