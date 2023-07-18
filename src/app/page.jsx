"use client"
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from "@/components/hero/index"
import Company from "@/components/partner/index"
import Courses from "@/components/courses/index"
import HowWork from "@/components/howtowork/index"
import Feature from "@/components/features/index"
import Mentor from "@/components/mentor/index"
import Other from "@/components/other/index"
import Question from "@/components/question/index"
import Footer from "@/components/footer"
import Modal from "@/components/modal/index"

function page() {
  const [modalstate ,setModalState] = useState(false)
  return (
    <div>
       {
        modalstate&&<Modal setModalState={setModalState}></Modal>
       }
       <div className={modalstate?"blur-sm fixed top-0" :"blur-0 relative"}>
          <Navbar setModalState={setModalState}/>
          <Hero/>
          <Company/>
          <Courses/>
          <HowWork/>
          <Feature/>
          <Mentor/>
          <Other/>
          <Question/>
          <Footer/>
        </div>
    </div>
  )
}

export default page