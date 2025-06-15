import React from "react";
import Wrapper from "../Wrapper";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ServicesInterface } from "@/libs/constants";
import Image from "next/image";
import { cn } from "@/libs/cn";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";

const Services = ({
  heading,
  data,
}: {
  heading: string;
  data: ServicesInterface[];
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
        <div className="flex w-full flex-col justify-center items-center gap-[50px] self-stretch py-2.5">
          <div className="flex w-full items-center gap-2.5 p-2.5">
            <p className="w-full shrink-0 text-black text-display-small font-montserrat font-semibold">
              {heading}
            </p>
          </div>

          {data.map((Item, idx) => (
            <div
              key={idx}
              className={cn("flex w-full items-center", {
                "flex-row-reverse": idx % 2 !== 0,
              })}
            >
              <div className="w-full lg:w-[611px] aspect-[611/456] relative shrink-0">
                <Image
                  src={Item.image}
                  alt={Item.title}
                  fill
                  objectFit="cover"
                />
              </div>

              <div className="flex w-full flex-col justify-center items-center gap-5 p-2.5">
                <p className="self-stretch text-black font-montserrat text-display-medium font-semibold">
                  {Item.title}
                </p>
                <p className="self-stretch text-black font-montserrat text-headline-small font-normal">
                  {Item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Services;
