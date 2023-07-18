"use client"

import React, { useState } from 'react'
import {AiOutlineEyeInvisible}  from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai"
import {AiOutlineGoogle} from "react-icons/ai"

export function Form({form,text}) {
    const [state,setState] = useState("")
    const handleChange = (e)=>{
        setState(e.target.value)
    }
  return (
    <div className='text-xl text-text-secondary flex  items-center border-[3px] w-full border-neutral-700 px-4 py-2 rounded-md'>
        <input type={form} onChange={(e)=>{handleChange(e)}} value={state}  placeholder={text} className='outline-none w-[80%] bg-transparent  text-xl text-text-secondary placeholder:text-gray-500 captalize ' />
    </div>
  )
}
export const Password = ()=>{
    const [password,setPassword] =useState("")
    const [visible,setVisible] = useState(false)
    const handleChange = (e)=>{
        setPassword(e.target.value);
    }

  return (
    <div className='w-full text-xl text-text-secondary flex justify-between items-center px-4 border-[3px] border-neutral-700  py-2 rounded-sm'>
       
        <input value={password} type={visible?"text": "password"} name="password" id="password" onChange={handleChange} className='text-text-secondary text-xl text-start outline-none' placeholder='Enter  Password'/>
         {visible?<AiOutlineEyeInvisible onClick={()=>{setVisible(!visible)}}/>:<AiOutlineEye onClick={()=>{setVisible(!visible)}}/>}   
    </div>
  );
}
export const Button = ({text})=>{
   return <button className="text-white text-xl bg-gradient-to-b from-violet-500 via-indigo-700 cap to-indigo-500 w-full px-3 py-3 rounded-md font-semibold capitalize ">{text}</button>
}
export const ButtonSecondary = ()=>{
    return  <button className=" py-3 text-xl px-4 capitalize w-full gap-4 bg-stone-900 rounded-[5px] text-white flex justify-center items-center"><AiOutlineGoogle className='text-white text-2xl font-normal'/> continiue with google</button>
}