import React,{useState} from "react";

import Login from "./signin/index"
import Registration from "./registration/index"
// import Link from "next/router"
function Modal({ setModalState }) {
  const [login ,setLogin] = useState(false)
  return (
    <div className="w-full z-50 min-h-screen fixed top-0 flex justify-center items-center transition-all duration-1000  bg-[rgba(242, 238, 238, 0.25)]">
           {login? <Login setModalState={setModalState} setLogin={setLogin}/> :<Registration setModalState={setModalState} setLogin={setLogin}/>}
    </div>
  );
}

export default Modal;
