import Image from 'next/image';
import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialCard({ testimonial }) {
    // Generate a stable rotation for each card based on its ID
    const rotation = ((testimonial.id * 2) % 5) - 2;
    
    return (
      <div className="relative mx-auto px-2 py-20 drop-shadow-lg" style={{ width: '100%', maxWidth: '24rem' }}>
        {/* Dark shadow div underneath */}
        <div 
          className="absolute bottom-14 left-6 2xl:w-96 w-80 h-96 bg-[#14181F] rounded-3xl z-0"
          style={{ 
            borderRadius: '2rem',
            transform: `rotate(${rotation}deg)`,
          }}
        />
        
        {/* Main blue card */}
        <div 
          className="relative rounded-3xl shadow-lg transition-all duration-500 h-96 2xl:w-96 w-80 bg-primary text-white z-10"
          style={{ 
            borderRadius: '2rem',
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className="p-8 relative flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden absolute -top-8">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            
            <h3 className="text-xl font-bold text-center mt-12">{testimonial.name}</h3>
            <p className="text-sm text-center text-blue-100 mb-6">{testimonial.title}</p>
            
            <div className="grid justify-items-center">
              <RiDoubleQuotesL className="text-4xl font-serif"/>
              <p className="italic px-4">{testimonial.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }