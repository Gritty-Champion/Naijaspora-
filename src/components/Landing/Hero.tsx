"use client";

import React from 'react'
import Container from '../Container';
import Button from '../Button';
import HeroBg from "@/img/HeroBG.svg?url"
import Image from 'next/image';
import { useController } from '@/hooks/useController';

const Hero = () => {
  const {heroRef} = useController();
  return (
    <section ref={heroRef} className="w-full h-[711px] relative">
      <Container>
        <div className="flex px-20 py-[124px] flex-col justify-center items-start gap-[43px]">
          <div className="flex relative z-10 justify-center items-center gap-2.5">
            <h2 className="max-w-[502px] text-dark font-inter text-[40px] leading-[48px]">
              <span className="font-semibold">Empowering Safe</span> and
              Scam-Free Relocation for{" "}
              <span className="text-primary">Nigerians Worldwide</span>
            </h2>
          </div>

          <div className="flex relative z-10 justify-center items-center gap-2.5">
            <p className="max-w-[523.39px] text-grey font-roboto text-base font-medium leading-6">
              From visa prep to verified agents, loans, emergency help, and
              post-relocation support — we've got your back.
            </p>
          </div>

          <div className="flex relative z-10 items-center gap-8">
            <Button className="px-[30px] py-[8px]">Get Started</Button>
            <Button appearance="outline" className="px-[30px] py-[8px]">
              Talk to Expert
            </Button>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={HeroBg}
              alt="hero-bg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero