import React from 'react'
import Image from 'next/image';
import curveSVG from "@/img/curveSVGBlack.svg?url"
import Wrapper from '../Wrapper';
import Button from '../Button';
import One from "@/img/points/one.svg?url";
import Two from "@/img/points/two.svg?url";
import Three from "@/img/points/three.svg?url";
import Four from "@/img/points/four.svg?url";
import Five from "@/img/points/five.svg?url";
import Six from "@/img/points/six.svg?url";

import { motion } from 'framer-motion';
import { fadeIn} from '@/libs/motions';


const KeyPoints = () => {

  const cardData = [
    {
      img: One,
      desc: "No hidden charges, no false promises",
    },
    {
      img: Two,
      desc: "Scam prevention systems built-in",
    },
    {
      img: Three,
      desc: "Verified partner directory",
    },
    {
      img: Four,
      desc: "Full relocation lifecycle support",
    },
    {
      img: Five,
      desc: "Post-visa and post-relocation care",
    },
    {
      img: Six,
      desc: "Real humans and real results",
    },
  ];
  return (
    <motion.section className="flex w-full flex-col">
      <div className="w-full relative hidden lg:block">
        <Image
          src={curveSVG}
          alt="Curve decoration"
          width={1000}
          height={50}
          style={{ width: "100vw" }}
        />
      </div>
      <div className="flex w-full h-fit flex-col items-start gap-[40px] self-stretch bg-neutral-10 py-[40px]">
        <Wrapper>
          <div className="flex w-full h-fit flex-col items-start gap-[40px] self-stretch bg-neutral-10">
            {/* Top */}
            <div className="flex w-full items-center justify-center gap-2.5 self-stretch pb-2.5 py-[23px] lg:py-[46px]">
              <div className="flex max-w-[554px] flex-col items-center gap-[18px] lg:gap-[36px]">
                <p className="max-w-[554px] text-white font-montserrat font-semibold text-display-medium lg:text-display-large">
                  With Naijaspora
                </p>
                <p className="max-w-[369px] text-center text-surface-container font-montserrat text-title-medium font-bold ">
                  A truly global support system bigger and more centralized.
                </p>
                <Button>Get Started</Button>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-wrap w-full max-w-[1240px] h-full gap-y-7 gap-x-7 justify-center mx-auto">
              {cardData.map((Data, idx) => (
                <motion.div
                  className="flex w-[394.667px] flex-col justify-center items-center gap-[22px] rounded-[16px] bg-[#15183A] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),0px_10px_15px_-3px_rgba(0,0,0,0.10)] py-[30px]"
                >
                  <div className="flex relative z-1 w-[150px] h-[150px] shrink-0">
                    <Image
                      src={Data.img}
                      alt={Data.desc}
                      fill
                      className="object-contain"
                      priority={idx < 3}
                    />
                  </div>

                  <div className="flex px-[36px] flex-col justify-center items-start gap-2.5 self-stretch py-[10px]">
                    <p className="text-primary-on_primary text-headline-large font-montserrat font-medium">
                      0{idx + 1}—
                    </p>
                    <p className="self-stretch text-primary-on_primary font-inter text-headline-medium font-medium ">
                      {Data.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </motion.section>
  );
}

export default KeyPoints
