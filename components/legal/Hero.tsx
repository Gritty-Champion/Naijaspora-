import React from "react";
import Image from "next/image";
import SVGCurve from "@/img/curveSVGWhite.svg?url";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";

const LegalHero = () => {
  return (
    <motion.section
      className="relative w-full bg-secondary-secondary_container py-36 px-[10px] md:px-[20px] xl:px-[100px]"
      variants={fadeIn("bottom", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
        <div className="w-full text-left">
          <h1 className="text-primary-base font-montserrat text-display-large font-semibold leading-[normal]">
            Legal
          </h1>
        </div>

      <div className="hidden md:flex flex-col w-full h-[60px] lg:h-[80px] z-0 items-start absolute right-0 bottom-[-2px] pointer-events-none">
        <Image
          src={SVGCurve}
          alt="Curve Decoration"
          width={1200}
          height={140}
          className="w-full object-cover"
        />
      </div>
    </motion.section>
  );
};

export default LegalHero;