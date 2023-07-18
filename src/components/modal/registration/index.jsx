import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { Password, Form, Button,ButtonSecondary } from "../../form/index";

function index({setModalState,setLogin}) {
  return (
    <div className="bg-white w-[30%] justify-center items-center relative flex flex-col gap-4 py-8 px-4 rounded-lg shadow-lg shadow-gray-400 ">
    <div className="flex justify-between w-[100%] px-5 py-2">
     <h2 className="text-black text-2xl font-bold">Create an Account</h2>
    <button
       className="w-6 h-6 relative bottom-5 right-0 text-3xl"
       onClick={() => {
         setModalState((set) => !set);
       }}
     >
       <RxCross2 />
     </button>
    </div>
     <div className="flex flex-col gap-4 w-[80%] justify-center items-center">
       <Form text="Name" form="text"></Form>
       <Form text="email" form="email"></Form>
       <Password />
       <Button text={"Next"}/>
        <ButtonSecondary/>
       <p className="text-black text-lg font-normal">
         Already have an account? <span className="text-black text-lg font-bold" onClick={()=>{setLogin(login=>!login)}}>Log in</span>

     
       </p>
     </div>
       <p className=" text-neutral-700 text-[11px] font-normal">By continuing, you agree to our Terms of Service and Privacy Policy</p>
       <p className=" text-sm w-full text-center" >Unable to Login? We are here <span className="text-black font-bold">imeet.mathura@gmail.com</span></p>
   </div>
  )
}

export default index