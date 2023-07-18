import React from 'react'
import Image from 'next/image'
import {AiOutlineRight} from "react-icons/ai"
function index({data}) {
  return (
    <div className='w-full flex flex-col px-4 py-5 shadow-md roudne-md gap-3 justify-center items-start'>
         <h2 className='text-right  text-[18px] font-bold text-text-secondary capitalize'>{data.Branch}</h2>
          <h2 className='text-xl text-primary-text font-bold capitalize'>{data.course}</h2>
          <div className='w-full '>
            <Image src={data.image} width={310} height={200} className='object-cover' alt='data'/>
          </div>
          <p className='text-text-secondary text-[14px] font-semibold px-2 py-3'>
            {data.text}
          </p>
          <button className='flex gap-2 items-center w-fit mx-auto text-primary-text text-xl font-bold py-4'>{data.readmore} <AiOutlineRight/></button>
    </div>
  )
}

export default index