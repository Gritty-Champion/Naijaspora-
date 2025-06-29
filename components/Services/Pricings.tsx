import { cn } from "@/libs/cn";
import { fadeIn } from "@/libs/motions";
import { AgentTier, PricingFeatureItem } from "@/libs/pricingFeatures";
import { motion } from "framer-motion";
import React from "react";
import CheckIcon from "@/img/check.svg";
import Button from "../Button";
import Wrapper from "../Wrapper";

const Pricings = ({
  heading,
  description,
  data,
}: {
  heading: string;
  description: string;
  data: PricingFeatureItem[];
}) => {
  return (
    <motion.section
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-fit bg-neutral-variant-95"
    >
      <Wrapper>
        <div className="flex w-full flex-col justify-center items-center gap-[30px] shrink-0 py-2.5">
          <div className="flex w-full flex-col items-center gap-2.5 self-stretch p-5">
            <p className="text-black font-montserrat text-display-large font-bold">
              {heading}
            </p>
            <p className="text-black font-montserrat text-headline-large font-medium">
              {description}
            </p>
          </div>

          <div className="flex justify-center items-start gap-2.5 flex-[1_0_0]">
            {data.map((Item, idx) => (
              <div
                key={idx}
                className="flex w-full lg:max-w-[324px] h-[761px] flex-col items-center gap-[5px] bg-white rounded-[10px]"
              >
                <div
                  className={cn(
                    "flex flex-col items-center gap-2.5 self-stretch px-[100px] py-[50px] rounded-t-[10px]",
                    {
                      "bg-[conic-gradient(from_180deg_at_50%_50%,#9BA4FF_169.61538791656494deg,#5D6299_302.88461208343506deg)]":
                        Item.type === AgentTier.Basic,
                      "bg-[linear-gradient(180deg,#FFD7EF_26.44%,#99818F_81.25%)]":
                        Item.type === AgentTier.Standard,
                      "bg-[linear-gradient(180deg,#C8C5CA_35.58%,#636264_100%)]":
                        Item.type === AgentTier.Premium,
                    }
                  )}
                >
                  <p className="text-black capitalize font-montserrat text-display-small font-semibold">
                    {Item.type}
                  </p>
                  <Item.image />
                </div>

                <div className="flex h-[394px] flex-col justify-between items-center shrink-0 self-stretch px-2.5 py-10">
                  {Item.features.title && (
                    <p className="self-stretch text-black text-center text-title-large font-normal">
                      {Item.features.title}
                    </p>
                  )}

                  <div className="flex flex-col justify-center items-start gap-2.5 self-stretch">
                    {Item.features.data.map((data, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 self-stretch"
                      >
                        <CheckIcon />
                        <p className="flex-[1_0_0] text-black font-montserrat text-title-large font-regular">
                          {data}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="w-full lg:w-[272px] h-[1px] shrink-0 bg-black" />

                  {typeof Item.price === "string" ? (
                    <p className="font-montserrat text-center text-display-small text-black font-bold">
                      {Item.price}
                    </p>
                  ) : (
                    <p className="font-montserrat text-display-large text-black font-bold">
                      ${Item.price}
                      <span className="text-headline-medium font-medium">
                        /month
                      </span>
                    </p>
                  )}
                </div>

                <Button>Get Started</Button>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Pricings;
