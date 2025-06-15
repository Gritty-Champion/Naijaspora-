import React from "react";
import Wrapper from "../Wrapper";
import faqImage from "@/img/faqImg.svg?url";
import Image from "next/image";
import FAQList from "./FaqList";
import Button from "../Button";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "@remixicon/react";

const FAQs = ({
  faqData,
}: {
  faqData: { question: string; answer: string }[];
}) => {
  return (
    <section className="w-full h-full">
      <Wrapper>
        <div className="flex w-full items-center gap-5 px-[50px] py-5">
          <div className="hidden lg:flex w-full lg:max-w-[608px] aspect-square justify-between items-center shrink-0 rounded-[20px]">
            <Image
              src={faqImage}
              alt=""
              fill
              className="!relative w-full h-full"
            />
          </div>

          <div className="flex w-full max-w-[686px] flex-col items-center gap-10 shrink-0">
            <div className="flex justify-center items-center gap-[3px] p-2.5">
              <p className="text-black text-center font-montserrat text-headline-large font-medium">
                Got Questions? We've Got You Covered
              </p>
            </div>
            <FAQList faqData={faqData} />

            <Button variant="text" iconPosition="right" className="!text-black" icon={<RiArrowDropRightLine />} >See All</Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FAQs;
