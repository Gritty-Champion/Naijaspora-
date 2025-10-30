"use client"

import React from 'react'
import Container from '../Container';
import ImageOne from '@/img/featuresOne.svg?url';
import Image from 'next/image';
import Button from '../Button';
import {ArrowCircleRight} from '@phosphor-icons/react'
import ImageTwo from "@/img/featureImgTwo.svg?url"
import ImageThree from "@/img/featuresImgThree.png";

const Features = () => {
  return (
    <section className="w-full h-fit">
      <Container>
        <div className="flex flex-col items-center gap-[60px] self-stretch bg-white px-20 py-0">
          {/* Visa support */}
          <div className="flex w-full h-[660px] items-start self-stretch [background:linear-gradient(138deg,rgba(0,142,255,0.43)_35%,rgba(191,214,250,0.48)_92%),#E8F0FC] rounded-[20px]">
            {/* Desc */}
            <div className="flex flex-col justify-center items-start gap-[50px] flex-[1_0_0] self-stretch px-10 py-0">
              <div className="flex items-center gap-2.5 self-stretch max-w-[560px]">
                <p className="flex-[1_0_0] text-white font-inter text-[60.167px] font-bold leading-[64px]">
                  Visa Support + Collateral-Free Loans
                </p>
              </div>

              <div className="flex items-center gap-2.5 self-stretch max-w-[560px]">
                <p className="flex-[1_0_0] text-black font-inria text-[22.353px] font-normal leading-8 tracking-[-0.15px]">
                  Open a verified bank account in minutes, access
                  zero-collateral loans, and start receiving global payments
                  without delays.
                </p>
              </div>

              {/* <Button variant="link" }>Start your journey</Button> */}
              <Button
                variant="link"
                to="/"
                suffixIcon={<ArrowCircleRight size={18} />}
                className="text-[18.115px] font-normal leading-6 font-inter"
              >
                Start your journey
              </Button>
            </div>

            {/* Image */}
            <div className="flex items-center gap-2.5 flex-[1_0_0] self-stretch">
              <Image
                src={ImageOne}
                alt=""
                className="flex-[1_0_0] self-stretch rounded-r-[20px]"
              />
            </div>
          </div>

          {/* Relocate */}
          <div className="flex h-[802px] items-start gap-[30px] self-stretch rounded-[20px]">
            <div className="flex w-[476px] h-[802px] items-center gap-2.5">
              <div className="flex w-[470px] items-end gap-2.5 shrink-0 self-stretch [background:linear-gradient(342deg,#DAC5F6_0.83%,#95B6FC_98.65%)] px-[13px] py-0 rounded-[20px]">
                <Image
                  src={ImageTwo}
                  alt=""
                  className="w-[370px] h-full shrink-0 self-stretch"
                />
              </div>
            </div>

            <div className="flex items-center gap-2.5 flex-[1_0_0] self-stretch">
              <div
                className="flex items-center gap-2.5 flex-[1_0_0] self-stretch rounded-[20px] px-0 py-0.5"
                style={{
                  background:
                    "linear-gradient(130deg, #92C0FF 0%, rgba(97, 0, 211, 0.06) 74%), #EFE4FB",
                }}
              >
                <div className="flex items-start gap-2.5 flex-[1_0_0] self-stretch px-[114px] py-[84px] relative">
                  <div className="flex w-[500px] max-w-[500px] flex-col items-start gap-4 relative z-10">
                    <div className="flex items-center gap-2.5 self-stretch">
                      <p className="max-w-[335px] text-white font-inria text-[56.098px] font-bold leading-[60px] tracking-[-1px]">
                        Relocate with Confidence
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-2.5 self-stretch">
                      <p className="max-w-[447px] text-[#363F52] font-inter text-[22.248px] font-normal leading-8 tracking-[-0.15px]">
                        From visa questions to trusted agents, emergency
                        support, and smart relocation loans — we’re your partner
                        before, during, and after the move.
                      </p>
                    </div>

                    <Button
                      variant="link"
                      to="/"
                      suffixIcon={<ArrowCircleRight size={18} />}
                      className="text-[18.115px] font-normal leading-6 font-inter"
                    >
                      Explore relocation support
                    </Button>
                  </div>

                  <div className="w-full h-full absolute top-0 left-0">
                    <Image src={ImageThree} alt="" className="w-full h-full" />
                  </div>

                  <div className="flex w-full h-[347.13px] flex-col rounded-b-[20px] items-start gap-2.5 absolute left-0 bottom-[-2.13px]">
                    <div className="flex-[1_0_0] self-stretch rounded-b-[20px] [background:linear-gradient(0deg,#CDA1FC_-6.5%,rgba(239,225,255,0.00)_55.5%)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features