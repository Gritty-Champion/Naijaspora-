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
import Seven from "@/img/points/seven.svg?url";
import Eight from "@/img/points/eight.svg?url";
import Nine from "@/img/points/nine.svg?url";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/libs/motions';


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
      desc: "Access Directory of Verified agents",
    },
    {
      img: Four,
      desc: "Full relocation lifecycle support",
    },
    {
      img: Five,
      desc: "Visa Interview preparation",
    },
    {
      img: Six,
      desc: "Real humans and real results",
    },
    {
      img: Seven,
      desc: "Post Visa denial service",
    },
    {
      img: Nine,
      desc: "Diaspora project Management",
    },
    {
      img: Eight,
      desc: "Ensure authenticity of documents",
    },
  ];
  return (
    <motion.section className="flex w-full flex-col">
      <div className="w-full relative">
        <Image
          src={curveSVG}
          alt="Curve decoration"
          width={1000}
          height={50}
          style={{ width: "100%" }}
        />
      </div>
      <div className="flex w-full h-fit flex-col items-start gap-[40px] self-stretch bg-neutral-10 py-[40px]">
        <Wrapper>
          <div className="flex w-full h-fit flex-col items-start gap-[40px] self-stretch bg-neutral-10">
            {/* Top */}
            <div className="flex w-full items-start gap-2.5 self-stretch border-b-secondary-on_secondary_fixed_variant pb-2.5 py-[23px] lg:py-[46px] border-b border-solid">
              <div className="flex max-w-[554px] flex-col items-start gap-[18px] lg:gap-[36px]">
                <p className="max-w-[554px] text-white font-montserrat font-semibold text-display-medium lg:text-display-large">
                  With Naijaspora
                </p>
                <p className="max-w-[369px] text-surface-container font-montserrat text-title-medium font-bold ">
                  A truly global support system
                </p>
                <Button>Get Started</Button>
              </div>
            </div>

            {/* Bottom */}
            <div
              className="grid h-fit gap-y-7 gap-x-7 shrink-0 self-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {cardData.map((Data, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("bottom", idx * 0.1)}
                  className="flex relative w-full max-w-[360px] h-[380px] flex-col justify-center items-center gap-[22px] shrink-0 mx-auto"
                >
                  <div className="flex w-full h-full flex-col items-start gap-2.5 z-0 absolute top-0 left-0 rounded-[16px] [background:rgba(255,255,255,0.05)] backdrop-blur-[6px] p-2.5" />

                  <div className="flex relative z-1 w-full h-[271px] flex-col items-start gap-2.5 shrink-0 rounded-[16px_16px_0px_0px]">
                    <Image
                      src={Data.img}
                      alt={Data.desc}
                      fill
                      className="object-contain"
                      priority={idx < 3}
                    />
                  </div>

                  <div className="flex relative px-[36px] py-[10px] z-1 flex-col justify-center items-center gap-2.5 shrink-0 self-stretch">
                    <p className="self-stretch text-center text-white text-title-medium font-montserrat font-medium">
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
