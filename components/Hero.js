import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='herobg'>
    <div className=' px-4 md:px-10 lg:px-20 2xl:px-40 pt-20 pb-40'>
        <div className='flex flex-col md:flex-row justify-between items-center sm:pt-10'>
            <div className='w-full md:w-1/2'>
            <div className=''>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-4'>
                    Ace Your Visa Interview
                    <span className='block'> with <span className='text-primary'>Confidence</span></span>
                </h1>
                <p className='text-gray-600 text-lg mb-8 sm:w-[70%]'>
                    Get personalized coaching, practice sessions, and expert tips to 
                    increase your chances of visa approval.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition duration-300'>
                        Book a Prep Session
                    </button>
                    <button className='border border-primary text-primary hover:text-white hover:bg-primary px-6 py-3 rounded-md transition duration-300'>
                        Get a Free Assessment
                    </button>
                </div>
            </div>
            </div>
            <div className='w-full md:w-1/2 py-8 sm:py-0'>
               <Image className='mx-auto' src='/images/earth.png' alt='herobg' width={400} height={400} />
            </div>
        </div>

    </div>
    <Image className='w-full' src='/images/white-bottom.png' alt='herobg' width={1700} height={1700} />
    </div>
  )
}
