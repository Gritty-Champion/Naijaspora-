import React from "react";
import Wrapper from "../Wrapper";
import Button from "../Button";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { fadeIn } from "@/libs/motions";
import { motion } from "framer-motion";

const CTA = ({
  description,
  cta_text,
  cta_action,
  image,
}: {
  description: string;
  cta_text: string;
  cta_action: () => void;
  image: StaticImport;
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
        <div className="flex w-full justify-center items-center gap-2.5 p-2.5 rounded-[100px_0px]">
          <div className="flex w-full max-w-[593px] flex-col justify-center items-center gap-[30px] shrink-0 p-2.5">
            <p className="text-black text-center font-montserrat text-display-large font-bold">
              {description}
            </p>

            <Button onClick={cta_action}>{cta_text}</Button>
          </div>

          <div className="w-[642px] relative aspect-[642/543]">
            <Image
              src={image}
              alt=""
              className="rounded-[0px_0px_100px_0px]"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default CTA;
