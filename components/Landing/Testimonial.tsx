import React from 'react'
import Wrapper from '../Wrapper';
import Image from 'next/image';
import SVGCurve from "@/img/curveSVGWhite.svg?url";
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import test_one from "@/img/testimonials/testimonial_one.svg?url";
import test_two from "@/img/testimonials/testimonial_two.svg?url";
import test_three from "@/img/testimonials/testimonial_three.svg?url";
import test_four from "@/img/testimonials/testimonial_four.svg?url";
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/libs/motions';

const Testimonial = () => {

  const testimonialData = [
    {
      img: test_one,
      desc: "NaijaSpora has made staying connected with my diaspora community so seamless. From events to job leads and visa updates, everything is just one tap away",
      name: "Chinedu A",
    },
    {
      img: test_two,
      desc: "I’ve been using NaijaSpora to connect with fellow Nigerians here, and it’s been a blessing. I’ve found useful services, made great friends, and even discovered business opportunities",
      name: "Chinedu A",
    },
    {
      img: test_three,
      desc: "I’ve been using NaijaSpora to connect with fellow Nigerians here, and it’s been a blessing. I’ve found useful services, made great friends, and even discovered business opportunities",
      name: "Esther A.",
    },
    {
      img: test_four,
      desc: "NaijaSpora brings value to the diaspora experience. From real-time updates to cultural content, I feel more rooted and informed. I’ve already introduced it at my local Nigerian community group",
      name: "Samuel T.",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  return (
    <motion.section
      className="w-full h-fit"
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Wrapper>
        <div className="flex w-full flex-col items-center gap-[50px] bg-white">
          <div className="flex w-full lg:max-h-[232px] justify-center items-center gap-2.5 px-0 py-[76px]">
            <p className="flex-[1_0_0] text-black text-center font-montserrat text-display-small lg:text-display-large font-bold ">
              Users rated how likely they’d share NaijaSpora with their network.
            </p>
          </div>

          <div className="flex relative w-full h-full lg:h-[640px] flex-col justify-center items-center bg-black p-10 rounded-[30px]">
            <div className="w-full hidden xl:block h-[132px] absolute z-10 bottom-[-20px] left-0">
              <Image
                src={SVGCurve}
                alt="Curve decoration"
                width={1024}
                height={132}
                style={{ width: "100%", height: "100%" }}
                className="object-fill"
                priority
              />
            </div>

            <div className="flex w-[180.125px] justify-end items-end gap-[18px] z-10 absolute p-2.5 right-[70.188px] bottom-0">
              <div
                onClick={scrollPrev}
                className="flex cursor-pointer w-[65px] h-[65px] flex-col text-white lg:text-black justify-center items-center gap-2.5 rounded-[70px] border-neutral-100 xl:border-neutral-10 p-2.5 border-2 border-solid"
              >
                <RiArrowLeftLine className="w-6 h-6 shrink-0 text-white xl:text-black" />
              </div>
              <div
                onClick={scrollNext}
                className="flex cursor-pointer w-[65px] h-[65px] flex-col text-white lg:text-black justify-center items-center gap-2.5 rounded-[70px] border-neutral-100 xl:border-neutral-10 p-2.5 border-2 border-solid"
              >
                <RiArrowRightLine className="w-6 h-6 shrink-0 text-white xl:text-black" />
              </div>
            </div>

            {/* Cards */}
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {testimonialData.map((data, idx) => (
                    <div
                      key={idx}
                      className="flex embla__slide h-[600px] lg:h-[568px] flex-col lg:flex-row justify-center items-center gap-[30px] shrink-0 self-stretch px-5 py-10"
                    >
                      {/* Image */}
                      <div className="flex w-full flex-1 h-full z-0 relative lg:max-w-[515px] items-center gap-2.5 self-stretch ">
                        <Image
                          src={data.img}
                          alt=""
                          className="!w-full !h-full z-0 object-cover rounded-[30px]"
                          fill
                          priority
                        />
                      </div>

                      {/* Desc */}
                      <div className="flex flex-col flex-1 h-full gap-[40px] lg:justify-between items-center  self-stretch p-2.5">
                        <p className="w-full max-w-[551px] text-white font-montserrat text-title-small md:text-headline-small xl:text-headline-large font-medium">
                          {data.desc}
                        </p>
                        <p className="w-full max-w-[551px] text-white font-montserrat text-title-medium lg:text-headline-large font-medium">
                          {data.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
}

export default Testimonial
