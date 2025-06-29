import { fadeIn } from '@/libs/motions';
import { motion } from 'framer-motion';
import React from 'react'
import Wrapper from '../Wrapper';
import WorksArrow from "@/img/worksArrow.svg";
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { cn } from '@/libs/cn';

const Features = ({
  data,
  img,
  title,
  subheading,
  contentClasses
}: {
    data: { title: string; description: string }[];
    img: StaticImport;
    title: string;
    subheading: string;
    contentClasses?: string;
}) => {
  return (
    <motion.section
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-fit"
    >
      <Wrapper>
        <div className="flex w-full h-full flex-col justify-center items-center gap-[50px] py-2.5">
          {/* Heading */}
          <div className="flex w-full max-w-[938px] flex-col items-center gap-[30px]">
            <p className="self-stretch text-black text-center font-montserrat text-headline-small md:text-display-small font-semibold">
              {title}
            </p>
            <p className="self-stretch text-center text-black font-montserrat text-title-medium md:text-headline-large font-medium">
              {subheading}
            </p>
          </div>

          {/* Desc */}
          <div
            className={cn(
              "flex items-center self-stretch bg-white h-full",
              contentClasses
            )}
          >
            <div className="hidden lg:block w-[544px] h-[1033px] relative shrink-0">
              <Image
                src={img}
                alt=""
                fill
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="flex-[1_0_0] flex flex-col items-start gap-[50px] px-5 py-2.5 h-full">
              {data.map((feature, idx) => (
                <div key={idx} className="flex w-full items-start gap-6">
                  <WorksArrow className="hidden lg:block" />
                  <div className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
                    <p className="self-stretch text-black font-montserrat text-headline-small md:text-display-small font-medium">
                      {feature.title}
                    </p>
                    <p className="self-stretch text-black font-montserrat text-title-small md:text-headline-small font-regular">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Features
