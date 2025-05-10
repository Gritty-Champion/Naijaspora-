import React from 'react'
import Image from 'next/image'
import { Inria_Sans } from 'next/font/google'
export default function WhyNaijaspora() {
  return (
    <div className='bg-[#14181F] relative'>
        <div className='px-4 md:px-10 lg:px-20 2xl:px-40 pt-10 pb-40'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-16 text-white text-center'>
            Why  <span className='text-primary'>Naijaspora</span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-16'>
            <div className='z-30'>
                <div className='h-[285px] bg-[#1B1F28] flex flex-col justify-between items-center text-white rounded-lg px-4 pb-4'>
                    <div className='flex justify-center items-center w-[160px] mx-auto h-[160px] overflow-hidden'>
                        <Image className='object-contain' src='/images/trusted.png' alt='icon1' width={290} height={290} />
                    </div>
                    <div>
                        <h2 className='text-[11px] text-gray-300 my-2' >01 -</h2>
                        <p className='text-lg w-[90%] 2xl:w-full'>✅ Trusted by Over 1,000 Nigerians</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='h-[285px] bg-[#1B1F28] flex flex-col justify-between items-center text-white rounded-lg px-4 pb-4' >
                    <div className='flex justify-center items-center w-[200px] mx-auto h-[160px] overflow-hidden'>
                        <Image className='object-contain' src='/images/currency.png' alt='icon1' width={225} height={225} />
                    </div>
                    <div>
                        <h2 className='text-[11px] text-gray-300 my-2' >02 -</h2>
                        <p className='text-lg w-[90%] 2xl:w-full'>💰 Affordable & Flexible Pricing</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='h-[285px] bg-[#1B1F28] flex flex-col justify-between items-center text-white rounded-lg px-4 pb-4' >
                    <div className='flex justify-center items-center w-[200px] mx-auto h-[160px] overflow-hidden'>
                        <Image className='object-contain' src='/images/currency.png' alt='icon1' width={225} height={225} />
                    </div>
                    <div>
                        <h2 className='text-[11px] text-gray-300 my-2' >03 -</h2>
                        <p className='text-lg w-[90%] 2xl:w-full'>🎓 Real Experience with Visa Officers</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='h-[285px] bg-[#1B1F28] flex flex-col justify-between items-center text-white rounded-lg px-4 pb-4' >
                    <div className='flex justify-center items-center w-[200px] mx-auto h-[160px] overflow-hidden'>
                        <Image className='object-contain' src='/images/currency.png' alt='icon1' width={225} height={225} />
                    </div>
                    <div>
                        <h2 className='text-[11px] text-gray-300 my-2' >04 -</h2>
                        <p className='text-lg w-[90%] 2xl:w-full'>📞 24/7 Support & Follow-up Help</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
       <Image className='hidden md:block absolute top-0 left-0 z-0' src='/images/whyvector1.png' alt='herobg' width={340} height={340} />
       <Image className='hidden md:block absolute top-[420px] left-0' src='/images/whyvector2.png' alt='herobg' width={300} height={300} />
       <Image className='w-full z-30' src='/images/white-bottom.png' alt='herobg' width={1700} height={1700} />
    </div>
  )
}
