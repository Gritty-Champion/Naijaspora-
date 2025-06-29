import { fadeIn } from "@/libs/motions";
import { motion } from "framer-motion";
import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import WorksArrow from "@/img/worksArrow.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "@/libs/cn";
import DataOne from "@/img/post-relocation/works1.svg"
import DataTwo from "@/img/post-relocation/works2.svg"
import DataThree from "@/img/post-relocation/works3.svg"
import DataFour from "@/img/post-relocation/works4.svg"
import DataFive from "@/img/post-relocation/works5.svg"

const HowTo = ({
  data,
  img,
  title,
  subheading,
  contentClasses = "flex-row-reverse",
  type = "flex",
}: {
  data?: { title: string; description: string }[];
  img: StaticImport;
  title: string;
  subheading: string;
  contentClasses?: string;
  type?: "grid" | "flex";
  }) => {
  const datas = [
    {
      img: DataOne,
      desc: "Onboarding Checklist",
    },
    {
      img: DataTwo,
      desc: "Diaspora Circle Match",
    },
    {
      img: DataThree,
      desc: "Support Ticket System",
    },
    {
      img: DataFour,
      desc: "Monthly Wellbeing Check-ins",
    },
    {
      img: DataFive,
      desc: "New Country Survival Tips",
    },
  ];
  return (
    <motion.section
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-fit"
    >
      <Wrapper>
        <div className="flex w-full flex-col justify-center items-center gap-[50px] py-2.5">
          {/* Heading */}
          <div className="flex w-full max-w-[938px] flex-col items-center gap-[30px]">
            <p className="self-stretch text-black text-center font-montserrat text-display-medium font-semibold">
              {title}
            </p>
            <p className="self-stretch text-center text-black font-montserrat text-headline-large font-medium">
              {subheading}
            </p>
          </div>

          {/* Desc */}
          <div
            className={cn(
              "flex items-start self-stretch bg-white h-full w-full",
              contentClasses
            )}
          >
            {type === "flex" && (
              <>
                <div className="flex-1 w-[544px] h-[1033px] relative shrink-0">
                  <Image
                    src={img}
                    alt=""
                    fill
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-[1_0_0] flex flex-col items-start gap-[50px] px-5 py-2.5 h-full">
                  {data &&
                    data.map((feature, idx) => (
                      <div key={idx} className="flex w-full items-start gap-6">
                        <WorksArrow />
                        <div className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
                          <p className="self-stretch text-black font-montserrat text-display-small font-medium">
                            {feature.title}
                          </p>
                          <p className="self-stretch text-black font-montserrat text-headline-small font-regular">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}

            {type === "grid" && (
                <div className="grid gap-y-5 justify-center items-center flex-[1_0_0] self-stretch grid-cols-3 place-items-center">
                {datas.map((Data, idx) => (
                  <div
                  key={idx}
                  className="flex w-[400px] h-[246px] flex-col items-center gap-[30px] bg-[#E0E0FF] p-10"
                  >
                  <Data.img />
                  <p className="max-w-[306px] text-black font-inter font-medium text-display-small text-center">
                    {Data.desc}
                  </p>
                  </div>
                ))}
                </div>
            )}
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default HowTo;
