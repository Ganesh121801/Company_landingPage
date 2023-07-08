"use client "
 
import React from 'react'
import Image from 'next/image'

function index() {
  return (
    <section className='w-full py-7 my-3 flex justify-center mx-auto lg:w-[80%] items-center flex-col gap-6'>
         <div className="text text-text-secondary font-normal text-4xl">Our Past and Present College & Club Partners </div>
      <div className="image flex justify-center items-center gap-4 py-2 px-4 jus">
         <Image src={"/images/image 2.png"} width="200" height="200" alt="our partner logo"/>
         <Image src={"/images/image 3.png"} width="200" height="200" alt="our partner logo"/>
         <Image src={"/images/image 4.png"} width="200" height="200" alt="our partner logo"/>
         <Image src={"/images/image 5.png"} width="200" height="200" alt="our partner logo"/>
         <Image src={"/images/image 6.png"} width="200" height="200" alt="our partner logo"/>
      </div>
    </section>
  )
}

export default index



