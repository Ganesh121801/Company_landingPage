import React, { useState } from 'react'
import { Password, Form, Button,ButtonSecondary } from "../../form/index";
import SignWithEmail from "./detailform/SigninEmail"
import { RxCross2 } from 'react-icons/rx';
import {AiOutlineMail} from "react-icons/ai"
function index({setModalState,setLogin}) {
  const [loginWithEmail,setLoginEmail]=useState(false)
  return (
<div className=" w-[30%]  py-10 px-5 bg-white rounded-[20px] shadow shadow-gray-300 flex flex-col gap-4 items-center" >
{
      loginWithEmail? <SignWithEmail setModalState={setModalState} setLoginEmail={setLoginEmail}/> :<>
      
      <div className="flex justify-between w-[100%] px-5 py-2">
<div className=" text-black text-xl text-start font-bold">Log in to iMeet Technology</div>

    <button
       className="w-6 h-6 relative bottom-5 right-0 text-3xl"
       onClick={() => {
         setModalState((set) => !set);
       }}
     >
       <RxCross2 />
     </button> </div>
 <div className='flex flex-col gap-4'>
    <ButtonSecondary/>
 <div className="text-white flex gap-4 text-xl bg-gradient-to-b from-violet-500 via-indigo-700 first-letter:capitalize items-center to-indigo-500 w-full px-3 py-3 rounded-md font-semibold justify-center" onClick={()=>{setLoginEmail(login=>!login)}}><AiOutlineMail className='text-2xl '/> Continue With Email </div>
 </div>
 <div className=""><span className="text-black text-lg font-normal">Don’t have an account? </span><span className="text-black text-lg font-bold" onClick={()=>{setLogin(login=>!login)}}>Sign up</span></div>

      </>
}
</div>
  )
}

export default index