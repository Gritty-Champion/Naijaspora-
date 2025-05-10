import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaPlay } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";


export default function Services() {
  return (
    <div className=''>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-16'>
            What&apos;s Included in Your 
            <span className='block'><span className='text-primary'>Prep Package</span></span>
        </h1>
        <div className='flex flex-wrap sm:gap-9 gap-4 items-center justify-center'>
            <div className='w-full md:w-1/2 lg:w-[30%] '>
              <div className='bg-[#2F0D59] rounded-xl text-white h-[500px] relative flex flex-col items-center justify-between overflow-hidden'>
                <p className='text-2xl font-medium p-6'>Mock Interview Sessions with Real Questions</p>
                <Image className='absolute bottom-0 right-0' src='/images/clients.png' alt='' width={390} height={210}/>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-[30%] '>
              <div className='bg-[#F0F2F5] rounded-xl text-black h-[500px] relative flex flex-col items-center justify-between overflow-hidden'>
                <p className='text-2xl font-medium p-6'>Country-Specific Coaching (UK, Canada, US & more)</p>
                <Image className='absolute bottom-0 right-0' src='/images/network.png' alt='' width={390} height={210}/>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-[30%]'>
              <div className='bg-[#1B1F28] rounded-xl text-white h-[500px] relative flex flex-col items-center justify-between overflow-hidden'>
                <p className='text-2xl font-medium p-6'>Review of Your Visa Application & Supporting Docs</p>
                <Image className='absolute bottom-0 right-0' src='/images/1percent.png' alt='' width={390} height={210}/>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-[30%] '>
              <div className='bg-[#2F0D59] rounded-xl text-white h-[500px] relative flex flex-col items-center justify-between overflow-hidden'>
                <p className='text-2xl font-medium p-6'>Personalized Feedback & Improvement Tips</p>
                <Image className='absolute bottom-0 right-0' src='/images/clients.png' alt='' width={390} height={210}/>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-[30%] '>
              <div className='bg-[#0070C9] rounded-xl text-white h-[500px] relative flex flex-col items-center justify-between overflow-hidden'>
                <p className='text-2xl font-medium p-6'>Confidence-Building Techniques & Etiquette Coaching</p>
                <Image className='absolute bottom-0 right-0' src='/images/network.png' alt='' width={390} height={210}/>
              </div>
            </div>

        </div>
        <div className='how-it-worksbg1 sm:my-20 my-10 flex flex-col items-start justify-end p-4 sm:p-10 relative lg:min-h-[560px] 2xl:min-h-[640px]'>
        <h1 className='text-xl md:text-4xl lg:text-5xl font-bold pb-4 sm:pb-8'>
            How It <span className='text-primary'>Works</span>
        </h1>
        <div className='w-full'>
          <div className='flex flex-wrap gap-4 sm:gap-6 items-stretch justify-between'>
            <div className='flex flex-col items-start justify-between w-full md:w-[calc(33.33%-1rem)] bg-primary hover:bg-white hover:text-primary rounded-xl text-white p-4 sm:p-6 hover:shadow-lg transition-all duration-300'>
              <div>
                <h2 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-4'>Book a Session</h2>
                <p className='mb-2 sm:mb-4'>Choose a date and time that suits you.</p>
              </div>
              <Link href="/book-session" className='inline-block'>
                Learn more <IoMdArrowForward className='inline-block'/>
              </Link>
            </div>

            <div className='flex flex-col items-start justify-between w-full md:w-[calc(33.33%-1rem)] bg-primary hover:bg-white hover:text-primary rounded-xl text-white p-4 sm:p-6 hover:shadow-lg transition-all duration-300 my-4 sm:my-0'>
              <div>
                <h2 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-4'>Get Trained</h2>
                <p className='mb-2 sm:mb-4'>Join your 1-on-1 or group prep with our visa experts & that suits you</p>
              </div>
              <Link href="/get-trained" className='inline-block'>
                Learn more <IoMdArrowForward className='inline-block'/>
              </Link>
            </div>

            <div className='flex flex-col items-start justify-between w-full md:w-[calc(33.33%-1rem)] bg-primary hover:bg-white hover:text-primary rounded-xl text-white p-4 sm:p-6 hover:shadow-lg transition-all duration-300'>
              <div>
                <h2 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-4'>Walk In Prepared</h2>
                <p className='mb-2 sm:mb-4'>Face your real interview with clarity and confidence</p>
              </div>
              <Link href="/walk-in-prepared" className='inline-block'>
                Learn more <IoMdArrowForward className='inline-block'/>
              </Link>
            </div>
          </div>
        </div>
        {/* play button */}
        <button className='rounded-full bg-primary hover:bg-white p-3 sm:p-5 text-white hover:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group'>
          <FaPlay className='text-sm sm:text-base group-hover:scale-110 transition-all duration-300'/>
        </button>
        </div>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>
            How It <span className='text-primary'>Works</span>
        </h1>
        <div className='how-it-worksbg2 sm:my-20 my-10 flex flex-col items-start justify-end sm:p-10 p-5 relative'>
        <div className='w-full text-white flex items-center gap-4 sm:text-2xl text-sm'>
          <p>Get personalized coaching, practice sessions, and expert  increase your chances of visa approval.</p>
          <HiOutlineArrowsExpand className='text-2xl min-w-8'/>
        </div>
        {/*  buttons */}
        <div className='grid gap-4 text-white text-2xl absolute top-20 right-8 -translate-x-1/2 -translate-y-1/2'>
          <button><FaRegHeart/></button>
          <button><FaRegPaperPlane/></button>
        </div>
        <button className='rounded-full bg-transparent border-2 border-white hover:bg-white p-4 text-red-500 hover:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group'>
          <FaPlay className='group-hover:scale-110 transition-all duration-300'/>
        </button>
        </div>
    </div>
  )
}
