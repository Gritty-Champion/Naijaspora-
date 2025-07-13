import React from "react";
import Wrapper from "../Wrapper";
import faqImage from "@/img/faqImg.svg?url";
import Image from "next/image";
import FAQList from "./FaqList";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";

const FAQs = ({
  faqData,
}: {
  faqData: { question: string; answer: string }[];
}) => {
  return (
    <motion.section
      className="w-full h-full"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Wrapper>
        <div className="flex w-full items-center gap-5 lg:px-[50px] py-5">
          <div className="hidden lg:flex w-full flex-1 lg:max-w-[608px] aspect-square justify-between items-center shrink-0 rounded-[20px]">
            <Image
              src={faqImage}
              alt=""
              fill
              className="!relative w-full h-full aspect-square"
            />
          </div>

          <div className="flex w-full flex-1 flex-col items-center gap-10 shrink-0">
            <div className="flex justify-center items-center gap-[3px] md:p-2.5">
              <p className="text-black text-center font-montserrat text-headline-large font-medium lg:text-display-small lg:font-semibold">
                Got Questions? We&apos;ve Got You Covered
              </p>
            </div>
            <FAQList faqData={faqData} />

            {/* <Button
              variant="text"
              iconPosition="right"
              className="!text-black"
              icon={<RiArrowDropRightLine />}
            >
              See All
            </Button> */}
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default FAQs;
