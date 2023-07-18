import React from 'react'
import { dummyData } from '../dummyData'

function index({filterBranch,setFilter,dummyData}) {
 
  return (
    <div className='flex flex-col gap-8 w-[40%] '>
        {filterBranch.map((branch,i)=>{
            return (
              i === 0 ? <button key={i} onClick={()=>{setFilter(branch)}} className=' bg-indigo-500 w-fit rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl px-5 py-2 text-xl text-white capitalize' >{branch}</button>: <button key={i} className='border-[2px] border-primary-text w-fit px-5 py-2 text-xl font-normal capitalize bg-white text-text-secondary rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl' onClick={()=>{setFilter(branch)}}>{branch}</button>

            )
        })}
    </div>
  )
}

export default index