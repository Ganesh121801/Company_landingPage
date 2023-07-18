import React from 'react'
import Image from 'next/image'
function index({data}) {
  return (
    <div className='flex flex-col gap-4 w-full px-1 py-2 shadow-md  rounded-md shadow-purple-300 '>
       <div className="image w-full">
        <Image src={data.image} width={300} height={300} className='object-cover' alt='image-course'></Image>
       </div>
     <div className='flex w-full px-3 flex-col gap-3'>
     <div className='w-fit bg-primary-text text-white text-xl font-normal px-4 py-1 first-letter:capitalize'>{data.Branch}</div>
       <div className='text-primary-text text-xl font-normal'>{data.CourseTitle}</div>
       <div className='text-text-secondary '><span className='font-bold'>{data.duration}</span> <span className='font-lights capitalize'>course</span></div>
       <button className='py-2 w-fit px-3 text-orange-500 font-semibold text-xl first-letter:capitalize'>{data.knowMore}</button>
     </div>
    </div>
  )
}

export default index