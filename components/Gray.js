'use client'
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gray() {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile - 1 item
        setCenterSlidePercentage(100);
      } else if (window.innerWidth < 1024) {
        // Medium - 2 items
        setCenterSlidePercentage(50);
      } else if (window.innerWidth < 1536) {
        // Large - 3 items
        setCenterSlidePercentage(33.33);
      } else {
        // 2XL - 4 items
        setCenterSlidePercentage(25);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Jacqueline Anisi",
      title: "Freelance Writer",
      text: "I recently quit my 9-5 and transitioned to freelance writing to earn in dollars. Thanks to Grey, clients can send payments seamlessly. My money is safe, and I can convert them at the best exchange rates on the market.",
      bgColor: "bg-[#5E19B3]"
    },
    {
      id: 2,
      name: "Nana",
      title: "Content Creator",
      text: "Before Grey, sending money home from the UK was difficult because I had to deal with transfer charges and inconsistent rates. Now it's much easier and convenient, especially if the recipient is also using Grey.",
      bgColor: "bg-primary"
    },
    {
      id: 3,
      name: "Jane Olola",
      title: "Student",
      text: "I recently moved to the UK for school, and Grey has made paying my fees and managing both Naira and pounds really easy.",
      bgColor: "bg-[#5E19B3]"
    },
    {
      id: 4,
      name: "Michael Johnson",
      title: "Business Owner",
      text: "Grey has simplified my international transactions and saved me a lot in fees. The platform is intuitive and secure.",
      bgColor: "bg-primary"
    },
    
  ];

  return (
    <div className="w-full py-20 px-4 md:px-10 lg:px-20 2xl:px-40 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">People Who Make Transfers with Grey</h1>
      
      <div className="carousel-container">
        
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
          emulateTouch={true}
          showIndicators={false}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2">
              <div 
                className={`${testimonial.bgColor} rounded-xl shadow-lg h-[340px] flex flex-col justify-between w-[300px] mx-auto`}
              >
                <div className="p-5 flex flex-col h-full">
                  <p className="text-white text-[17px] flex-grow text-left">{testimonial.text}</p>
                  <div className="border-t border-white/30 pt-4 mt-4">
                    <h3 className="font-medium text-white text-left">{testimonial.name}</h3>
                    <p className="text-white/80 text-sm text-left">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
