import React from 'react'
import Card from "./card/index"
const data ={
    Branch :"computer science",
    course :"Data science",
    image :"/images/image 9.png",
    text:"This course will help you learn how to use data and statistical models to make predictions, communicate your findings with a broad range of audiences."
   , readmore :"Read more"
}

function index() {
  return (
    <section  className='flex flex-col py-8 my-4 w-full lg:w-[80%] mx-auto px-3 gap-6 '>
          <div className=" text-center text-text-secondary text-[36px] font-bold">Top Featured Courses</div>
          <div className=" h-7 text-center text-black text-[16px] font-semibold">Choose courses taught by real-world experts.</div>
          <div className='grid grid-cols-4 gap-8 px-4 py-4'>
            <Card data={data}/>
            <Card data={data}/>
            <Card data={data}/>
            <Card data={data}/>
          </div>
    </section>
  )
}

export default index