import React,{useState} from 'react'
import {RxCross2} from "react-icons/rx"
import {BiArrowBack} from "react-icons/bi"
import {Form ,Button,Password} from "../../../form/index"
import ForgetPassword from "../forgetPassword/index"
function SigninEmail({setModalState,setLoginEmail}) {
  const [resetPassword,setResetPassword]= useState(false)
  return (
    <>
        <div className="flex flex-col relative items-center w-[100%] my-1 px-5 py-2">

      <button
       className="text-3xl"
       onClick={() => {
         setModalState((set) => !set);
       }}
     >
       <RxCross2 />
     </button> </div>
     <div className='flex flex-col items-center gap-5'>
        <h2 className='text-text-secondary text-2xl my-2 font-bold w-full text-start'>Welcome Back!</h2>
        <Form form={"email"} text={"Enter  Email Address"}></Form>
        <Password/>
          <span onClick={()=>{setResetPassword(login=>!login)}}>Forget Password</span>
        <Button text={"next"}/>
     </div>

        </>
      }
      
          </>
  )
}

export default SigninEmail