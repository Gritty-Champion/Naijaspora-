import React from 'react'
import Wrapper from './Wrapper'
import HeroBG from '@/img/defaultHeroBG.svg?url'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Button from './Button'
import { RiArrowRightCircleLine, RiPlayCircleLine } from '@remixicon/react'
import SVGCurve from "@/img/curveSVGWhite.svg?url"
import { useController } from '@/hooks/useController'

type heroProps = {
  heroImage?: any;
  title: string | React.ReactNode;
  desc: string;
  heroBtnText?: string;
  heroBtnClick?: () => void;
  vidComText?: string;
  vidComClick?: () => void;
}

const Hero = ({
  heroImage = HeroBG,
  title,
  desc,
  heroBtnText = "Start Your Journey with Expert Guidance!",
  heroBtnClick = () => {},
  vidComClick = () => {},
  vidComText = "Everything you need to know about NaijaSpora",
}: heroProps) => {
  const { heroRef } = useController()
  return (
    <section ref={heroRef} className="flex relative w-full h-[98vh] flex-col justify-center items-start gap-2.5">
      <Wrapper>
        {/* Background and Overlays */}
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

        <div className="flex flex-col w-full h-[140px] z-0 items-start absolute right-0 bottom-0">
          <Image
            src={SVGCurve}
            alt="Hero Background"
            className="!w-full !h-full object-cover"
            fill
            priority
          />
        </div>

        <div className="flex relative z-[1] max-w-[751px] h-full flex-col items-start gap-[36px] shrink-0">
          <p className="self-stretch font-montserrat text-white text-[74px] font-semibold leading-[normal]">
            {title}
          </p>

          <div className="flex max-w-[545px] flex-col items-start gap-2.5">
            <p className="self-stretch text-white text-body-large font-regular">
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

          <div className="flex cursor-pointer w-[416px] items-center gap-3 rounded-[10px]">
            <RiPlayCircleLine className="w-12 h-12 shrink-0 aspect-[1/1] text-surface-container" />
            <p className="max-w-[200px] shrink-0 text-surface-container font-inter font-normal text-body-small">
              {vidComText}
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero
