import React from 'react'
import Image from 'next/image'

export default function Offer() {
  return (
    <div className='bg-[#14181F] py-20 px-4 md:px-10 lg:px-20 2xl:px-40'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='relative sm:w-1/3'>
          <Image 
            src='/images/mobile.png' 
            alt='Mobile banking interface' 
            width={580}
            height={580}
            className='object-contain drop-shadow-2xl'
          />
        </div>
        <div className='text-white sm:w-2/3'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Limited Time Offer - First Session Free!
          </h2>
          <h3 className='text-xl md:text-2xl font-semibold mb-6'>
            First Session Free
          </h3>
          <p className='text-gray-300 mb-8'>
            Sign up now and get your first prep session at no cost - just to see how confident you can become.
          </p>
          <button className='bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors'>
            Claim My Free Session
          </button>
        </div>
      </div>
    </div>
  )
}
