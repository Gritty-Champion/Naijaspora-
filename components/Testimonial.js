'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TestimonialCard from './TestimonialCard';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Aloyna Taylor",
      title: "Content Creator",
      text: "I was so nervous before my US visa interview. Naijaspora helped me practice and prepare – I got approved on my first try!",
      image: "/images/client1.jpg"
    },
    {
      id: 2,
      name: "Linda Clucas",
      title: "Web Design Coach",
      text: "I was so nervous before my US visa interview. Naijaspora helped me practice and prepare – I got approved on my first try!",
      image: "/images/client2.png"
    },
    {
      id: 3,
      name: "Cynthia Rahman",
      title: "Legal Advisor",
      text: "The mock interview felt so real. I knew what to expect and avoided costly mistakes",
      image: "/images/client3.jpg"
    },
    {
      id: 4,
      name: "Michael Stevens",
      title: "Student",
      text: "Their preparation materials were thorough and updated. Definitely worth the investment!",
      image: "/images/client1.jpg"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      title: "Engineer",
      text: "The personalized feedback on my documents saved me from potential rejection. Highly recommend!",
      image: "/images/client2.png"
    }
  ];

  // Used for responsive behavior
  const [windowWidth, setWindowWidth] = React.useState(0);
  
  React.useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Update window width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate number of items to show based on screen size
  const getItemsToShow = () => {
    if (windowWidth >= 1280) return 3; // xl screens
    if (windowWidth >= 768) return 2; // md screens
    return 1; // mobile
  };

  // Calculate centerSlidePercentage based on items to show
  const centerSlidePercentage = 100 / getItemsToShow();

  return (
    <div className="w-full py-16">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Testimonials</h1>
      
      <div className="carousel-container ">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
          emulateTouch={true}
          showIndicators={true}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <div
                onClick={onClickHandler}
                className={`inline-block mx-1 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? "w-8 h-3 bg-primary rounded-full" 
                    : "w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600"
                }`}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                title={label}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors z-40"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                title={label}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors z-40"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            )
          }
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

