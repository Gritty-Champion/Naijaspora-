import React from 'react'
import Wrapper from './Wrapper'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Button from './Button'
import { RiArrowRightCircleLine, RiPlayCircleLine } from '@remixicon/react'
import SVGCurve from "@/img/curveSVGWhite.svg?url"
import { useController } from '@/hooks/useController'
import { motion } from 'framer-motion'
import { fadeIn } from '@/libs/motions'
import { cn } from '@/libs/cn'

type heroProps = {
  heroImage?: StaticImport | undefined;
  title: string | React.ReactNode;
  desc: string;
  heroBtnText?: string;
  heroBtnClick?: () => void;
  vidComText?: string;
  vidComClick?: () => void;
  vidComClasses?: string;
  heroBackgroundClassName?: string;
  textStyles?: string;
  contentImage?: StaticImport | undefined
};

const Hero = ({
  heroImage,
  title,
  desc,
  contentImage,
  heroBackgroundClassName = "",
  heroBtnText = "Start Your Journey with Expert Guidance!",
  heroBtnClick = () => {},
  vidComClick = () => {},
  vidComText = "Everything you need to know about NaijaSpora",
  textStyles = "text-white",
  vidComClasses = "text-surface-container"
}: heroProps) => {
  const { heroRef } = useController();
  return (
    <motion.section
      ref={heroRef}
      className={cn(
        "flex relative w-full min-h-screen lg:h-screen flex-col justify-center items-start gap-2.5",
        heroBackgroundClassName
      )}
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Wrapper>
        {/* Background and Overlays */}
        {heroImage !== undefined && (
          <>
            <div className="w-full h-full z-0 absolute top-0 left-0">
              <Image
                src={heroImage}
                alt="Hero Background"
                className="!w-full !h-full object-cover"
                fill
                priority
              />
            </div>

            <div className="flex w-full z-0 h-full items-start gap-2.5 absolute top-0 left-0 [background:rgba(255,255,255,0.15)] p-2.5" />
          </>
        )}

        <div className="hidden xl:flex flex-col w-full h-[140px] z-0 items-start absolute right-0 bottom-[-2px]">
          <Image
            src={SVGCurve}
            alt="Hero Background"
            className="!w-full !h-full object-cover"
            fill
            priority
          />
        </div>

        <div className="w-full flex relative z-[1] h-full flex-row py-[20vh]">
          <div className="flex  w-full flex-1 lg:max-w-[751px] h-full flex-col items-start gap-[36px] shrink-0">
            <p
              className={cn(
                "self-stretch font-montserrat text-[42px] xl:text-[70px] font-semibold leading-[normal]",
                textStyles
              )}
            >
              {title}
            </p>

            <div className="flex max-w-[545px] flex-col items-start gap-2.5">
              <p
                className={cn(
                  "self-stretch text-white text-body-large font-regular",
                  textStyles
                )}
              >
                {desc}
              </p>
            </div>

            <Button
              iconPosition="right"
              icon={<RiArrowRightCircleLine size={20} />}
              onClick={heroBtnClick}
            >
              {heroBtnText}
            </Button>

            <div onClick={vidComClick} className="flex cursor-pointer w-full max-w-[416px] items-center gap-3 rounded-[10px]">
              <RiPlayCircleLine
                className={cn(
                  "w-12 h-12 shrink-0 aspect-[1/1] ",
                  vidComClasses
                )}
              />
              <p
                className={cn(
                  "max-w-[200px]  font-inter font-regular text-[12px]",
                  vidComClasses
                )}
              >
                {vidComText}
              </p>
            </div>
          </div>

          {contentImage && (
            <div className="relative flex-1 max-w-[553px] max-h-[470px] hidden lg:flex rounded-[20px]">
              <Image
                src={contentImage}
                alt="Descriptive text here"
                fill
                className="aspect-[553/470]"
              />
            </div>
          )}
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Hero
