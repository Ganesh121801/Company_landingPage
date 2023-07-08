"use client"
import React, { useState } from 'react'
import {filterBranch,dummyData } from './dummyData'
import Card from "./card/index"
import Filter from "./filter/index"

function index() {
    const [filterData,setFilter] =useState("computer science")
    // console.log(filterBranch)
  return (
    <section className='w-full py-8 px-4 bg-[#FAFAFE] flex flex-col items-center gap-6  '>
      <div className='flex w-full my-4 lg:w-[80%] mx-auto py-2 px-2 flex-col gap-6 font-normal justify-center items-center'>
         <h1 className='font-normal text-4xl font-serif text-text-secondary'>Trending Courses</h1>
         <h2 className='text-xl font-normal'>Choose from 100+ courses with new additions published every month</h2>
      </div>
      <div className='flex gap-5 w-full lg:w-[80%] mx-auto px-4 py-10 items-center '>
        <Filter filterBranch={filterBranch} setFilter={setFilter} dummyData={dummyData}/>
        <div className='w-[70%] grid grid-cols-3 gap-4'>
            {dummyData.map(
                (dummyData,i)=>{
                  if( filterData==dummyData.Branch){
                    
                    return <Card data={dummyData}  key={i}></Card>;
                  } 
                }
            )}
        </div>
      </div>
           <button className='bg-primary-text w-fit relative text-right  px-7 py-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl first-letter:capitalize text-xl text-white'>show More</button>

    </section>
  )
}

export default index