import React from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import WhyNaijaspora from '@/components/WhyNaijaspora'
import Offer from '@/components/Offer'
import Gray from '@/components/Gray'
import Subscribe from '@/components/Subscribe'
export default function page() {
  return (
    <div>
      <Hero />
      <div className='px-4 md:px-10 lg:px-20 2xl:px-40 '>
        <Services />
        <Testimonial />
      </div>
        <WhyNaijaspora />
        <Offer />
        <Gray />
      <div className='px-4 md:px-10 lg:px-20 2xl:px-40 '>
        <Subscribe />
      </div>
    </div>
  )
}
