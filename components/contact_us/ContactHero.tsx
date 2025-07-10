import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import SVGCurve from "@/img/curveSVGWhite.svg?url";
import { useController } from "@/hooks/useController";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";
import { cn } from "@/libs/cn";

type heroProps = {
  heroImage?: StaticImport | undefined;

  heroBackgroundClassName?: string;

  contentImage?: StaticImport | undefined;
};

const ContactHero = ({
  heroImage,

  contentImage,
  heroBackgroundClassName = "",
}: heroProps) => {
  const { heroRef } = useController();
  return (
    <motion.section
      ref={heroRef}
      className={cn(
        "flex relative w-full h-screen flex-col justify-center items-center gap-2.5 px-[10px] md:px-[20px] xl:px-[100px] py-[100px] lg:py-[150px]",
        heroBackgroundClassName
      )}
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
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

          <div
            className={cn(
              "flex w-full z-0 h-full items-start gap-2.5 absolute top-0 left-0 p-2.5"
            )}
          />
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

      <div className="w-full max-w-[1440px] flex items-center relative z-[1] h-fit flex-row">
        <div className="flex  w-full flex-1 max-w-[751px] h-full flex-col items-start gap-[36px] shrink-0 justify-center">
          <div
            className={cn(
              "self-stretch font-montserrat text-[42px] font-semibold leading-[normal] text-center"
            )}
          >
            <p className="text-primary-base mb-2 text-display-medium font-medium">
              CONTACT US
            </p>
            <p className="font-bold text-display-large">
              Connect with the NaijaSpora team today
            </p>
          </div>
        </div>

        {contentImage && (
          <div className="relative hidden lg:flex items-end justify-end flex-1 mr-[-55px] mb-24">
            <Image
              src={contentImage}
              alt="Descriptive text here"
              width={1850}
              height={450}
              className="object-contain scale-[1.2]"
              priority
            />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ContactHero;
