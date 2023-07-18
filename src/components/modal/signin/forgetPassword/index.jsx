import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Form, Button, Password } from "../../../form/index";
import {AiFillLock} from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi";
function index({ setModalState, setResetPassword }) {
  return (
    <div className="relative w-full flex flex-col gap-5 px-5 ">
      <div className="flex justify-between items-center w-[100%] my-1 px-5 py-2">
        <BiArrowBack
          onClick={() => {
            setResetPassword((login) => !login);
          }}
          className="text-2xl"
        />

        <button
          className="text-3xl"
          onClick={() => {
            setModalState((set) => !set);
          }}
        >
          <RxCross2 />
        </button>
      </div>
      <h2 className="flex w-full justify-start items-center gap-2 text-text-secondary text-2xl font-bold">Forget Password <AiFillLock/></h2>
      <Form form={"email"} text={"Enter  Email Address"}></Form>
      <Button text={"next"} />
    </div>
  );
}

export default index;
