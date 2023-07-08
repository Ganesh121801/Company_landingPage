"use client"
import React from 'react'
import Navbar from "@/components/Navbar"
import Hero from "@/components/hero/index"
import Company from "@/components/partner/index"
import Courses from "@/components/courses/index"
import HowWork from "@/components/howtowork/index"
import Feature from "@/components/features/index"
import Mentor from "@/components/mentor/index"
import Other from "@/components/other/index"
import Question from "@/components/question/index"
import Footer from "@/components/footer"

function page() {
  return (
    <div>
      <Navbar/>
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
  )
}

export default page